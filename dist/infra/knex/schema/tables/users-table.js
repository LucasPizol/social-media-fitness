"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTable = void 0;
const userTable = (knexConnection) => knexConnection.schema.createTableIfNotExists("user", (table) => {
    table
        .string("id")
        .defaultTo(knexConnection.raw("uuid_generate_v4()"))
        .primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("avatar");
    table.string("createdAt").notNullable().defaultTo(knexConnection.fn.now());
    table.string("updatedAt").notNullable().defaultTo(knexConnection.fn.now());
});
exports.userTable = userTable;
