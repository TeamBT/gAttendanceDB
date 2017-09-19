exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendance', (table) => {
    table.increments();
    table.date('date').notNullable();
    table.integer('student_id').references('student.id').unsigned().onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('attendance')
};
