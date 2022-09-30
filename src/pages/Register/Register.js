import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheContext } from "../../context/context";


const Main = styled.main`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Input = styled.input`
  padding: 20px;
  height: max-content;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;
const InputSubmit = styled.input`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 20px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;

`
const Form = styled.form`
width: 80%;
display: flex;
flex-direction: column;
border-radius: 15px;
padding: 15px;
background-color: #7d63b449;
color: white;

label{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 5px;
}
`
const Err = styled.p`
  color: rgb(200, 61, 61);
  font-family: 'Roboto',sans-serif;
`

const Register = () => {
  const { signUp, user, setUser } = useTheContext();
  const navigate = useNavigate();


const [allErrors, setAllErrors] = useState({})

  const changeValue = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user.email, user.password);
      navigate("/home")
    } catch (error) {
      let errors = {}
        if(error.code === 'auth/invalid-email'){
          errors.invalidEmail = 'Email invalido'
        }
        if(error.code === 'auth/weak-password'){
          errors.invalidPass = 'Mínimo 6 caracteres'
        }
        if(error.code === 'auth/internal-error'){
          errors.invalidPass = 'Por favor, escribe una contraseña'
        }
        if(error.code === 'auth/email-already-in-use'){
          errors.alreadyUseEmail = 'El email ya se encuentra en uso'
        }
        return setAllErrors(errors)
      }
  };

  return (
  
    <Main>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input onChange={changeValue} type={"email"} name="email" placeholder="usuario@gmail.com"/>
        <Err>{allErrors.invalidEmail && allErrors.invalidEmail}</Err>
        <Err>{allErrors.alreadyUseEmail && allErrors.alreadyUseEmail}</Err>
           
        <label htmlFor="password">Password</label>
        <Input onChange={changeValue} type={"password"} name="password" placeholder="Contraseña"/>
        <Err>{allErrors.invalidPass && allErrors.invalidPass}</Err>
      
        <InputSubmit type={"submit"} value="Registrar" />
      </Form>
    </Main>
  
  );
};

export default Register;