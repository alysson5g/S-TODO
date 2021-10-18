import Jwt from 'jsonwebtoken';

import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  console.log('middleware 1');
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log('middleware 2');

    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');
  console.log('middleware 3');

  try {
    const decoded = await promisify(Jwt.verify)(token, authConfig.secret);
    console.log('middleware 4');

    req.userId = decoded.id;
    console.log(req.userId);

    return next();
  } catch (err) {
    console.log('err', err);
    return res.status(401).json({ error: 'Token invalid' });
  }
};
