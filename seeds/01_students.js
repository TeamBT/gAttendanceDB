

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
        rfid: "05911634",
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
        rfid: "sdg748asdf3d",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 6,
        name: "Danielle Maier",
        rfid: "wdfv848abnfdi3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 7,
        name: "Ellen Downing",
        rfid: "sdfir734uawe83",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 8,
        name: "Eric Wallen",
        rfid: "1274634rsdf3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 9,
        name: "Erin Shaben",
        rfid: "909823723uafshjh",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 10,
        name: "Hyunmo Yang",
        rfid: "6ayq236awejh23",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 11,
        name: "Jae Holderby",
        rfid: "13121047",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 12,
        name: "Jasmine Cervantes",
        rfid: "dsy363ir745he",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 13,
        name: "Jonathan Sax",
        rfid: "zusysg634io",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 14,
        name: "Jose Julio Silveira Figueiredo Junior",
        rfid: "65u84hdhq82",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 15,
        name: "Levi Holmes",
        rfid: "szciwe7834uhjq348qwe",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 16,
        name: "Logan Crewss",
        rfid: "sf8234wfebhjkuiq4",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 17,
        name: "Maria Jose Mata Jimenez",
        rfid: "823uiwey722h1s",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 18,
        name: "Matthew Drumheller",
        rfid: "xx64u34jkeqw",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 19,
        name: "Michael Harrington",
        rfid: "0948723yhrkasjh",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 20,
        name: "Mikki Mesfin",
        rfid: "10437jsdfkjserjke2",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 21,
        name: "Nick Nasky",
        rfid: "13219010",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 22,
        name: "Recardo Poole",
        rfid: "mniyu97iytjgv8r",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 23,
        name: "Roxanne Baldwin",
        rfid: "4trgdfhe763",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 24,
        name: "Sally Bouley",
        rfid: "89897ijthfv632f13",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 25,
        name: "Shawna Doering",
        rfid: "zdeasrer435267e",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 26,
        name: "Trenton Wuerker",
        rfid: "13158384",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 27,
        name: "Tyler Keesling",
        rfid: "02665192",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 28,
        name: "Tyrel Richard",
        rfid: "v6f7eh34b3jd3",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 29,
        name: "Yousif Al timimie",
        rfid: "3yehjdf6f4idn3",
        partial: 0,
        checked_in: false,
        excused: false
      }];

      return knex('student').insert(students);
    });
};
