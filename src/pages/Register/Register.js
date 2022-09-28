import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheContext } from "../../context/context";

const Input = styled.input`
  padding: 15px;
`;

const Register = () => {

  const {signUp} = useTheContext();
  const navigate = useNavigate()
  

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeValue = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  
  const handleSubmit = (e) => {
      e.preventDefault();
      try {
        signUp(user.email, user.password);
        navigate('/home')
      } catch (error) {
        
      }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input onChange={changeValue} type={"email"} name="email" />

        <label htmlFor="password">Password</label>
        <Input onChange={changeValue} type={"password"} name="password" />

        <Input type={"submit"} value='Registrar'/>
      </form>
    </>
  );
};

export default Register;
