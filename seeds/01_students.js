

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "student"; ALTER SEQUENCE student_id_seq RESTART WITH 30;')

  .then(() => {
      var students = [{
        id: 1,
        name: "Brian Mann",
        rfid: "23iuwd23jdkjasdf",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 2,
        name: "Casey Herold",
        rfid: "2w3sef2asgsdfgr",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 3,
        name: "Cody Duskin",
        rfid: "5jw8fu38di43",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 4,
        name: "Connor Alcock",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      },
      {
        id: 5,
        name: "Dan Mickulesku",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 6,
        name: "Danielle Maier",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 7,
        name: "Ellen Downing",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 8,
        name: "Eric Wallen",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 9,
        name: "Erin Shaben",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 10,
        name: "Hyunmo Yang",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 11,
        name: "Jae Holderby",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 12,
        name: "Jasmine Cervantes",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 13,
        name: "Jonathan Sax",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 14,
        name: "Jose Julio Silveira Figueiredo Junior",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 15,
        name: "Levi Holmes",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 16,
        name: "Logan Crewss",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 17,
        name: "Maria Jose Mata Jimenez",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 18,
        name: "Matthew Drumheller",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 19,
        name: "Michael Harrington",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 20,
        name: "Mikki Mesfin",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 21,
        name: "Nick Nasky",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 22,
        name: "Recardo Poole",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 23,
        name: "Roxanne Baldwin",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 24,
        name: "Sally Bouley",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 25,
        name: "Shawna Doering",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 26,
        name: "Trenton Wuerker",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 27,
        name: "Tyler Keesling	",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 28,
        name: "Tyrel Richard",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 29,
        name: "Yousif Al timimie",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }];

      return knex('student').insert(students);
    });
};
