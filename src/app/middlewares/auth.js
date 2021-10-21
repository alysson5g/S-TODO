import Jwt from 'jsonwebtoken';

import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {


    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');


  try {
    const decoded = await promisify(Jwt.verify)(token, authConfig.secret);
    console.log('middleware 4');

    req.userId = decoded.id;



    return next();
  } catch (err) {
    console.log('err', err);
    return res.status(401).json({ error: 'Token invalid' });
  }
};
