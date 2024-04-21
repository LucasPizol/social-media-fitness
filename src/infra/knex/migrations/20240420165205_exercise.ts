import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("exercise", (table) => {
    table.string("id").defaultTo(knex.fn.uuid()).primary();
    table.string("name").notNullable();
    table
      .string("userId")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE");
    table.boolean("isActive").notNullable().defaultTo(true);
    table.datetime("createdAt").notNullable().defaultTo(knex.fn.now());
    table.datetime("disabledAt").notNullable().defaultTo(knex.fn.now());
    table.datetime("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("exercise");
}
