import dotenv from "dotenv";
import path from "path";

dotenv.config();

const prc = process.env;

export default {
  port: prc.PORT,
  connectionString: prc.DATABASE_URL,
};
