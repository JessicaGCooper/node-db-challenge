
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          "id": 1,
          "name": "Thread",
          "description": null
        }, {
          "id": 2,
          "name": "Scissors",
          "description": null
        }, {
          "id": 3,
          "name": "Needles",
          "description": null
        }, {
          "id": 4,
          "name": "Quilt Hoop",
          "description": null
        }, {
          "id": 5,
          "name": "Laundry Basket",
          "description": null
        }, {
          "id": 6,
          "name": "Laundry Detergent",
          "description": null
        }, {
          "id": 7,
          "name": "Washing Machine",
          "description": null
        }, {
          "id": 8,
          "name": "Dryer",
          "description": null
        }, {
          "id": 9,
          "name": "Gravel",
          "description": null
        }, {
          "id": 10,
          "name": "Father",
          "description": null
        }, {
          "id": 11,
          "name": "Brother-in-Law",
          "description": null
        }, {
          "id": 12,
          "name": "Gravel Spreader Thingy",
          "description": null
        }, {
          "id": 13,
          "name": "Trailer",
          "description": null
        }, {
          "id": 14,
          "name": "Dirty Clothes",
          "description": null
        }, {
          "id": 15,
          "name": "Sister",
          "description": null
        }
      ]);
    });
};
