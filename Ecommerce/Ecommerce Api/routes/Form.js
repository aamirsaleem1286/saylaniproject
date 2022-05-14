
const RegisterUser = require('../models/Form');
const app=require('express').Router()
const bcrypt = require("bcrypt");
const passportLocal = require("passport-local").Strategy;
const passport = require("passport");

app.post("/form", (req, res) => {
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
  module.exports=app;