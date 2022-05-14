import { InsertEmoticon } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  // display: flex;
  // padding: 20px;  
  // // justify-content: space-between;
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  `;
const Image = styled.img`width: 100%;
height: 100%;
width:95%;
object-fit: cover;
${mobile({ height: "20vh" })}
`
const Info = styled.div`position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`
const Title = styled.h1`color:white;
margin-bottom: 20px;`
const Button = styled.button` border:none;
padding: 10px;
background-color: black;
color:white;
color:gray;
cursor: pointer;
font-weight: 600;`

const CategoryItem = ({item}) => {
  return (
      <>
    { <Container>
<Link to={`/products/${item.cat}`}>
     <Image src={item.img}/>  

<Info>
  <Title>{item.title}</Title>
  
  {/* <Button >Shop Now</Button> */}
  </Info> 
  </Link>

  </Container> 
  /* <Container>
  <Image src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>  

<Info>
  <Title>LOUNGEWEAR LOVE!</Title>
  <Button>Shop Now</Button>
  </Info>   </Container>
  <Container>
  <Image src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>  

  <Info>
  <Title>LIGHT JACKETS!</Title>
  <Button>Shop Now</Button>
  </Info> 

    </Container> */}
    </>
    )
}
export default CategoryItem