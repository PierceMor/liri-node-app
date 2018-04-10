let dotEnv = require("dotenv").config();
let request = require('request-promise');
let fs = require('fs-extra');
let keys = require('./keys.js');



// place holder for the spotify kezs
// var spotify = new spotify({
//     spotify_key: keys.SPOTIFY_ID,
//     spotify_secret: keys.SPOTIFY_SECRET  
// });


//---------------------------------------------------------------
// ---- user input and running the commands ---------------------
//---------------------------------------------------------------

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

//---------------------------------------------------------------
// Read the damn thing ------------------------------------------
//---------------------------------------------------------------

function readCommand(){
    fs.readFile("random.txt", "utf8", (err, data) => {
        if (err) throw err;
        data=data.slice(",");
        fun[0]=data;
        dontRead();
        console.log(data);
        console.log(fun);
    });
        
}

//---------------------------------------------------------------
// --- MOVIE ----------------------------------------------------
//---------------------------------------------------------------

    function movieThis(){

    let movie = fun.slice(1).join('+');

    // thsi should set aa default command prompt
    if (movie === '' ){
            movie = 'Frozen';
        }

    //Key = 8b7b736c 
    request('http://www.omdbapi.com/?t=' + movie + '&r=json&plot=short&apikey=8b7b736c')
        .then(response=> {
            let data = JSON.parse(response)
            if ( data === 'false') {
                console.log('Movie not found');
            } else {

                let rottenTomatoes = "";

               
                    let reviews=data.Ratings;
                
                    for (var i = 0; i < data.Ratings.length; i++){
                        if (data.Ratings[i].Source == "Rotten Tomatoes")
                        {rottenTomatoes = data.Ratings[i].Value;}
                    }

                console.log(`
                Title of the movie: ${data.Title}
                Year the movie came out: ${data.Year}
                IMDB Rating of the movie: ${data.imdbRating}
                Rotten Tomatoes Rating of the movie: ${rottenTomatoes}
                Country where the movie was produced: ${data.Country}
                Language of the movie: ${data.Language}
                Plot of the movie: ${data.Plot}
                Actors in the movie: ${data.Actors}
            `);
            } 
        }).catch(function(err){console.log(err)});
    }

//-----------------------------------------------------------------
// ----- TWEETS ---------------------------------------------------
//-----------------------------------------------------------------

    function tweetBaby(){

        let twitter = require('twitter');

        //place holdder for the twitter keys
        var client = new twitter(keys.twitter);

        var params = {
            count: 20,
            include_rts: true,
        };

        client.get( 'statuses/user_timeline', params, function(error, tweets, response){
            if (!error){
               
                for (var i=0; i < tweets.length; i++){
                    var n = i + 1;
                    console.log(`
                    ${n}
                    Created:  ${tweets[i].created_at}
                    Text:  ${tweets[i].text}
                    `);
                }
            }           
        });
    }

//---------------------------------------------------------------
//------- Spotify -----------------------------------------------
//---------------------------------------------------------------
    function spotifyBaby(){
        console.log(`The Girlfriend wouldnt give me her Spotify premium password.......`);
    }