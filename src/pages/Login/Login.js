import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheContext } from '../../context/context';



const Input = styled.input`
  padding: 15px;
`;



const Login = () => {
   const {login} = useTheContext();
   const navigate = useNavigate()

   const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [allErrors, setAllErrors] = useState({})

  const handleLogin = async (e) => {
    e.preventDefault();
     try {
      await login(user.email, user.password);
        navigate('/home')
     } catch (error) {
      let errors = {};
        console.log(error.code)
        if(error.code === 'auth/user-not-found'){
          errors.notUser = 'El usuario no existe.'
        }
        if(error.code === 'auth/wrong-password'){
           errors.wrongPass = 'Contraseña incorrecta'
        }
        if(error.code === 'auth/invalid-email'){
          errors.invalidEmail = 'Email no valido'
        }
        if(error.code === 'auth/internal-error'){
          errors.internalError = 'Por favor, verifica los datos'
        }
        return setAllErrors(errors)
     }
}

const enterUser = (e) => { setUser({...user, [e.target.name]:e.target.value})};


  return (
      <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <Input onChange={enterUser} type={"email"} name="email" placeholder="usuario@gmail.com"/>
        <p>{allErrors.invalidEmail && allErrors.invalidEmail}</p>
           
        <label htmlFor="password">Password</label>
        <Input onChange={enterUser} type={"password"} name="password" placeholder="Contraseña"/>
        <p>{allErrors.wrongPass && allErrors.wrongPass}</p>
      
        <Input type={"submit"} value="Ingresar" />
       
      </form>
      </>
  )
}

export default Login