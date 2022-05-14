const passport = require('passport');
const Google = require('./models/Google');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const Github = require('./models/Github');


const TwitterStrategy = require("passport-twitter").Strategy;

const GOOGLE_CLIENT_ID="218633791031-ubq28bqe25jhvsrqjvodmscvrrktodd7.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

GITHUB_CLIENT_ID="9bd44ca132b7fa44efb1"
GITHUB_CLIENT_SECRET="1c97dc75145807d37b2b964d004c7cefc7a8ad4f"

FACEBOOK_APP_ID="394719965448600"
FACEBOOK_APP_SECRET="12e4a3e1611a948a8a6c650bfeeb0a36"

TWITTER_CONSUMER_KEY="https://api.twitter.com/2/tweets?ids=1261326399320715264,1278347468690915330"
TWITTER_CONSUMER_SECRET= "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAFnz2wAAAAAAxTmQbp%2BIHDtAhTBbyNJon%2BA72K4%3DeIaigY0QBrv6Rp8KZQQLOTpo9ubw5Jt?WRE8avbi"

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    Google.findOrCreate({ emails:profile.emails,familyName:profile.name.familyName, givenName:profile.name.givenName,username:profile.displayName, isPerson:profile. isPerson, isPlusUser:profile. isPlusUser, picture:profile. picture, coverPhoto:profile. coverPhoto,    googleID:profile.id,gender:profile.gender,birthday:profile.birthday  ,relationship:profile.relationship,placesLived:profile.placesLived, language:profile.language,avatar:profile.photos[0]
     

    }, function (err, user) {
      return done(err, user);
    });
  }
));









// passport.use(
//   new GoogleStrategy({
//   clientID:     GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: "/auth/google/callback",
// },(request, accessToken, refreshToken, profile, done)=> {
// console.log("passport callback");
// console.log(profile);
//   new User=({
//     username:profile.displayName,
//     googleID:profile.id}).save().then((newUser)=>{
//       console.log("new user created"+newUser)
//     })

//   //     avatar:profile.photos[0],
//   // }}
//   // user.save();
  


// }))



// passport.use(new GoogleStrategy({
//     clientID:     GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/callback",
//     passReqToCallback   : true
//   },
// //   function(request, accessToken, refreshToken, profile, done) {
// //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
// //       return done(err, user);
// //     });
// //   }


// function(request, accessToken, refreshToken, profile, done) {
//     // const user={
//     //     username:profile.displayName,
//     //     avatar:profile.photos[0],
//     // }
//     // user.save();
    
//     done(null,profile)


//   }
// ));

// passport.use(new GitHubStrategy({
//     clientID:     GITHUB_CLIENT_ID,
//     clientSecret: GITHUB_CLIENT_SECRET,
//     callbackURL: "/auth/github/callback",
//     // passReqToCallback   : true
//   },
// function(request, accessToken, refreshToken, profile, done) {
//     done(null,profile)
//   }
// ));



passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  Github.findOrCreate({ githubId: profile.id,username:profile.username, }, function (err, user) {
    return done(err, user);
  });
}
));



passport.use(new FacebookStrategy(
  {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));


passport.use(new TwitterStrategy({
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: "/auth/twitter/callback"
},
function(token, tokenSecret, profile, cb) {
  User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

passport.serializeUser((user,done)=>{
    done(null,user)
})


passport.deserializeUser((user,done)=>{
    done(null,user)
})