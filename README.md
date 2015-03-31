# gamesdb
Node Js wrapper for the [thegamesdb](http://thegamesdb.net/) API.

# Install

```
git clone https://github.com/emersonbroga/gamesdb.git
cd gamesdb
npm install
```

To run ``` node main.js ```.

# How to use

#### Platforms
```
var gamedb = require('./gamesdb');
gamedb.getPlatforms(function(err, data){
	console.log(err, data);
});

````

#### Games
```
var gamedb = require('./gamesdb');
var platformId = 'THE_PLATFORM_ID_YOU_WANT';
gamedb.getPlatformGames(platformId, function(err, data){
	console.log(err, data.length);
});

```


##### TODOs:

 - Implement other api methods.


Thanks for reading... 
If you want to get in touch you can find me on [Twitter](https://twitter.com/emersonbroga)









