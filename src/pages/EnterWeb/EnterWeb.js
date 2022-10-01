import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IconLogin from "../../images/iconLogin.png";
import Fondo from '../../images/FondoLogin.png'
import { useTheContext } from "../../context/context";

const Main = styled.main`
overflow-x: hidden;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;
const SectionLogin = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 90%;
 margin: auto;
 border-radius: 10px;
 margin-top: -100px;
 background-color: #74a6e467;
 backdrop-filter: blur(3px);
 box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.300);
 margin-bottom: 30px;
 border: 1px solid rgba(0, 0, 0, 0.493);

 @media (min-width: 600px){
   width: 45%;
   height: max-content;
   margin: 0;
}
`;
const Icon = styled.img`
 width: 50px;
 height: 50px;
`;
const DivTitle = styled.div`
   color: white;
   font-size: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 15px;
`;
const DivButtons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;


button{
  padding: 20px;
  width: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.156);
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  @media (max-width: 600px){
    :active{
      background-color: rgb(226, 237, 248);
    }
  }
  @media (min-width: 600px){
    cursor: pointer;
    &:hover{
      background-color: rgb(226, 237, 248);
      transition: 0.3s;
    }
  }
}

`;
const NavL = styled(NavLink)`
  width: 100%;
  margin: 10px;
  height: max-content;
`
const ImgFondo = styled.img`
 width: 100%;

 @media (min-width: 600px){
   width: 45%;
   height: 456px;
}
`
const ContainerDesktio = styled.section`
@media (min-width: 600px){
   display: flex;
   box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.150);
   justify-content: center;
   align-items: center;
   width: 100%;
   max-width: 780px;
   height: max-content;
   margin: 15px;
   padding: 15px;
   border-radius: 30px;
  }

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

const NoAccount = styled(NavLink)`
 font-family: 'Roboto',sans-serif;
 display: flex;
 width: 100%;
 font-size: 16px;
 padding: 5px;
 text-decoration: none;
 color: black;
 span{
  margin-left: 15px;
  color: blue;
 }
`

const EnterWeb = () => {
  const {login, user, setUser} = useTheContext();
  const navigate = useNavigate()


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
    <Main>

      <ContainerDesktio>
      <ImgFondo alt="" src={Fondo}/>

         <SectionLogin>
           <DivTitle>
                <p>AlfareriaMS</p>
              <Icon alt="" src={IconLogin} />
            </DivTitle>

            <Form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                 <Input onChange={enterUser} type={"email"} name="email" placeholder="usuario@gmail.com"/>
                 <Err>{allErrors.invalidEmail && allErrors.invalidEmail}</Err>

                 <label htmlFor="password">Password</label>
                 <Input onChange={enterUser} type={"password"} name="password" placeholder="Contraseña"/>
                 <Err>{allErrors.wrongPass && allErrors.wrongPass}</Err>

                 <Err>{allErrors.notUser && allErrors.notUser}</Err>
                 <InputSubmit type={"submit"} value="Ingresar" />
  
           </Form>

                <DivButtons>
                  <NoAccount to={'/register'}>No tienes cuenta? <span>Registrate</span></NoAccount>
                  <NavL to={'/'}><button>Ingresar con Google</button> </NavL>
                  <NavL to={'/'}><button>Invitado +</button> </NavL>  
                </DivButtons>
          </SectionLogin>

      </ContainerDesktio>
    </Main>
  );
};

export default EnterWeb;
