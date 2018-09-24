/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "logged_in": false,

  "prisoners": [{
    "id": "1",
    "first_name": "Husain",
    "surname": "Beynke",
    "number": "A9321TX",
    "dob": "01/02/1980",
    "nationality": "Welsh",
    "alerts": 3,
    "sentence_calc": "04/01/2018",
    "arrival_date": "05/01/2018",
    "release_date": "02/01/2018",
    "tier": "D",
    "status_change": "26/09/2018",
    "allocated": false
  }, {
    "id": "2",
    "first_name": "Pen",
    "surname": "Fortin",
    "number": "A4618QX",
    "dob": "16/07/1978",
    "nationality": "Welsh",
    "alerts": 28,
    "sentence_calc": "04/01/2018",
    "arrival_date": "02/01/2018",
    "release_date": "03/01/2018",
    "tier": "C",
    "status_change": "19/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 2
  }, {
    "id": "3",
    "first_name": "Briano",
    "surname": "Toohey",
    "number": "A1619YD",
    "dob": "02/09/1955",
    "nationality": "Welsh",
    "alerts": 6,
    "sentence_calc": "07/01/2018",
    "arrival_date": "08/01/2018",
    "release_date": "07/01/2018",
    "tier": null,
    "status_change": "16/09/2018",
    "allocated": false
  }, {
    "id": "4",
    "first_name": "Jere",
    "surname": "Gostage",
    "number": "A0338ND",
    "dob": "18/03/1972",
    "nationality": "Welsh",
    "alerts": 8,
    "sentence_calc": "05/01/2018",
    "arrival_date": "05/01/2018",
    "release_date": "08/01/2018",
    "tier": "B",
    "status_change": "27/09/2018",
    "allocated": false
  }, {
    "id": "5",
    "first_name": "Dwain",
    "surname": "Meaden",
    "number": "A5266MK",
    "dob": "16/11/1958",
    "nationality": "Welsh",
    "alerts": 1,
    "sentence_calc": "09/01/2018",
    "arrival_date": "03/01/2018",
    "release_date": null,
    "tier": "C",
    "status_change": "03/09/2018",
    "allocated": null
  }, {
    "id": "6",
    "first_name": "Daniel",
    "surname": "Durtnal",
    "number": "A7586LA",
    "dob": "23/03/1993",
    "nationality": "Welsh",
    "alerts": 26,
    "sentence_calc": "07/01/2018",
    "arrival_date": "06/01/2018",
    "release_date": "06/01/2018",
    "tier": "C",
    "status_change": "25/09/2018",
    "allocated": null
  }, {
    "id": "7",
    "first_name": "Desmond",
    "surname": "Cappleman",
    "number": "A6584GR",
    "dob": "09/02/1992",
    "nationality": "Welsh",
    "alerts": 20,
    "sentence_calc": "05/01/2018",
    "arrival_date": "08/01/2018",
    "release_date": "03/01/2018",
    "tier": "B",
    "status_change": "26/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 3
  }, {
    "id": "8",
    "first_name": "Sollie",
    "surname": "Willoughey",
    "number": "A8291XJ",
    "dob": "07/06/1967",
    "nationality": "Welsh",
    "alerts": 23,
    "sentence_calc": "09/01/2018",
    "arrival_date": "09/01/2018",
    "release_date": "01/01/2018",
    "tier": "A",
    "status_change": "10/09/2018",
    "allocated": false
  }, {
    "id": "9",
    "first_name": "Mort",
    "surname": "Scarfe",
    "number": "A8417LM",
    "dob": "14/04/1979",
    "nationality": "Welsh",
    "alerts": 25,
    "sentence_calc": "01/01/2018",
    "arrival_date": "05/01/2018",
    "release_date": "02/01/2018",
    "tier": "D",
    "status_change": "25/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 8
  }, {
    "id": "10",
    "first_name": "Hasty",
    "surname": "Beales",
    "number": "A6141FW",
    "dob": "16/11/1959",
    "nationality": "Welsh",
    "alerts": 16,
    "sentence_calc": "01/01/2018",
    "arrival_date": "02/01/2018",
    "release_date": null,
    "tier": "B",
    "status_change": "01/09/2018",
    "allocated": null
  }, {
    "id": "11",
    "first_name": "Bevan",
    "surname": "Gallyhaock",
    "number": "A2633RA",
    "dob": "25/06/1976",
    "nationality": "Welsh",
    "alerts": 5,
    "sentence_calc": "07/01/2018",
    "arrival_date": "03/01/2018",
    "release_date": "02/01/2018",
    "tier": null,
    "status_change": "20/09/2018",
    "allocated": false
  }, {
    "id": "12",
    "first_name": "Lemar",
    "surname": "Sturley",
    "number": "A1501SE",
    "dob": "18/12/1976",
    "nationality": "Welsh",
    "alerts": 13,
    "sentence_calc": "01/01/2018",
    "arrival_date": "05/01/2018",
    "release_date": "01/01/2018",
    "tier": null,
    "status_change": "08/09/2018",
    "allocated": false
  }, {
    "id": "13",
    "first_name": "Lamar",
    "surname": "Hegge",
    "number": "A5214YA",
    "dob": "23/06/1992",
    "nationality": "Welsh",
    "alerts": 29,
    "sentence_calc": "03/01/2018",
    "arrival_date": "07/01/2018",
    "release_date": "03/01/2018",
    "tier": "B",
    "status_change": "17/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 3
  }, {
    "id": "14",
    "first_name": "Rodolph",
    "surname": "Albany",
    "number": "A7452ZG",
    "dob": "11/08/1976",
    "nationality": "Welsh",
    "alerts": 4,
    "sentence_calc": "02/01/2018",
    "arrival_date": "03/01/2018",
    "release_date": "04/01/2018",
    "tier": "A",
    "status_change": "25/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 9
  }, {
    "id": "15",
    "first_name": "Craggie",
    "surname": "Gagie",
    "number": "A7539TL",
    "dob": "28/02/1986",
    "nationality": "Welsh",
    "alerts": 10,
    "sentence_calc": "07/01/2018",
    "arrival_date": "07/01/2018",
    "release_date": null,
    "tier": "D",
    "status_change": "25/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 7
  }, {
    "id": "16",
    "first_name": "Putnem",
    "surname": "Barthelet",
    "number": "A3212VE",
    "dob": "20/09/1981",
    "nationality": "Welsh",
    "alerts": 17,
    "sentence_calc": "03/01/2018",
    "arrival_date": "09/01/2018",
    "release_date": null,
    "tier": "D",
    "status_change": "11/09/2018",
    "allocated": false
  }, {
    "id": "17",
    "first_name": "Durward",
    "surname": "Grenfell",
    "number": "A9329XC",
    "dob": "25/05/1977",
    "nationality": "Welsh",
    "alerts": 25,
    "sentence_calc": "09/01/2018",
    "arrival_date": "02/01/2018",
    "release_date": null,
    "tier": null,
    "status_change": "04/09/2018",
    "allocated": false
  }, {
    "id": "18",
    "first_name": "Avram",
    "surname": "Zima",
    "number": "A1315OV",
    "dob": "31/10/1956",
    "nationality": "Welsh",
    "alerts": 24,
    "sentence_calc": "04/01/2018",
    "arrival_date": "03/01/2018",
    "release_date": "04/01/2018",
    "tier": "C",
    "status_change": "14/09/2018",
    "allocated": false
  }, {
    "id": "19",
    "first_name": "Lalo",
    "surname": "Easman",
    "number": "A4942FT",
    "dob": "06/02/1964",
    "nationality": "Welsh",
    "alerts": 16,
    "sentence_calc": "08/01/2018",
    "arrival_date": "04/01/2018",
    "release_date": "01/01/2018",
    "tier": "C",
    "status_change": "04/09/2018",
    "allocated": null
  }, {
    "id": "20",
    "first_name": "Pietro",
    "surname": "Kidds",
    "number": "A3665EN",
    "dob": "28/09/1994",
    "nationality": "Welsh",
    "alerts": 18,
    "sentence_calc": "02/01/2018",
    "arrival_date": "07/01/2018",
    "release_date": null,
    "tier": null,
    "status_change": "08/09/2018",
    "allocated": false
  }, {
    "id": "21",
    "first_name": "Niko",
    "surname": "Bezants",
    "number": "A8843KX",
    "dob": "14/09/1998",
    "nationality": "Welsh",
    "alerts": 9,
    "sentence_calc": "03/01/2018",
    "arrival_date": "05/01/2018",
    "release_date": "04/01/2018",
    "tier": null,
    "status_change": "12/09/2018",
    "allocated": false
  }, {
    "id": "22",
    "first_name": "Carleton",
    "surname": "Norcliffe",
    "number": "A6014UU",
    "dob": "13/04/1968",
    "nationality": "Welsh",
    "alerts": 1,
    "sentence_calc": "03/01/2018",
    "arrival_date": "05/01/2018",
    "release_date": null,
    "tier": "A",
    "status_change": "24/09/2018",
    "allocation_date": "05/01/2018",
    "allocated": true,
    "pomIndex": 2
  }, {
    "id": "23",
    "first_name": "Kele",
    "surname": "Malone",
    "number": "A2892FX",
    "dob": "24/12/1992",
    "nationality": "Welsh",
    "alerts": 2,
    "sentence_calc": "09/01/2018",
    "arrival_date": "08/01/2018",
    "release_date": "09/01/2018",
    "tier": null,
    "status_change": "20/09/2018",
    "allocated": false
  }, {
    "id": "24",
    "first_name": "Chadwick",
    "surname": "Huxstep",
    "number": "A7032XZ",
    "dob": "04/06/1963",
    "nationality": "Welsh",
    "alerts": 14,
    "sentence_calc": "09/01/2018",
    "arrival_date": "07/01/2018",
    "release_date": "04/01/2018",
    "tier": "D",
    "status_change": "25/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 5
  }, {
    "id": "25",
    "first_name": "Farr",
    "surname": "Beddoe",
    "number": "A1734AD",
    "dob": "13/05/1974",
    "nationality": "Welsh",
    "alerts": 11,
    "sentence_calc": "09/01/2018",
    "arrival_date": "03/01/2018",
    "release_date": "04/01/2018",
    "tier": null,
    "status_change": "02/09/2018",
    "allocated": false
  }, {
    "id": "26",
    "first_name": "Evyn",
    "surname": "Springthorpe",
    "number": "A5698JV",
    "dob": "24/10/1951",
    "nationality": "Welsh",
    "alerts": 11,
    "sentence_calc": "08/01/2018",
    "arrival_date": "05/01/2018",
    "release_date": "06/01/2018",
    "tier": "B",
    "status_change": "21/09/2018",
    "allocated": true,
    "allocation_date": "05/01/2018",
    "pomIndex": 6
  }, {
    "id": "27",
    "first_name": "Timothy",
    "surname": "Barnewelle",
    "number": "A5296MW",
    "dob": "23/05/1959",
    "nationality": "Welsh",
    "alerts": 12,
    "sentence_calc": "03/01/2018",
    "arrival_date": "04/01/2018",
    "release_date": "07/01/2018",
    "tier": null,
    "status_change": "17/09/2018",
    "allocated": false
  }, {
    "id": "28",
    "first_name": "Val",
    "surname": "Lobley",
    "number": "A4086AD",
    "dob": "03/11/1967",
    "nationality": "Welsh",
    "alerts": 30,
    "sentence_calc": "02/01/2018",
    "arrival_date": "01/01/2018",
    "release_date": "07/01/2018",
    "tier": null,
    "status_change": "14/09/2018",
    "allocated": false
  }, {
    "id": "29",
    "first_name": "Costa",
    "surname": "Jolly",
    "number": "A4369HV",
    "dob": "29/07/1957",
    "nationality": "Welsh",
    "alerts": 25,
    "sentence_calc": "02/01/2018",
    "arrival_date": "04/01/2018",
    "release_date": "08/01/2018",
    "tier": null,
    "status_change": "21/09/2018",
    "allocated": false
  }, {
    "id": "30",
    "first_name": "Padriac",
    "surname": "Rawls",
    "number": "A7948MS",
    "dob": "21/07/1985",
    "nationality": "Welsh",
    "alerts": 17,
    "sentence_calc": "04/01/2018",
    "arrival_date": "03/01/2018",
    "release_date": "02/01/2018",
    "tier": "B",
    "status_change": "13/09/2018",
    "allocated": false
  }],
"poms": [
    {
      "id": 1,
      "first_name": "Annabella",
      "surname": "Mantle",
      "email": "amantle0@miitbeian.gov.cn",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 5,
      "tier_b": 13,
      "tier_c": 1,
      "tier_d": 0,
      "total": 19,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 2,
      "first_name": "Jeremy",
      "surname": "Hanney",
      "email": "jhanney1@economist.com",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 0,
      "tier_b": 0,
      "tier_c": 0,
      "tier_d": 0,
      "total": 0,
      "working_pattern": "Full time",
      "status": "Inactive"
    },
    {
      "id": 3,
      "first_name": "Rowe",
      "surname": "Dyke",
      "email": "rdyke2@nyu.edu",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 0,
      "tier_b": 0,
      "tier_c": 0,
      "tier_d": 0,
      "total": 0,
      "working_pattern": "Part Time",
      "status": "Inactive"
    },
    {
      "id": 4,
      "first_name": "Tonye",
      "surname": "Dacks",
      "email": "tdacks3@oakley.com",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 3,
      "tier_b": 10,
      "tier_c": 1,
      "tier_d": 0,
      "total": 14,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 5,
      "first_name": "Flin",
      "surname": "Behnecke",
      "email": "fbehnecke4@seesaa.net",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 3,
      "tier_b": 4,
      "tier_c": 17,
      "tier_d": 0,
      "total": 24,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 6,
      "first_name": "Toma",
      "surname": "Balentyne",
      "email": "tbalentyne5@aol.com",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 7,
      "tier_b": 8,
      "tier_c": 11,
      "tier_d": 0,
      "total": 26,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 7,
      "first_name": "Kory",
      "surname": "Trowbridge",
      "email": "ktrowbridge6@nba.com",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 2,
      "tier_b": 2,
      "tier_c": 9,
      "tier_d": 0,
      "total": 13,
      "working_pattern": "Part Time - 0.8",
      "status": "Active"
    },
    {
      "id": 8,
      "first_name": "Toiboid",
      "surname": "Warsop",
      "email": "twarsop7@comsenz.com",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 3,
      "tier_b": 8,
      "tier_c": 7,
      "tier_d": 0,
      "total": 18,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 9,
      "first_name": "Noella",
      "surname": "Pepler",
      "email": "npepler8@privacy.gov.au",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 3,
      "tier_b": 4,
      "tier_c": 14,
      "tier_d": 0,
      "total": 21,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 10,
      "first_name": "Amelie",
      "surname": "Sushams",
      "email": "asushams9@merriam-webster.com",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 7,
      "tier_b": 0,
      "tier_c": 14,
      "tier_d": 0,
      "total": 21,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 11,
      "first_name": "Carin",
      "surname": "Gatrill",
      "email": "cgatrilla@mayoclinic.com",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 0,
      "tier_b": 2,
      "tier_c": 4,
      "tier_d": 0,
      "total": 6,
      "working_pattern": "Part Time - 0.2",
      "status": "Active"
    },
    {
      "id": 12,
      "first_name": "Palm",
      "surname": "Peterken",
      "email": "ppeterkenb@naver.com",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 4,
      "tier_b": 5,
      "tier_c": 1,
      "tier_d": 0,
      "total": 10,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 13,
      "first_name": "Eveleen",
      "surname": "Morcomb",
      "email": "emorcombc@facebook.com",
      "gender": "Female",
      "type": "Prison-POM",
      "tier_a": 8,
      "tier_b": 13,
      "tier_c": 9,
      "tier_d": 0,
      "total": 30,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 14,
      "first_name": "Ronny",
      "surname": "Churchard",
      "email": "rchurchardd@hostgator.com",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 0,
      "tier_b": 3,
      "tier_c": 7,
      "tier_d": 0,
      "total": 10,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 15,
      "first_name": "Cooper",
      "surname": "Huthart",
      "email": "chutharte@google.com.au",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 3,
      "tier_b": 7,
      "tier_c": 16,
      "tier_d": 0,
      "total": 26,
      "working_pattern": "Part Time - 0.4",
      "status": "Active"
    },
    {
      "id": 16,
      "first_name": "Hilton",
      "surname": "Dodell",
      "email": "hdodellf@google.ca",
      "gender": "Male",
      "type": "Probation-POM",
      "tier_a": 2,
      "tier_b": 5,
      "tier_c": 14,
      "tier_d": 0,
      "total": 21,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 17,
      "first_name": "Gerek",
      "surname": "Morecomb",
      "email": "gmorecombg@ehow.com",
      "gender": "Male",
      "type": "Probation-POM",
      "tier_a": 6,
      "tier_b": 4,
      "tier_c": 15,
      "tier_d": 0,
      "total": 25,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 18,
      "first_name": "Nevin",
      "surname": "Camden",
      "email": "ncamdenh@jalbum.net",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 3,
      "tier_b": 1,
      "tier_c": 16,
      "tier_d": 0,
      "total": 20,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 19,
      "first_name": "Orbadiah",
      "surname": "Sotheby",
      "email": "osothebyi@tinyurl.com",
      "gender": "Male",
      "type": "Prison-POM",
      "tier_a": 3,
      "tier_b": 4,
      "tier_c": 15,
      "tier_d": 0,
      "total": 22,
      "working_pattern": "Full time",
      "status": "Active"
    },
    {
      "id": 20,
      "first_name": "Whit",
      "surname": "Sandcraft",
      "email": "wsandcraftj@com.com",
      "gender": "Male",
      "type": "Probation-POM",
      "tier_a": 2,
      "tier_b": 1,
      "tier_c": 1,
      "tier_d": 0,
      "total": 4,
      "working_pattern": "Full time",
      "status": "Active"
    }
  ]
}
