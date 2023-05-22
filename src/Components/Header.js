import { styled } from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <StHeaderBox>
      <h1> 왕초닷컴 - 지출을 공유해보세요 </h1>
      <Nav />
    </StHeaderBox>
  );
}

export default Header;

const StHeaderBox = styled.div`
  padding: 15px;
  margin: 20px;
  border: 3px solid black;
`;