
exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    consumer_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.eventNames.SPOTIFY_SECRET
};

consumer_require('./env');
