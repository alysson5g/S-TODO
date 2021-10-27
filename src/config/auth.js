require('dotenv').config();


export default {
  secret: process.env.APPSECRET,

  expiresIn: "1d",

};
