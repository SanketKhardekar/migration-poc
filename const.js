require("dotenv").config({ path: `.env` });

module.exports = {
  database: process.env.DATABASE,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.APPLICATION_PORT,
};
