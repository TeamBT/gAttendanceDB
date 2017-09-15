
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "attendance"; ALTER SEQUENCE attendance_id_seq RESTART WITH 3;')

  .then(() => {
      var attendances = [{
        id: 1,
        time: "9/15/2017 9:03:25",
        student_id: 1
      }, {
        id: 2,
        time: "9/15/2017 13:01:25",
        student_id: 1
      }, {
        id: 3,
        time: "9/15/2017 16:01:00",
        student_id: 1
      }, {
        id: 4,
        time: "9/15/2017 9:00:25",
        student_id: 2
      }, {
        id: 5,
        time: "9/15/2017 13:09:25",
        student_id: 2
      }, {
        id: 6,
        time: "9/15/2017 16:10:00",
        student_id: 2
      }];

      return knex('attendance').insert(attendances);
    });
};
