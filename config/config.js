require("dotenv").config({ path: `.env` });
module.exports = {
  development: {
    dialect: "mysql",
    host: process.env.HOST,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306,
  },
  dev: {
    dialect: "mysql",
    host: process.env.HOST,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306,
  },
  local: {
    dialect: "mysql",
    host: process.env.HOST,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306,
  },
};
