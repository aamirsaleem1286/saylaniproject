import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Axios from "axios";
import "../App.css"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


yup.addMethod(yup.array, 'unique', function(message, mapper = a => a) {
  return this.test('unique', message, function(list) {
      return list.length  === new Set(list.map(mapper)).size;
  });
});


const schema = yup.object().shape({
  username:yup.string().required("Username is required"),  
  // email: yup.string().email().required(),
//   adminEmails: yup.array().of(
//     yup.string()
// )
// .unique('email must be unique'),


password: yup.string().required('Password is required'),  
 passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),


  // adminEmails: yup.array()
  // .of(
  //   yup.string().email().required()
  //     .notOneOf(yup.ref('adminEmails'), 'E-mail is already used')),
  // password: yup.string().required('Password is required'),
  // passwordConfirmation: yup.string()
  //    .oneOf([yup.ref('password'), null], 'Passwords must match')
  // password: yup.string().min(8).max(32).required(),
  // passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  phone:yup.string().min(11,"Please fill 11 digits number").max(14,"Number is accessed").required("This field is required"),  
  country:yup.string().required("This field is required"),  
  address:yup.string().required("This field is required"),  


  // field:yup.string().required("Please fill this field")
});
// import"../img/bg-heading-02"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  // background: linear-gradient(
  //     rgba(255, 255, 255, 0.5),
  //     rgba(255, 255, 255, 0.5)
  //   ),
  //   url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  //     center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color:red
`;
 
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;



function  Register() {


  const [registerUsername, setRegisterUsername] = useState("");
    const [registeremail, setRegisteremail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerrePassword, setRegisterrePassword] = useState("");
    const [registerphone, setRegisterphone] = useState("");
    const [registercountry, setRegistercountry] = useState("");
    const [registeraddress, setRegisteraddress] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);




    const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
      console.log({ data });
      window.location="/login"
      // reset();
    //   Axios({

    //     method: "POST",
    //     data: {
    //       email:registeremail,
    //       username: registerUsername,
    //       password: registerPassword,
    //       repassword:registerrePassword,
    //       phone:registerphone,
    //       country:registercountry,
    //       address:registeraddress,
    //     },
    //     withCredentials: true,
    //     url: "https://ancient-ravine-38611.herokuapp.com/register",
    //   }).then((res) => {
    //     console.log(res)
    // })
    };









    // const history = useHistory();
  const registers = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       email:registeremail,
  //       username: registerUsername,
  //       password: registerPassword,
  //       repassword:registerrePassword,
  //       phone:registerphone,
  //       country:registercountry,
  //       address:registeraddress,
  //     },
  //     withCredentials: true,
  //     url: "https://ancient-ravine-38611.herokuapp.com/register",
  //   }) 
  //   // history.push("/login")
  //   .then((res) => {
  //   // if(res.feedback==="success"){
  //   //  console.log( res.status)
  //   //  window.location="/login"
  //   // }
  //     console.log(res)
      
  // }
 
    // console.log(res));
    // ) 
    // console.log({ data });
    // reset();
  }
  console.log(registers)
  // const login = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       username: loginUsername,
  //       password: loginPassword,
  //     },
  //     withCredentials: true,
  //     url: "https://ancient-ravine-38611.herokuapp.com/login",
  //   }).then((res) => console.log(res));
  // };
  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "https://ancient-ravine-38611.herokuapp.com/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const phone= useRef();
  const address= useRef();
  const cnic = useRef();

  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
  console.log(password.current.value)
  console.log(passwordAgain.current.value)

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        phone:phone.current.value,
        address:address.current.value,
        cnic:cnic.current.value,

      };
      try {
        await Axios.post("https://ancient-ravine-38611.herokuapp.com/register", user);
        // history.push("https://ancient-ravine-38611.herokuapp.com/login");
        window.location.href="/login"
      } catch (err) {
        console.log(err);
      
      }
    }
  };


  return (


<>
<div>
        {/* Required meta tags*/}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Colorlib Templates" />
        <meta name="author" content="Colorlib" />
        <meta name="keywords" content="Colorlib Templates" />
        {/* Title Page*/}
        <title>Au Register Forms by Colorlib</title>
        {/* Icons font CSS*/}
        <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all" />
        <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
        {/* Font special for pages*/}
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
        {/* Vendor CSS*/}
        <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all" />
        <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all" />
        {/* Main CSS*/}
        {/* <link href="" rel="stylesheet" media="all" /> */}
        <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
          <div className="wrapper wrapper--w960">
            <div className="card card-2">
              <div className="card-heading" />
              <div className="card-body">
                {/* <h2 className="title">Registration Info</h2> */}
                {/* <form method="POST"
    onSubmit={handleSubmit(onSubmitHandler)}
                 >
                   <div className="input-group">
                  /*<input  {...register("username")}  placeholder="username" type="text" onChange={(e) => setRegisterUsername(e.target.value)} />
      <p>{errors.username?.message}</p>
                    {/* <input className="input--style-2" type="text" name="name" placeholder="username"
           onChange={(e) => setRegisterUsername(e.target.value)} /> */}
                  </div>
                  <div className="input-group">
                      {/* <div className="input-group">
                        <input className="input--style-2 js-datepicker"{...register("email")} type="email" placeholder="email"
          onChange={(e) => setRegisteremail(e.target.value)} /> */}
                {/* <p>{errors.adminEmails?.message}</p> */}

                        {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />
                      </div> */}
                    {/* <div className="input-group">
                    <input className="input--style-2"type="password"
          placeholder="password" {...register("password")}
          onChange={(e) => setRegisterPassword(e.target.value)} />
                          <p>{errors.password?.message}</p>

                  </div>
                  <div className="input-group">
                    <input className="input--style-2" type="password"
          placeholder="repassword"
          onChange={(e) => setRegisterrePassword(e.target.value)}/>
                                    <p>{errors.passwordConfirmation?.message}</p>

                  </div> */}
                  {/* <div className="input-group">
                    <input  {...register("phone")} className="input--style-2"type="text"
          placeholder="phone"
          onChange={(e) => setRegisterphone(e.target.value)}
        />        
                                            <p>{errors.phone?.message}</p>

                  </div> */}
                  {/* <div className="input-group">
                    <input {...register("country")}type="text"
          placeholder="country" 
          onChange={(e) => setRegistercountry(e.target.value)}
        /> 
                                                    <p>{errors.country?.message}</p>

                  </div> */}
                  {/* <div className="input-group">
                    <input   {...register("address")}
                     type="text"
          placeholder="address"
          onChange={(e) => setRegisteraddress(e.target.value)}/>
                                            <p>{errors.address?.message}</p>



       
                  </div> */}

                    <div className="col-2">
                      <div className="input-group">
                        {/* <div className="rs-select2 js-select-simple select--no-search">
                          <select name="gender">
                            <option disabled="disabled" selected="selected">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                          <div className="select-dropdown" />
                        </div> */}
                      </div>
                    </div>
               
                
                  {/* <div className="p-t-30"> */}
                  {/* <button type="submit"onClick={registers}>Submit</button> */}
                  {/* <button type="submit">Sign in</button> */}

                  {/* </div> */}
                {/* </form> */} 





                <form className="loginBox" onSubmit={handleClick}>
                                  <h2 className="title">Registration Info</h2>

            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
<input
              placeholder="Phone"
              required
              ref={phone}
              className="loginInput"
              type="number"
              minLength="11"
            />
            <input
              placeholder="Address"
              required
              ref={address}
              className="loginInput"
              type="text"
            />
  <input
              placeholder="Cnic"
              required
              ref={cnic}
              className="loginInput"
              type="text"        
            minLength="11"

            />
    <div className="rs-select2 js-select-simple select--no-search">
    <h4>Gender:</h4>

                          <select name="gender">
                            {/* <option disabled="disabled"ref={gender}>Gender</option> */}
                            <option selected="selected">Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                          <div className="select-dropdown" />
                        </div>

                  {/* <div className="p-t-30"> */}

            <button className="loginButton" type="submit">
              Sign Up
            </button>
             {/* </div> */}
             <Link to="/login">
            <button className="loginRegisterButton">Log into Account</button></Link>
          </form>









              </div>
            </div>
          </div>
        </div>
      </div>

</>




    // <Container>
    //   <Wrapper>
    //     <Title>CREATE AN ACCOUNT</Title>
    //     <Form>
    //     <Input type="text"
    //        placeholder="username"
    //        onChange={(e) => setRegisterUsername(e.target.value)}/>
    //           <Input type="email"
    //       placeholder="email"
    //       onChange={(e) => setRegisteremail(e.target.value)}
    //     />
    //      <Input type="password"
    //       placeholder="password"
    //       onChange={(e) => setRegisterPassword(e.target.value)}
    //     />
    //      <Input type="password"
    //       placeholder="repassword"
    //       onChange={(e) => setRegisterrePassword(e.target.value)}
    //     />
    //      <Input type="text"
    //       placeholder="phone"
    //       onChange={(e) => setRegisterphone(e.target.value)}
    //     />
    //      <Input type="text"
    //       placeholder="country"
    //       onChange={(e) => setRegistercountry(e.target.value)}
    //     />
    //      <Input type="text"
    //       placeholder="address"
    //       onChange={(e) => setRegisteraddress(e.target.value)}
    //     />

    //       <Agreement>
    //         By creating an account, I consent to the processing of my personal
    //         data in accordance with the <b>PRIVACY POLICY</b>
    //       </Agreement>
    //               <button onClick={register}>Submit</button>

    //      {/* <Link to="/login">  */}
    //      {/* <Button onClick={register}>CREATE</Button> */}
    //      {/* </Link> */}
    //       {/* <Links ><Link to='/login'>
    //      IF ALREADY ACCOUNT TO SIGN UP
    //     </Link></Links> */}
    //     </Form>
    //   </Wrapper>
    // </Container>
    
  );
}

export default Register;
// import React, { useState } from "react";
// import "./App.css";
// import Axios from "axios";

// function App() {
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registeremail, setRegisteremail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [registerrePassword, setRegisterrePassword] = useState("");
//   const [registerphone, setRegisterphone] = useState("");
//   const [registercountry, setRegistercountry] = useState("");
//   const [registeraddress, setRegisteraddress] = useState("");
//   const [loginUsername, setLoginUsername] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [data, setData] = useState(null);
//   const register = () => {
//     Axios({
//       method: "POST",
//       data: {
//         email:registeremail,
//         username: registerUsername,
//         password: registerPassword,
//         repassword:registerrePassword,
//         phone:registerphone,
//         country:registercountry,
//         address:registeraddress,
//       },
//       withCredentials: true,
//       url: "https://ancient-ravine-38611.herokuapp.com/register",
//     }).then((res) => console.log(res));
//   };
//   const login = () => {
//     Axios({
//       method: "POST",
//       data: {
//         username: loginUsername,
//         password: loginPassword,
//       },
//       withCredentials: true,
//       url: "https://ancient-ravine-38611.herokuapp.com/login",
//     }).then((res) => console.log(res));
//   };
//   const getUser = () => {
//     Axios({
//       method: "GET",
//       withCredentials: true,
//       url: "https://ancient-ravine-38611.herokuapp.com/user",
//     }).then((res) => {
//       setData(res.data);
//       console.log(res.data);
//     });
//   };
//   return (
//     <div className="App">
//       <div>
//         <h1>Register</h1>
//         <input type="text"
//           placeholder="username"
//           onChange={(e) => setRegisterUsername(e.target.value)}
//         />
//         <input type="email"
//           placeholder="email"
//           onChange={(e) => setRegisteremail(e.target.value)}
//         />
//          <input type="password"
//           placeholder="password"
//           onChange={(e) => setRegisterPassword(e.target.value)}
//         />
//          <input type="password"
//           placeholder="repassword"
//           onChange={(e) => setRegisterrePassword(e.target.value)}
//         />
//          <input type="text"
//           placeholder="phone"
//           onChange={(e) => setRegisterphone(e.target.value)}
//         />
//          <input type="text"
//           placeholder="country"
//           onChange={(e) => setRegistercountry(e.target.value)}
//         />
//          <input type="text"
//           placeholder="address"
//           onChange={(e) => setRegisteraddress(e.target.value)}
//         />
//         <button onClick={register}>Submit</button>
//       </div>

//       <div>
//         <h1>Login</h1>
//         <input type="text"
//           placeholder="email"
//           onChange={(e) => setLoginUsername(e.target.value)}
//         />
//         <input type="password"
//           placeholder="password"
//           onChange={(e) => setLoginPassword(e.target.value)}
//         />
//         <button onClick={login}>Submit</button>
//       </div>

//       <div>
//         <h1>Get User</h1>
//         <button onClick={getUser}>Submit</button>
//         {data ? <h1>Welcome Back {data.username}</h1> : null}
//       </div>
//     </div>
//   );
// }

// export default App;