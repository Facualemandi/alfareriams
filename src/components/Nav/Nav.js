import React from "react";
import styled from "styled-components";
import Plato from '../../images/plato.png'
import Bowl from '../../images/soup.png'
import Taza from '../../images/taza-cafe.png'
import Jarra from '../../images/jarra.png'

const TheNav = styled.nav``;

const Img = styled.img`
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 100%;
  border: 1px solid rgba(128, 128, 128, 0.300);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.150);
  &:hover{
    background-color: #ede1fc;
    transition: 0.3s;
  }
`;

const Section = styled.section`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 15px;
`;
const Nav = () => {
  return (
    <TheNav>
      <Section>
        <Img src={Plato}/>
        <Img src={Taza}/>
        <Img src={Bowl}/>
        <Img src={Jarra}/>
      </Section>
    </TheNav>
  );
};

export default Nav;
