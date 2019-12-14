
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
      {
        "id": 1,
        "description": "Get supplies",
        "notes": "Supplies are in pink basket.",
        "completed": true,
        "project_id": 1
      }, {
        "id": 2,
        "description": "Put quilt in hoop",
        "notes": null,
        "completed": true,
        "project_id": 1
      }, {
        "id": 3,
        "description": "Thread needle",
        "notes": "Use purple thread on yellow blocks and yellow thread on purple blocks.",
        "completed": false,
        "project_id": 1
      }, {
        "id": 4,
        "description": "Quilt blocks",
        "notes": null,
        "completed": false,
        "project_id": 1
      }, {
        "id": 5,
        "description": "Clear out equipment",
        "notes": "Try to finish before winter.",
        "completed": true,
        "project_id": 2
      }, {
        "id": 6,
        "description": "Clear out trash",
        "notes": null,
        "completed": false,
        "project_id": 2
      }, {
        "id": 7,
        "description": "Get load of gravel",
        "notes": null,
        "completed": false,
        "project_id": 2
      }, {
        "id": 8,
        "description": "Spread Gravel Evenly",
        "notes": null,
        "completed": false,
        "project_id": 2
      }, {
        "id": 9,
        "description": "Sort Laundry",
        "notes": "Totally wait until you have nothing halfway clean left to wear.",
        "completed": false,
        "project_id": 3
      }, {
        "id": 10,
        "description": "Put in washer",
        "notes": null,
        "completed": true,
        "project_id": 3
      }, {
        "id": 11,
        "description": "Add detergent",
        "notes": null,
        "completed": false,
        "project_id": 3
      }, {
        "id": 12,
        "description": "Move to dryer when load finished",
        "notes": null,
        "completed": false,
        "project_id": 3
      }, {
        "id": 13,
        "description": "Leave in dryer for a week",
        "notes": null,
        "completed": false,
        "project_id": 3
      }
    ]);
  })
};
