import { config } from "dotenv";
config();

const prc = process.env;

export default {
  port: prc.PORT,
  db: {
    username: prc.DB_USERNAME,
    port: prc.DB_PORT,
    host: prc.DB_HOST,
    password: prc.DB_PASSWORD,
    name: prc.DB_DATABASE_NAME,
  },
};
