let dotEnv = require("dotenv").config();
let request = require('request-promise');
let fs = require('fs-extra');

let keys = require('./keys.js');

// ---- user input and running the commands ----
let fun = process.argv.slice(2);
let choices = [ 'movie-this', 'my-tweets', 'spotify-this-song', 'do-what-it-says' ];

if ( fun === 'do-what-it-says' ) {
    readCommand();
} else {
    dontRead();
}

function dontRead(){
if (fun === choices[0] ) {
    movieThis();
} else if ( fun === choices[1] ) {
    tweetBaby();
} else if ( fun === choices[2] ) {
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

    let movie = process.argv.slice(3).join('+');

    // thsi should set aa default command prompt
    if (movie === '' ){
            movie = 'Frozen';
        }

    //Key = 8b7b736c 
    request('http://www.omdbapi.com/?t=' + movie + '&r=json&plot=short&apikey=8b7b736c')
        .then(response=> {
            let data = JSON.parse(response);

            tomatoes = "cats";

            console.log(`
            Title of the movie: ${data.Title}
            Year the movie came out: ${data.Year}
            IMDB Rating of the movie: ${data.imdbRating}
            Rotten Tomatoes Rating of the movie ${tomatoes}
            Country where the movie was produced: ${data.Country}
            Language of the movie: ${data.Language}
            Plot of the movie: ${data.Plot}
            Actors in the movie: ${data.Actors}
            `);
            // console.log( 'Title of the movie: ' + data.Title);
            // console.log( 'Year the movie came out: ' + data.Year);
            // console.log( 'IMDB Rating of the movie: ' + data.imdbRating);
            // console.log( 'Rotten Tomatoes Rating of the movie ' + data.Ratings[data.Ratings.length -2 ].Value);
            // console.log( 'Country where the movie was produced: ' + data.Country);
            // console.log( 'Language of the movie: ' + data.Language);
            // console.log( 'Plot of the movie: ' + data.Plot);
            // console.log( 'Actors in the movie: ' + data.Actors);
            // console.log(data);
        });
    }

// ----- TWEETS ------

    function tweetBaby(){
        console.log(`fuck`);
    }

// Spotify 

    function spotifyBaby(){
        console.log(`music bitch`);
    }