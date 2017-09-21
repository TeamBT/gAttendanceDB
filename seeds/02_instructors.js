require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "instructor"; ALTER SEQUENCE instructor_id_seq RESTART WITH 3;')

  .then(() => {
      var hash = bcrypt.hashSync(process.env.SECRET_WORD, saltRounds)
      var hash2 = bcrypt.hashSync(process.env.SECRET_WORD2, saltRounds)
      var instructors = [{
        id: 1,
        name: "Berto Ortega",
        password: hash

      }, {
        id: 2,
        name: "Matt Winzer",
        password: hash2
      }];

      return knex('instructor').insert(instructors);
    });
};
