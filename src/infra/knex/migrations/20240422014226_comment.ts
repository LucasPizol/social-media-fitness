import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("comment", (table) => {
    table.string("id").defaultTo(knex.fn.uuid()).primary();
    table.string("content").notNullable();
    table
      .string("userId")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE");
    table
      .string("postId")
      .notNullable()
      .references("id")
      .inTable("post")
      .onDelete("CASCADE");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("comment");
}
