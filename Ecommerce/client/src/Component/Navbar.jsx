// // import React from 'react'
// import styled from 'styled-components'
// import {Search,ShoppingCartOutlined} from'@material-ui/icons'
// import {Badge} from'@material-ui/core'
// import { mobile } from "../responsive";
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Container=styled.div`
// height:60px;
// // background-color:black;
// `
// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display:flex;
//   justify-content:space-between;
//   ${mobile({ padding: "10px 0px" })}

//   `

//   const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}

// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;
// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}

// `;
// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}


// `;

// const MenuItem = styled.div`
//   font-size: 13px;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}

// `;

// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   ${mobile({ flex: 2, justifyContent: "center" })}

// `;



// // const Navbar = () => {
// //  const quantity=useSelector(state=>state.cart.quantity)
// //     console.log( quantity)
// //  return (
// //       <Container>
// //           <Wrapper>
// //   <Left>
// //     <Language>En</Language> 
// //     <SearchContainer>
// //       <Input></Input>
// //       <Search style={{color:"gray",fontSize:16}} />
// //       </SearchContainer> 
// //   </Left>
// //       <Center><Logo>Aamir</Logo></Center>
// //       <Right>
// //       <Link to='/register'>
// // <MenuItem>Register</MenuItem>
// // </Link>

// // <Link to='/login'>
// // <MenuItem>Sign IN</MenuItem>
// // </Link>
// // <Link to="/cart">
// // <Badge badgeContent={quantity}color="primary">
// //   <ShoppingCartOutlined/>
// // </Badge></Link>
// //       </Right>
// //       </Wrapper>
// //     </Container>
// //   )
// // }

// // export default Navbar











// const Navbar = ({ user }) => {
//  const quantity=useSelector(state=>state.cart.quantity)
//     console.log( quantity)


//   const logout = () => {
//     window.open("https://ancient-ravine-38611.herokuapp.com/auth/logout", "_self");
//   };
//   return (
//     // <div className="navbar">

// //     <nav class="navbar navbar-dark bg-dark">
// //   <a class="navbar-brand" href="#">Navbar w/ text</a>
// //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
// //     <span class="navbar-toggler-icon"></span>
// //   </button>
// //   <div class="collapse navbar-collapse" id="navbarText">
// //     <ul class="navbar-nav mr-auto">
// //       <li class="nav-item active">
// //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
// //       </li>
// //       <li class="nav-item">
// //         <a class="nav-link" href="#">Features</a>
// //       </li>
// //       <li class="nav-item">
// //         <a class="nav-link" href="#">Pricing</a>
// //       </li>
// //     </ul>
// //     <span class="navbar-text">
// //       Navbar text with an inline element
// //     </span>
// //   </div>
// // </nav>












//    <div className="navbar">
 
//       <Container>
//            <Wrapper>
//    {/* <Left>
//      <Language>En</Language> 
//      <SearchContainer>
//        <Input></Input>
//        <Search style={{color:"gray",fontSize:16}} />
//        </SearchContainer> 
//    </Left> */}
//        <Center><Logo>
//        <Link className="link" to="/login">
//           Aamir App
//         </Link>
         
//         </Logo></Center>
//        <Right>      <Center><Logo>

//       <Link className="link" to='/register'>

//  {/* <MenuItem> */}
//  Register
//  {/* </MenuItem> */}
//  </Link>        </Logo></Center>

//   <Link className="link"  to="/cart">
//  <Badge badgeContent={quantity}color="primary">
//   <ShoppingCartOutlined/>
//  </Badge></Link>
// </Right>
// </Wrapper>
// </Container>
//       {user ? (
//         <ul className="list">
//           <li className="listItem">
//             <img
//               src={user.photos[0].value}
//               alt=""
//               className="avatar"
//             />
//           </li>
//           <li className="listItem">{user.displayName}</li>
//           <li className="listItem" onClick={logout}>
//             Logout
//           </li>
//         </ul>
//       ) : (
//         <Link className="link" to='/login'>
//           Login
//         </Link>
//       )}
//  </div>
//   );
// };

// export default Navbar;







// import { Link } from "react-router-dom";
// import '../App.css';
// import React, { useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = "218633791031-ubq28bqe25jhvsrqjvodmscvrrktodd7.apps.googleusercontent.com";
// const Navbar = ({ user }) => {
//   const logout = () => {
//     window.open("https://ancient-ravine-38611.herokuapp.com/auth/logout", "_self");
//   };

//   const [showloginButton, setShowloginButton] = useState(true);
//     const [showlogoutButton, setShowlogoutButton] = useState(false);
//     const onLoginSuccess = (res) => {
//         console.log('Login Success:', res.profileObj);
//         setShowloginButton(false);
//         setShowlogoutButton(true);
//     };

//     const onLoginFailure = (res) => {
//         console.log('Login Failed:', res);
//     };

//     const onSignoutSuccess = () => {
//         alert("You have been logged out successfully");
//         console.clear();
//         setShowloginButton(true);
//         setShowlogoutButton(false);
//     };


//   return (
//     <div className="navbar">
//          <div>
//             { showloginButton ?
//                 <GoogleLogin
//                     clientId={clientId}
//                     buttonText="Sign In"
//                     onSuccess={onLoginSuccess}
//                     onFailure={onLoginFailure}
//                     cookiePolicy={'single_host_origin'}
//                     isSignedIn={true}
//                 /> : null}

//             { showlogoutButton ?
//                 <GoogleLogout
//                     clientId={clientId}
//                     buttonText="Sign Out"
//                     onLogoutSuccess={onSignoutSuccess}
//                 >
//                 </GoogleLogout> : null
//             }
//         </div>
//     </div>
//   );
// };

// export default Navbar;



// import { Link } from "react-router-dom";
// import '../App.css';
// const Navbar = ({ user }) => {
//   const logout = () => {
//     window.open("https://ancient-ravine-38611.herokuapp.com/auth/logout", "_self");
//   };
//    const quantity=useSelector(state=>state.cart.quantity)
//     console.log( quantity)
//   return (
//     <div className="navbar">
//       <span className="logo">
//         <Link className="link" to="/">
//           Lama App
//         </Link>
//       </span>

//       <Container>
//            <Wrapper>
//      <Left>
//       <Language>En</Language> 
//       <SearchContainer>
//         <Input></Input>
//         <Search style={{color:"gray",fontSize:16}} />
//         </SearchContainer> 
//     </Left> 
//         <Center><Logo>
//         <Link className="link" to="/login">
//            Aamir App
//          </Link>
         
//          </Logo></Center>
//         <Right>      <Center><Logo>

//        <Link className="link" to='/register'>

//   {/* <MenuItem> */}
//   Register
//   {/* </MenuItem> */}
//   </Link>        </Logo></Center>

//    <Link className="link"  to="/cart">
//   <Badge badgeContent={quantity}color="primary">
//    <ShoppingCartOutlined/>
//   </Badge></Link>
// </Right>
//  </Wrapper>
//  </Container>


//       {user ? (
//         <ul className="list">
//           <li className="listItem">
//             {/* <img
//               src={user.photos[0].value}
//               alt=""
//               className="avatar"
//             /> */}
//           </li>
//           <li className="listItem">{user.displayName}</li>
//           <li className="listItem" onClick={logout}>
//             Logout
//           </li>
//         </ul>
//       ) : (
//         <Link className="link" to="login">
//           Login
//         </Link>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import styled from 'styled-components'
import {Search,ShoppingCartOutlined} from'@material-ui/icons'
import {Badge} from'@material-ui/core'
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Container=styled.div`
height:60px;
// background-color:black;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  ${mobile({ padding: "10px 0px" })}

  `

  const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}

`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}


`;

const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 25px;
  padding-left:25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}

`;



const Navbar = ({ user }) => {


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

    const logout = () => {
    window.open("https://ancient-ravine-38611.herokuapp.com/auth/logout", "_self");
  };
//    const quantity=useSelector(state=>state.cart.quantity)
//     console.log( quantity)
 const quantity=useSelector(state=>state.cart.quantity)
    console.log( quantity)
 return (
//       <Container>
//           <Wrapper>
//   <Left>
//     <Language>En</Language> 
//     <SearchContainer>
//       <Input></Input>
//       <Search style={{color:"gray",fontSize:16}} />
//       </SearchContainer> 
//   </Left>
//       <Center><Logo>Aamir</Logo></Center>
//       <Link to='/register'>
//       Register
//       </Link>

//       <Right>
// {/* <MenuItem> */}
// {/* Register */}
// {/* </MenuItem> */}

// <Link to='/login'>

// {user ? (
//         <ul className="list">
//           <li className="listItem">
//             {/* <img
//               src={user.photos[0].value}
//               alt=""
//               className="avatar"
//             /> */}
//           </li>
//           <li className="listItem">{user.displayName}</li>
//           <li className="listItem" onClick={logout}>
//             Logout
//           </li>
//         </ul>
//       ) : (
//         <Link to="login">
         
         
         
//           Login
//         </Link>
//       )}



// </Link>
// <Link to="/cart">
// <Badge badgeContent={quantity}color="primary">
//   <ShoppingCartOutlined/>
// </Badge></Link>
//       </Right>
//       </Wrapper>
//     </Container>
  

<>
 <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            SAYLANI WELFARE
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
     
            </li>
            <li className="nav-item">
         <NavLink
           exact
               to="/register"
                   activeClassName="active"
             className="nav-links"
                 onClick={handleClick}
                 >
                  Register
              </NavLink>
                </li>
           
            {user ? (
        <ul className="list">
          <li className="listItem">
            {/* <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            /> */}
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
   
) : (





            <li className="nav-item">
         
              {/* <div>
                <li className="nav-item">
                <NavLink
                  exact
                      to="/register"
                          activeClassName="active"
                    className="nav-links"
                        onClick={handleClick}
                        >
                         Register
                     </NavLink>
                       </li>
                       </div> */}

              
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login In
              </NavLink>
              </li>
               )}
          </ul>
       
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

</>
















)
}

export default Navbar






// import React, { useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';

// const clientId = "218633791031-ubq28bqe25jhvsrqjvodmscvrrktodd7.apps.googleusercontent.com";

// function Login() {

//     const [showloginButton, setShowloginButton] = useState(true);
//     const [showlogoutButton, setShowlogoutButton] = useState(false);
//     const onLoginSuccess = (res) => {
//         console.log('Login Success:', res.profileObj);
//         setShowloginButton(false);
//         setShowlogoutButton(true);
//     };

//     const onLoginFailure = (res) => {
//         console.log('Login Failed:', res);
//     };

//     const onSignoutSuccess = () => {
//         alert("You have been logged out successfully");
//         console.clear();
//         setShowloginButton(true);
//         setShowlogoutButton(false);
//     };

//     return (
//         <div>
//             { showloginButton ?
//                 <GoogleLogin
//                     clientId={clientId}
//                     buttonText="Sign In"
//                     onSuccess={onLoginSuccess}
//                     onFailure={onLoginFailure}
//                     cookiePolicy={'single_host_origin'}
//                     isSignedIn={true}
//                 /> : null}

//             { showlogoutButton ?
//                 <GoogleLogout
//                     clientId={clientId}
//                     buttonText="Sign Out"
//                     onLogoutSuccess={onSignoutSuccess}
//                 >
//                 </GoogleLogout> : null
//             }
//         </div>
//     );
// }
// export default Login;










// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Navbar extends Component {
//   render() {
//     return (
//       <div>
//     <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//       </div>
//     );
//   }
// }

// export default Navbar;
