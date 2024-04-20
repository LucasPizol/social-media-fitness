import env from "@/main/config/env";
export const knexConfig = {
  client: "pg",
  connection: {
    host: env.db.host,
    port: env.db.port,
    user: env.db.username,
    password: env.db.password,
    database: env.db.name,
  },
};
