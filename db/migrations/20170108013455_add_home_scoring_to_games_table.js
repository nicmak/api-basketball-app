exports.up = function(knex, Promise) {
  return knex.schema.table('games', function(table){
    table.integer('home_score');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('games', function(table){
    table.dropColumn('home_score');
  })
};