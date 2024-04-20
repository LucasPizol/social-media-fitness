import dotenv from "dotenv";

dotenv.config();

const prc = process.env;

export default {
  port: Number(prc.PORT),
  connectionString: prc.DATABASE_URL || "",
  jwtSecret: prc.JWT_SECRET || "",
};
