"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "properties",
      [
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "196 Merrion Road, Elm Park, Dublin, D04 T6F4",
          lat: 53.3040522,
          lng: -6.2343492,
          city: "dublin",
          country: "ireland",
          zip: "D04 T6F4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Churchtown Rd Lower, Rathmines Great, Dublin 14, D14 KW90",
          lat: 53.3084807,
          lng: -6.2506199,
          city: "dublin",
          country: "ireland",
          zip: "D14 KW90",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address:
            "Unit 11, Vergemount, Bóthar Chluain Sceach, Rathmines, Clonskeagh, Co. Dublin",
          lat: 53.3161323,
          lng: -6.2462533,
          city: "dublin",
          country: "ireland",
          zip: "D14 KW90",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "14 Lower Kilmacud Rd, Mountanville, Dublin, D14 PY56",
          lat: 53.3075286,
          lng: -6.2600014,
          city: "dublin",
          country: "ireland",
          zip: "D14 PY56",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Friedrichstraße 43-45, 10117 Berlin, Germany",
          lat: 52.5058876,
          lng: 13.3765775,
          city: "berlin",
          country: "germany",
          zip: "10117",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Grunerstraße 20, 10179 Berlin, Germany",
          lat: 52.5058876,
          lng: 13.3765775,
          city: "berlin",
          country: "germany",
          zip: "10179",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Schloßstraße 34, 12163 Berlin, Germany",
          lat: 52.4551894,
          lng: 13.3157716,
          city: "berlin",
          country: "germany",
          zip: "12163",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Bayerstraße 10A, 80335 München, Germany",
          lat: 48.1411447,
          lng: 11.5114213,
          city: "berlin",
          country: "germany",
          zip: "80335",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Englischer Garten 3, 80538 München, Germany",
          lat: 48.1411447,
          lng: 11.5114213,
          city: "berlin",
          country: "germany",
          zip: "80538",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Fritz-Grünbaum-Platz 1, 1060 Wien, Austria",
          lat: 48.1819332,
          lng: 16.3259285,
          city: "vienna",
          country: "austria",
          zip: "1060",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: faker.company.companyName(),
          photo: faker.image.city(250, 250),
          address: "Kundratstraße 3, 1100 Wien, Austria",
          lat: 48.1730248,
          lng: 16.3493511,
          city: "vienna",
          country: "austria",
          zip: "1100",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
