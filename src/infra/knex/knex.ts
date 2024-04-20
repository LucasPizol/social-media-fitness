import knex from "knex";
import config from "./knexfile";

export const knexHelper = knex(config);
