import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheContext } from "../../context/context";

const Input = styled.input`
  padding: 15px;
`;

const Register = () => {
  const { signUp } = useTheContext();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

const [allErrors, setAllErrors] = useState({})

  const changeValue = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user.email, user.password);
      navigate("/home")
    } catch (error) {
      let errors = {}
      console.log(error.code)
        if(error.code === 'auth/invalid-email'){
          errors.invalidEmail = 'Email invalido'
        }
        if(error.code === 'auth/weak-password'){
          errors.invalidPass = 'Mínimo 6 caracteres'
        }
        if(error.code === 'auth/internal-error'){
          errors.invalidPass = 'Por favor, escribe una contraseña'
        }
        return setAllErrors(errors)
      }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input onChange={changeValue} type={"email"} name="email" placeholder="usuario@gmail.com"/>
        <p>{allErrors.invalidEmail && allErrors.invalidEmail}</p>
           
        <label htmlFor="password">Password</label>
        <Input onChange={changeValue} type={"password"} name="password" placeholder="Contraseña"/>
        <p>{allErrors.invalidPass && allErrors.invalidPass}</p>
      
        <Input type={"submit"} value="Registrar" />
       
      </form>
    </>
  );
};

export default Register;
// user.password.length <= 5 ? console.log("Error") : navigate("/home");