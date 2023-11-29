const config = require('../config');
const jwt = require('jsonwebtoken');

function loggedIn(req, res, next) {
    const token = req.cookies.profile;
    if (!token) {
        return res.redirect('/');
    }
    jwt.verify(token, config.jwtSecret, function(err, decoded) {
        if (err) {
            return res.redirect('/');
        }
        req.user = decoded;
        next();
    });
    //Decode the cookie
    //If the cookie is valid, call next()
    //If the cookie is invalid, redirect to the login page

}

module.exports = {
    loggedIn
}