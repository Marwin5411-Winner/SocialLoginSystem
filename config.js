require('dotenv').config();
module.exports = {
    clientID: process.env.CLIENT_ID || 'id',
    clientSecret: process.env.secret || 'secret',
    callbackURL: process.env.callbackURL || 'http://localhost:3000/auth/discord/callback',
    jwtSecret: "secret",
    baseUrl: "http://localhost:3000"
}