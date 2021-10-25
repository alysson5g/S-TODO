
require('dotenv/config');
const Redis = require('ioredis');

const options = {

  port: process.env.REDISPORT,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASS,
};
console.log(process.env.REDIS_HOST);
const redis = {
  client: new Redis({ ...options, db: 1 }),
};

module.exports = redis;
