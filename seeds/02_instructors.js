require('dotenv').config();

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "instructor"; ALTER SEQUENCE instructor_id_seq RESTART WITH 3;')

  .then(() => {
      var instructors = [{
        id: 1,
        name: "Berto",
        password: "smack"

      }, {
        id: 2,
        name: "Matt",
        password: "smack"
      }];

      return knex('instructor').insert(instructors);
    });
};
