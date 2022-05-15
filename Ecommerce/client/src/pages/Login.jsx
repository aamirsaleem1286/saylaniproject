  // import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import { login } from "../redux/apiCalls";
// import {mobile} from "../responsive";
// import { Link } from 'react-router-dom';
// import Homepage from "./Homepage";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}

// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled{
//     color:green;
//     cursor:not-allowed
//   }
// `;

// const Links = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;
 
// const Error=styled.span`
//   color:red;
// `


// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch=useDispatch()
//   const {isFetching,error}=useSelector(state=>state.user)
//   const handleLogin=(e)=>{
//     e.preventDefault()
//     if(    login(dispatch,{username,password})){
//         window.location.href="https://ancient-ravine-38611.herokuapp.com";
//     }
//     else{
//       window.location.href="https://ancient-ravine-38611.herokuapp.com/login";
//     } 
//       }



//   return (
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form>
//           <Input placeholder="username"onChange={(e)=>setUsername(e.target.value)} />
//           <Input placeholder="password"type="password"  onChange={(e)=>setPassword(e.target.value)}  />
//           <Button onClick={handleLogin}disabled={isFetching}>LOGIN</Button>
//   {error&&<Error>Invalid username or password</Error>}
//           <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
//           <Links ><Link to='/register'>

//           CREATE A NEW ACCOUNT
//          </Link>
//           </Links>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Login;


import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import Github from "../img/github.png";
import {useNavigate } from 'react-router';
import React, { useState } from "react";
import Axios from "axios";
import * as Yup from 'yup'
import { Formik } from "formik";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import { useContext, useRef } from "react";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
 

  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      window.location.href="/",

      dispatch
    );
  };






const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});
<Formik
  initialValues={{
    email: ""
  }}
  validationSchema={SignupSchema}
>
  
</Formik>;



  const history = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async(event) => {
  
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "https://ancient-ravine-38611.herokuapp.com/login",
    }).then((res) =>
    // alert(res.data.value) 
    // console.log(res)
    window.location.href="/"

    ) }
  // //   event.preventDefault();
  
  // //   try {
  // //     await Auth.signIn(loginUsername,loginPassword);
  // //     userHasAuthenticated(true);
  // //     history.push("/");
  // //   } catch (e) {
  // //     alert(e.message);
  // //   }



  // }
  
  // ;
  // async function handleSubmit(event) {
  //   event.preventDefault();
  
  //   try {
  //     await Auth.signIn(email, password);
  //     userHasAuthenticated(true);
  //     history.push("/");
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }



  const google = () => {
    window.open("https://ancient-ravine-38611.herokuapp.com/auth/google", "_self");
  };

  const github = () => {
    window.open("https://ancient-ravine-38611.herokuapp.com/auth/github", "_self");
  };

  const facebook = () => {
    window.open("https://ancient-ravine-38611.herokuapp.com/auth/facebook", "_self");
  };
  const twitter = () => {
    window.open("https://ancient-ravine-38611.herokuapp.com/auth/twitter", "_self");
  };


  const sendLogin = () => async () => {
    try {
      const fetchLogData = await fetch('http://13.90.206.49/nse_bl/user.asmx/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'LoginID=' +
          // 'admin' +
          email +
          '&password=' +
          // 'JGOHRN',
          password,
      });
      const logData = await fetchLogData.json();
      console.log(logData)
      // Alert('Login Success'); // Do action on login success
    } catch (err) {
      console.log('Invalid Login')
      
    }
    // catch(e){
    //   console.log(e)
    // }
  }



  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
          <div className="loginButton twitter" onClick={twitter}>
            {/* <img src={twitter} alt="" className="icon" /> */}
            Twitter
          </div>


        </div>
        <form >
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          
        <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />

{/* <button onClick={sendLogin}>Submit </button> */}
{/* 
   <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button> */}




        {/* <input type="text"
          placeholder="email"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input type="password"
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        /> */}
        <button onClick={login}>Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


