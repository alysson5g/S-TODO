import Jwt from 'jsonwebtoken';
import { promisify } from 'util';

import Users from '../models/users';
import JwtHelper from '../helpers/JwtHelper';
import authrefreshtoken from '../../config/authrefreshtoken';
import { client } from '../../config/redisconfig';

class Authrefreshtoken {
  async store(req, res) {
    try {
      const refreshToken = req.headers.authorization;
      console.log('posicao 1');
      if (!refreshToken) {
        console.log('posicao 2');
        return res.status(401).json({ error: 'Refresh Token not provided' });
      }
      console.log('posicao 3');
      const [, refToken] = refreshToken.split(' ');
      const decoded = await promisify(Jwt.verify)(
        refToken,
        authrefreshtoken.secret
      );
      console.log('reftoken', refToken);
      req.userId = decoded.id;


      const user = await Users.findByPk(req.userId);
      const { id } = user;


      const getkey = await client.get(`${id}refreshToken`);
      console.log(getkey);

      if (refToken !== getkey) {
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
