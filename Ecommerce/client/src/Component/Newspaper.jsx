import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}


`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}

`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newspaper = () => {
  return (
    <Container>

      <Title>SAYLANI WELFARE  INTRODUCTION:
      <Desc>Saylani Welfare International Trust is a non-government organization (NGO) focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan. It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri.Saylani Welfare International Trust is a non-government organization (NGO) focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan.[1]

It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri.[2][3] With an estimated monthly expenditure of Pakistani Rupees above 30 million, Saylani Trust, provides food twice a day to more than 30,000 poor people through its 100 centers (generally known as Dastar-Khawan), most of them are serving in Karachi.[4][5] The organization distributed CNG rickshaws among the jobless citizens of Karachi in April, 2011 with the help of members of the Karachi business community</Desc>
      </Title>
      {/* <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer> */}
    </Container>
  );
};

export default Newspaper;
