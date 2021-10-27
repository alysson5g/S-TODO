// eslint-disable-next-line import/no-extraneous-dependencies
import createHttpError from 'http-errors';
import Jwt from 'jsonwebtoken';
// eslint-disable-next-line import/no-extraneous-dependencies
import { reject } from 'lodash';

import authConfig from '../../config/auth';
import authrefreshtoken from '../../config/authrefreshtoken';
import { client } from '../../config/redisconfig';

class JwtHelper {
  async singAcessToken(user) {
    try {
      const { id, name } = user;

      const token = Jwt.sign({ id, name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      });
      client.set(`${id}Token`, token, 'EX', 30 * 60 * 60, (err, result) => {
        if (err) {
          console.log(err.message);
          reject(createHttpError.InternalServerError());
        }
        return result;
      });
      return token;
    } catch (error) {
      throw error.message;
    }
  }

  async singAcessRefreshToken(user) {
    const { id } = user;

    const refreshtoken = Jwt.sign({ id }, authrefreshtoken.secret, {
      expiresIn: authrefreshtoken.expiresIn,
    });

    client.set(`${id}RefreshToken`, refreshtoken, 'EX', 60 * 60 * 60, (err) => {
      if (err) {
        console.log(err.message);
        reject(createHttpError.InternalServerError());
      }
      return refreshtoken;
    });
    return refreshtoken;
  }
}

export default JwtHelper;
