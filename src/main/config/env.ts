import dotenv from "dotenv";

dotenv.config();

const prc = process.env;

export default {
  port: Number(prc.PORT),
  connectionString: prc.DATABASE_URL || "",
  jwtSecret: prc.JWT_SECRET || "",
  s3: {
    url: prc.S3_URL,
    public_key: prc.S3_PUBLIC_KEY,
    secret_key: prc.S3_SECRET_KEY,
  },
};
