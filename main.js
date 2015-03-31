var gamedb = require('./gamesdb');

// The Platforms
gamedb.getPlatforms(function(err, data){
	console.log(err, data);
});

// The Games
var platformId = 6;
gamedb.getPlatformGames(platformId, function(err, data){
    console.log(err, data.length);
});