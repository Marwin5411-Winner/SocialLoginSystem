const jwt = require('jsonwebtoken');
const config = require('../config');

function hasAuth(req, res, next) {
    const token = req.cookies.profile;
    if (!token) {
        req.notAuth = true;
        next();
    }
    jwt.verify(token, config.jwtSecret, function(err, decoded) {
        if (err) {
            req.notAuth = true;
        }
        req.user = decoded;
        next();
    });
    //Decode the cookie
    //If the cookie is valid, call next()
    //If the cookie is invalid, redirect to the login page

}

module.exports = {
    hasAuth
};