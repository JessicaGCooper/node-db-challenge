
exports.up = function(knex) {
    return knex.schema
    .createTable("tasks", tbl => {
        tbl.increments();

        tbl.string("description", 400)
            .notNullable();

        tbl.string("notes", 400)

        tbl.boolean("completed")
            .defaultTo(false)

        // Foreign Key
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE") // CASCADE, RESTRICT, DO NOTHING, SET NULL,
            .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
};
