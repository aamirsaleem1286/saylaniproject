const express=require('express')
const app =express()
const mongoose=require ('mongoose')
const dotenv=require('dotenv')
const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const authRoutes=require('./routes/auths')

const passportsetup=require("./passport")
const passport = require("passport");
const cookieSession = require("cookie-session");
const RegisterUser=require('./routes/RegisterUser')
const FormUser=require('./routes/Form');

const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const productRoute=require('./routes/product')
const cartRoute=require('./routes/cart')
const orderRoute=require('./routes/order')
const bodyParser = require('body-parser');


if(process.env.NODE_ENV ="production"){
    app.use(express.static('client/build'))
}

// const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.MongoUrl,(err)=>{
if(!err){
    console.log("mongoose connect")
}
    else{
        console.log("error"+err)
    }})

    // app.use(
    //     cors({
    //       origin: "http://localhost:3000", // <-- location of the react app were connecting to
    //       credentials: true,
    //     })
    //   );

   

    // app.options("*", cors({ origin: 'http://localhost:4000', optionsSuccessStatus: 200 }));
    
    // app.use(cors({ origin: "http://localhost:4000", optionsSuccessStatus: 200 }));



    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });


    app.use(cookieSession(
        {name:"session",
    keys:["lama"],
    maxAge:24*60*60*100,
    }
     ))
    app.use(passport.initialize());
    app.use(passport.session())

    app.use(passport.initialize());
    app.use(passport.session());
    // Add the line below, which you're missing:
    // require('./path/to/passport/config/file')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

    // app.use(bodyParser.urlencoded({ extended: false }))
    // app.use(bodyParser.json());
    app.use(cors(
        {
            origin:"http://localhost:3000",
            method:"GET,POST,PUT,DELETE",
            credentials:true,
        })
    )
    app.use(
        session({
          secret: "secretcode",
          resave: true,
          saveUninitialized: true,
        })
      );
      app.use(cookieParser("secretcode"));

app.use(express.json());
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)
app.use("/auth",authRoutes)
app.use("/",RegisterUser)
app.use("/",FormUser)

// app.use("/",RegisterUser)
// Routes

app.listen(process.env.PORT||  4000,()=>{
    console.log("backend is connect")
})