var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());       //used by local passport for sessions
passport.deserializeUser(User.deserializeUser());   //used by local passport for sessions