
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "attendance"; ALTER SEQUENCE attendance_id_seq RESTART WITH 3;')

  .then(() => {
      var attendances = [{
        id: 1,
        date: "9/15/2017",
        student_id: 1
      }, {
        id: 2,
        date: "9/15/2017",
        student_id: 2
      }, {
        id: 3,
        date: "9/15/2017",
        student_id: 3
      }, {
        id: 4,
        date: "9/15/2017",
        student_id: 4
      }];

      return knex('attendance').insert(attendances);
    });
};
