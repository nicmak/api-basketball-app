
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function (table) {
    table.increments('id');
    table.integer('api_id');
    table.integer('team_id');
    table.integer('custom_team_id');
    table.string('first_name');
    table.string('last_name');
    table.string('head_shot');
    table.string('college');
    table.string('height');
    table.string('weight');
    table.date('birthdate');
    table.string('position');
    // table.foreign('team_id').references('teams.id');
    // table.foreign('custom_team_id').references('custom_teams.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
