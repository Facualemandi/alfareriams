import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import IconLogin from "../../images/iconLogin.png";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.698);
  height: 100vh;
`;

const SectionLogin = styled.section`
  width: 85vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: auto;
  border-radius: 10px;
  padding: 10px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Modern Antiqua", cursive;
    font-size: 35px;
  }
`;
const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    padding: 15px;
    font-size: 22px;
    border: none;
    border-radius: 5px;
    background-color: rgb(229, 246, 253);
    margin-top: 10px;
    &:active {
      background-color: rgb(195, 220, 249);
    }
  }
`;

const NavL = styled(NavLink)`
button{
  width: 100%;
}
`

const EnterWeb = () => {
  return (
    <Main>
      <SectionLogin>
        <DivTitle>
          <p>AlfareriaMS</p>
          <Icon alt="" src={IconLogin} />
        </DivTitle>

        <DivButtons>
          <NavL to={'/register'}><button>Registrarse</button> </NavL>
          <NavL to={'/'}><button>Ingresar</button> </NavL>
          <NavL to={'/'}><button>Ingresar con Google</button> </NavL>
          <NavL to={'/'}><button>Invitado +</button> </NavL>  
        </DivButtons>
      </SectionLogin>
    </Main>
  );
};

export default EnterWeb;
