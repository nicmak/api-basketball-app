
const api = require('../../nbaApi/nbaApi.js');

const mapperFunction = (gameJSON) => {
  return {
    id: gameJSON.id,
    home_id: gameJSON.home_id,
    away_id: gameJSON.away_id,
    date: gameJSON.date,
    season: gameJSON.season
  }
}

const insertGames = (knex, gamesJSON) => {
  let collection = gamesJSON.map(mapperFunction);
  knex
  .insert(collection, '*')
  .into("games")
  .then(function(args) {
    console.log("Games inserted into database");
  })
  .catch(function(err) {
    console.log(err);
  })
}

module.exports = function(knex) {

  api.getGames(2016, (gamesJSON) => {
    let gamesRecord = insertGames(knex, gamesJSON);
  })
}
