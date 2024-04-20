"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTable = void 0;
require("module-alias/register");
const env_1 = __importDefault(require("@/main/config/env"));
const knex_1 = require("knex");
console.log(env_1.default);
const knexBuilder = (0, knex_1.knex)({
    client: "pg",
    connection: env_1.default.connectionString,
    migrations: {
        directory: "migrations",
    },
    seeds: {
        directory: "seeds",
    },
});
const userTable = () => knexBuilder.schema.createTableIfNotExists("user", (table) => {
    table
        .string("id")
        .defaultTo(knexBuilder.raw("uuid_generate_v4()"))
        .primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("avatar");
    table.string("createdAt").notNullable().defaultTo(knexBuilder.fn.now());
    table.string("updatedAt").notNullable().defaultTo(knexBuilder.fn.now());
});
exports.userTable = userTable;
exports.default = knexBuilder;
