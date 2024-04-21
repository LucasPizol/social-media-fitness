import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("like_post", (table) => {
    table.string("id").defaultTo(knex.fn.uuid()).primary();
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
    table.datetime("createdAt").notNullable().defaultTo(knex.fn.now());
    table.datetime("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("like_post");
}
