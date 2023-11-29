var DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const config = require('../config');

var scopes = ['identify', 'email'];




const jwt = require('jsonwebtoken');

passport.use(new DiscordStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL,
    scope: scopes
},
async function(accessToken, refreshToken, profile, cb) {
    try {
            cb(null, profile);
    } catch (err) {
        console.log(err);
        cb(err);
    }
}));

