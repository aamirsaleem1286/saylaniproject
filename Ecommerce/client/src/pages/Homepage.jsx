import React from 'react'
import Announcement from '../Component/Announcement'
import Category from '../Component/Category'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Newspaper from '../Component/Newspaper'
import Products from '../Component/Products'
import Slider from '../Component/Slider'
import { useEffect, useState } from "react";

const Homepage = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className='navbar-container'>
        <Announcement/>
        <Navbar user={user} />
        <Slider/>
        <Category/>
        <Products/>
        <Newspaper/>
        <Footer/>
    </div>
  )
}

export default Homepage