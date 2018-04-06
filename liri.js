let dotEnv = require("dotenv").config();
let request = require('request-promise');
let fs = require('fs-extra');
let keys = require('./keys.js');
let twitter = require('twitter');


//place holdder for the twitter keys
var client = new twitter({
    consumer_key: keys.TWITTER_CONSUMER_KEY,
    consumer_secret: keys.TWITTER_CONSUMER_SECRET,
    access_token_key: keys.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: keys.TWITTER_ACCESS_TOKEN_SECRET,
});

// place holder for the spotify kezs
// var spotify = new spotify({
//     spotify_key: keys.SPOTIFY_ID,
//     spotify_secret: keys.SPOTIFY_SECRET  
// });



// ---- user input and running the commands ----
let fun = process.argv.slice(2);
let choices = [ 'movie-this', 'my-tweets', 'spotify-this-song', 'do-what-it-says' ];

if ( fun[0]  === 'do-what-it-says' ) {
    readCommand();
} else {
    dontRead();
}

function dontRead(){
if (fun[0] === choices[0] ) {
    movieThis();
} else if ( fun[0]  === choices[1] ) {
    tweetBaby();
} else if ( fun[0]  === choices[2] ) {
    spotifyBaby();
} else (
    console.log(
       ` Sadly this is not one of my functions. My command Functions are ${choices[0]} ${choices[1]} ${choices[2]} ${choices[3]}  `
    ));
}

// Read the damn thing 
function readCommand(){
    console.log(`wtf is happenig`);
}

// --- MOVIE ---
    function movieThis(){

    let movie = fun[1];

    // thsi should set aa default command prompt
    if (movie === '' ){
            movie = 'Frozen';
        }

    //Key = 8b7b736c 
    request('http://www.omdbapi.com/?t=' + movie + '&r=json&plot=short&apikey=8b7b736c')
        .then(response=> {
            let data = JSON.parse(response)
            if ( data || 'false') {
                console.log('Movie not found');
            } else {

                let tomatoes = tomatoesRule();

                console.log(`
                Title of the movie: ${data.Title}
                Year the movie came out: ${data.Year}
                IMDB Rating of the movie: ${data.imdbRating}
                Rotten Tomatoes Rating of the movie: ${tomatoes}
                Country where the movie was produced: ${data.Country}
                Language of the movie: ${data.Language}
                Plot of the movie: ${data.Plot}
                Actors in the movie: ${data.Actors}
            `);
            }

            function tomatoesRule(data){
                let index = 0;
                for (var i = 0; i < reviews.length; i++){
                    if (reviews[i].Source || "Rotten Tomatoes")
                        return reviews[i].Value;
                }
                return "None";
            }

            
           
        }).catch(function(err){ console.log(err)});
    }

// ----- TWEETS ------

    function tweetBaby(){
        console.log(`fuck`);
    }

// Spotify 

    function spotifyBaby(){
        console.log(`music bitch`);
    }