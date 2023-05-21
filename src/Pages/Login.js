import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthApi } from "react";
// import axios from 'axios';

function LogIn() {
  const [email, setEmail] = useState({
    value: "",
    err: null,
  });
  const [password, setPassword] = useState({
    value: "",
    err: null,
  });

  const onEmailChangeHandler = (event) => {
    const inputEmail = event.target.value;
    setEmail((prevEmail) => ({
      ...prevEmail,
      value: inputEmail,
    }));
  };

  const onPasswordChangeHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword((prevPassword) => ({
      ...prevPassword,
      value: inputPassword,
    }));
  };

  const onSubmitHandler = async () => {
    if (email.value && password.value) {
      alert("Log in!");

      try {
        const res = await AuthApi.login({
          email: email.value,
          password: password.value,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }


      // axios
      //     .post(
      //       "http://localhost:3001", // 미리 약속한 주소
      //       { email:email.value, password:password.value }, // 서버가 필요로 하는 데이터를 넘겨주고,
      //       { headers: {} } // 누가 요청했는 지 알려줍니다. (config에서 해요!)
      //     )
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
    } else {
      alert("Please enter your email and password.");
      return;
    }
  };

  return (
    <Container>
      <Heading>Log In</Heading>
      <Label>Email</Label>
      <StyledInput
        type="text"
        value={email.value}
        placeholder="Type your Email"
        onChange={onEmailChangeHandler}
      />
      <Label>Password</Label>
      <StyledInput
        type="password"
        value={password.value}
        placeholder="Type your Password"
        onChange={onPasswordChangeHandler}
      />
      <ButtonContainer>
        <SubmitButton onClick={onSubmitHandler}>Log In</SubmitButton>
        <StyledLink to={"/signup"}>
          <Button>Sign Up</Button>
        </StyledLink>
        <StyledLink to={"/"}>
          <Button>Go Back</Button>
        </StyledLink>
      </ButtonContainer>
    </Container>
  );
}

export default LogIn;

const Container = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
  border: 3px solid black;
`;

const Heading = styled.h1`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #28a745;
  &:hover {
    background-color: #1e7e34;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
`;
