let request = require('request-promise');
let fs = require('fs-extra');

let movie = process.argv.slice(2).join('+');

   // thsi should set aa default command prompt
   if (movie === '' ){
        movie = 'Frozen';
    }

//Key = 8b7b736c 
request('http://www.omdbapi.com/?t=' + movie + '&r=json&plot=short&apikey=8b7b736c')
    .then(response=> {
        let data = JSON.parse(response);
        // console.log( 'Title of the movie: ' + data.Title);
        // console.log( 'Year the movie came out: ' + data.Year);
        // console.log( 'IMDB Rating of the movie: ' + data.imdbRating);
        // console.log( 'Rotten Tomatoes Rating of the movie ' + data.Ratings[data.Ratings.length -2 ].Value);
        // console.log( 'Country where the movie was produced: ' + data.Country);
        // console.log( 'Language of the movie: ' + data.Language);
        // console.log( 'Plot of the movie: ' + data.Plot);
        // console.log( 'Actors in the movie: ' + data.Actors);
        console.log(data);
    });
