import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Newspaper from "../Component/Newspaper";
import Announcement from "../Component/Newspaper";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { useRef } from "react";
import Axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {


const handleClick=()=>{
  dispatch(
    addProduct({...product,count,color,size})
  )
}


  const location=useLocation();
  const id=location.pathname.split("/")[2]
  
const [product, setProduct] = useState({});
const [count, setCount] = useState(1);
const [color, setColor] = useState("");
const [size, setSize] = useState("");
const dispatch=useDispatch()
useEffect(() => {
  const getProduct=async ()=>{
    try{
      const res= await publicRequest.get("/product/find/"+id)
      setProduct(res.data)
    }catch{

    }

  }
getProduct()
}, [id]);  
  
const username = useRef();
const email = useRef();
const password = useRef();
const passwordAgain = useRef();
const phone= useRef();
const address= useRef();
const cnic = useRef();
const handleClicks = async (e) => {
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
      await Axios.post("http://localhost:4000/form", user);
      // history.push("http://localhost:4000/login");
      window.location.href="/"
    } catch (err) {
      console.log(err);
    
    }
  }
};

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
        <Title>{product.title}</Title>
          <Desc>{product.desc}
          </Desc>
          {/* <Price>{product.price}</Price> */}
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
               {product.color?.map((c)=>(
               
               <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
               ))}
            </Filter> */}
            {/* <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                {product.size?.map(s=>(

                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter> */}
          </FilterContainer>
          <AddContainer>
            {/* <AmountContainer>
              <Remove onClick={() =>count>1 &&  setCount(count - 1)} />
              <Amount>{count}</Amount>
              <Add onClick={() => setCount(count + 1)} />
            </AmountContainer> */}
                <form className="loginBox" onSubmit={handleClicks}>

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
              <button className="but" type="submit">
              Submit
            </button>
          </form>



          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newspaper/>
      <Footer />
    </Container>
  );
};

export default Product;
