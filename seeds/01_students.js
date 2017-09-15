

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "student"; ALTER SEQUENCE student_id_seq RESTART WITH 5;')

  .then(() => {
      var students = [{
        id: 1,
        name: "Bubba",
        rfid: "23iuwd23jdkjasdf",
        password: "bakky",
        partial: 0
      }, {
        id: 2,
        name: "Kelly",
        rfid: "2w3sef2asgsdfgr",
        password: "bakky",
        partial: 0
      }, {
        id: 3,
        name: "Bob",
        rfid: "5jw8fu38di43",
        password: "bakky",
        partial: 0
      }, {
        id: 4,
        name: "Shila",
        rfid: "968rueu8du3udjd3",
        password: "bakky",
        partial: 0
      }];

      return knex('student').insert(students);
    });
};
