

const Redis = require('ioredis');

const options = {

  port: 7051,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASS,
};

const redis = {
  client: new Redis({ ...options, db: 1 }),
};

module.exports = redis;
