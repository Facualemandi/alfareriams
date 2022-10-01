import React, { useState } from "react";
import styled from "styled-components";

import Dark from "../../images/dark.png";
import User from "../../images/user.png";
import Cart from "../../images/cart.png";
import Hamburger from "hamburger-react";
import { useTheContext } from "../../context/context";
import { useProducts } from "../../Hooks/useProducts";

const Nav = styled.nav`
  height: auto;
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: rgb(231, 231, 231);

  div {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }
`;
const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 15px;
  border-radius: 20px;
`;
const SectionMenu = styled.section`
   height: 100px;
   position: absolute;
   top: 0px;
   width: 50%;
   height: 100vh;
   z-index: 1500;
   background-color: white;
   transform: ${({value}) => !value ? 'translateX(-100%)' : 'translateX(0%)'};
   transition: 0.5s;
`;

const OpenNav = styled.div`
width: 50px;
height: 50px;
border-radius: 10px;
position: absolute;
top: 10px;
right: 10px;
box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.150);
`
const NavButtom = () => {
  const {logAuth } = useTheContext();
  const {collectCart}  = useProducts();
  const [isOpen, setOpen] = useState(false);
  console.log(collectCart)
  
  
  return (
    <main>
      <SectionMenu value={isOpen}> 
         <button onClick={logAuth}>Cerrar Sesion</button>
      </SectionMenu>
      <Nav>
        <Img src={Dark} />
        <Img src={User} />
        <Img src={Cart} />
      </Nav>

       <OpenNav>
           <Hamburger toggled={isOpen} toggle={setOpen}/>
       </OpenNav>
    </main>
  );
};

export default NavButtom;
