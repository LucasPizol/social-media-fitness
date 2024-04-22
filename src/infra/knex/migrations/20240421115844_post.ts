import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("post", (table) => {
    table.string("id").defaultTo(knex.fn.uuid()).primary();
    table.text("content").notNullable();
    table
      .string("userId")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE");
    table.datetime("createdAt").notNullable().defaultTo(knex.fn.now());
    table.datetime("updatedAt").notNullable().defaultTo(knex.fn.now());
    table.datetime("disabledAt");
    table.boolean("isActive").notNullable().defaultTo(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("post");
}
