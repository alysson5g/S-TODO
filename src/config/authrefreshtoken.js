require('dotenv').config();

export default {
  secret: process.env.REFRESHTOKEN,
  expiresIn: "2d",
};
