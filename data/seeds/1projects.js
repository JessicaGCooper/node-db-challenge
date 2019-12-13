
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          "id": 1,
          "name": "Finish Log Cabin Quilt",
          "description": "Still need to hand quilt the majority of quilt.",
          "completed": false
        }, {
          "id": 2,
          "name": "Make Shed Into Parking",
          "description": "Clear shed and create parking spots",
          "completed": false
        }, {
          "id": 3,
          "name": "Do Laundry",
          "description": null,
          "completed": false
        }
      ]);
    });
};
