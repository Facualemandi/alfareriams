import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import IconLogin from "../../images/iconLogin.png";
import Fondo from '../../images/FondoLogin.png'

const Main = styled.main`
overflow-x: hidden;
height: 90vh;
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
 border-radius: 30px;
 margin-top: -100px;
 position: relative;
 background-color: rgba(0, 0, 0, 0.254);
 backdrop-filter: blur(10px);
 box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.300);
 margin-bottom: 30px;

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
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

`;
const NavL = styled(NavLink)`
  width: 100%;
  padding: 10px;
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

const EnterWeb = () => {
  return (
    <Main>

      <ContainerDesktio>
      <ImgFondo alt="" src={Fondo}/>

         <SectionLogin>
           <DivTitle>
                <p>AlfareriaMS</p>
              <Icon alt="" src={IconLogin} />
            </DivTitle>

                <DivButtons>
                  <NavL to={'/register'}><button>Registrarse</button> </NavL>
                  <NavL to={'/login'}><button>Ingresar</button> </NavL>
                  <NavL to={'/'}><button>Ingresar con Google</button> </NavL>
                  <NavL to={'/'}><button>Invitado +</button> </NavL>  
                </DivButtons>
          </SectionLogin>

      </ContainerDesktio>
    </Main>
  );
};

export default EnterWeb;
