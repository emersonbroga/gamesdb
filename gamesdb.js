var parseString = require('xml2js').parseString;
var request = require('request');

var url = 'http://thegamesdb.net/api';

function getPlatforms(cb) {
	request.get({ url: url + '/GetPlatformsList.php', keepAlive: true}, function(err, data){
		if (err) cb(err, null);
		parseString(data.body, function (err, result) {
			if (err) cb(err, null);

			if(
				typeof(result) !== 'undefined' &&
				typeof(result.Data) !== 'undefined' &&
				typeof(result.Data.Platforms) !== 'undefined' &&
				typeof(result.Data.Platforms[0]) !== 'undefined' &&
				typeof(result.Data.Platforms[0].Platform) !== 'undefined'
			){
				var platforms = result.Data.Platforms[0].Platform;
				platforms = platforms.map(function (platform) {
					return { 
						id : (typeof(platform.id) !== 'undefined') ? platform.id[0] : null, 
						name : (typeof(platform.name) !== 'undefined') ? platform.name[0] : null, 
						alias : (typeof(platform.alias) !== 'undefined') ? platform.alias[0] : null
					};
				});
				cb(null,  platforms);
			}else{
				if (err) cb(Error('Data not found'), null);
			}
		});
	});
}


function getPlatformGames(platformId, cb) {
	request.get({ url: url + '/GetPlatformGames.php?platform=' + platformId, keepAlive: true}, function(err, data){
		if (err) cb(err, null);
		parseString(data.body, function (err, result) {
			if (err) cb(err, null);
			
			if(
				typeof(result) !== 'undefined' &&
				typeof(result.Data) !== 'undefined' &&
				typeof(result.Data.Game) !== 'undefined'
			){
				var games = result.Data.Game;
				games = games.map(function (game){
					return { 
						id : (typeof(game.id) !== 'undefined') ? game.id[0] : null, 
						name : (typeof(game.GameTitle) !== 'undefined') ? game.GameTitle[0] : null, 
						relase : (typeof(game.ReleaseDate) !== 'undefined') ? game.ReleaseDate[0] : null
					};
				});
				cb(null,  games);
			}else{
				if (err) cb(Error('Data not found'), null);
			}
		});
	});
}


module.exports = {
	getPlatforms: getPlatforms,
	getPlatformGames: getPlatformGames,
};	

