const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../config/keys');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
};

module.exports = passport => {
    passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
       try {
           const user = await User.findById(jwt_payload.id).select('email id');
   
           if (user) {
               return done(null, user);
           } else {
               done(null, false);
           }
       } catch (error) {
           done(error, false);
       }
    }));
}