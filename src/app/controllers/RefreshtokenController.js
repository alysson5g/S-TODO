import Jwt from "jsonwebtoken";
import { promisify } from 'util';

import User from '../models/Users';
import JwtHelper from '../helpers/JwtHelper';
import authrefreshtoken from '../../config/authrefreshtoken';
import { client } from '../../config/redisconfig';

class Authrefreshtoken {
  async store(req, res) {
    try {
      const RefreshToken = req.headers.authorization;
      console.log('posicao 1');
      if (!RefreshToken) {
        console.log('posicao 2');
        return res.status(401).json({ error: 'Refresh Token not provided' });
      }
      console.log('posicao 3');
      const [, Reftoken] = RefreshToken.split(' ');
      const decoded = await promisify(Jwt.verify)(
        Reftoken,
        authrefreshtoken.secret
      );
      console.log('reftoken', Reftoken);
      req.userId = decoded.id;

      // const buscId = JSON.stringify(req.userId);
      const user = await User.findByPk(req.userId);
      const { id } = user;
      // console.log('client redis', client);

      const Getkey = await client.get(`${id}RefreshToken`);
      console.log(Getkey);

      if (Reftoken !== Getkey) {
        return res.status(401).json({ error: ' Token not found' });

        // { O hash MD5 para bullinvcba2021 é: ac4e94811b83144ec156de1b811249f1
      }

      const startToken = new JwtHelper();
      const newToken = await startToken.singAcessToken(user);

      const newRefreshToken = await startToken.singAcessRefreshToken(user);

      console.log(newToken);
      console.log(newRefreshToken);
      return res.json({
        newToken,
        newRefreshToken,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
      throw error.message;
    }
  }
}
export default new Authrefreshtoken();
