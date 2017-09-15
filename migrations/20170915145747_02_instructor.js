exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructor', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('password');
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('instructor')
};
