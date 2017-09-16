
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "attendance"; ALTER SEQUENCE attendance_id_seq RESTART WITH 3;')

  .then(() => {
      var attendances = [{
        id: 1,
        time: "9/15/2017 8:45:25",
        student_id: 1
      }, {
        id: 2,
        time: "9/15/2017 8:10:25",
        student_id: 2
      }, {
        id: 3,
        time: "9/15/2017 9:00:25",
        student_id: 3
      }, {
        id: 4,
        time: "9/15/2017 9:05:25",
        student_id: 4
      }];

      return knex('attendance').insert(attendances);
    });
};
