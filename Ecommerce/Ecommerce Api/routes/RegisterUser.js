const RegisterUser = require('../models/RegisterUser');
const app=require('express').Router()
const bcrypt = require("bcrypt");
const passportLocal = require("passport-local").Strategy;
const passport = require("passport");


app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("Invalid id or password");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          // res.status(200).send({
          //   messgae:"success"
          // })
          res.status(201).json({feedback:"success"})
          res.send("Successfully Authenticated");
          // window.location="/"
          console.log( res.status);

          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  app.post("/register", (req, res) => {
    RegisterUser.findOne({ email: req.body.email }, async (err, doc) => {
      if (err) throw err;
      if (doc) return res.send("User Already Exists");
      if (!doc) {
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new RegisterUser({
          username: req.body.username,
          password: hashedPassword,
          repassword:hashedPassword,
          email:req.body.email,
          phone:req.body.phone,
          address:req.body.address,
          cnic:req.body.cnic,
          gender:req.body.gender

          // phone:req.body.phone,
          // country:req.body.country,
          // address:req.body.address
        });
        await newUser.save();
      return res.send("User Created");
      
      
      
      }
    });
  });
  app.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  });

  module.exports=app;