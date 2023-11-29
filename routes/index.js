var express = require('express');
var router = express.Router();
const { checkAuth } = require('../lib/checkAuth');
const passport = require('passport');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', passport.authenticate('discord'));

router.get('/profile', async function(req, res, next) {
  const profile = req.cookies.profile_test
  console.log(profile)
  res.render('profile', { title: 'Secret Stuff', profile: profile });
});


router.get('/auth/discord/callback', passport.authenticate('discord', {
    session: false,
    failureRedirect: '/'
}), function(req, res) {
    res.cookie('profile_test', req.user, { maxAge: 86400 * 1000, httpOnly: true });
    res.redirect('/profile') // Successful auth
});




module.exports = router;
