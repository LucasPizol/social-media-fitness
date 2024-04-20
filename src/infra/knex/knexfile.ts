import dotenv from "dotenv";
import path from "path";
import type { Knex } from "knex";
import "ts-node/register";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

const config: { [key: string]: Knex.Config } = {
  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "migrations",
    },
  },
};

export default config["production"];
