import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from 'react-icons/ai';
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
  background-color: rgb(231, 231, 231);
  z-index: 5000;

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

const ViewItemsCart = styled.div`
position: relative;
div{
  position: absolute;
  z-index: 2500;
   top: 0px;
   border-radius: 20px;
   display: flex;
   flex-direction: row-reverse;
   font-size: 20px;
   font-weight: bold;
   color: black;
   font-family: 'Robot',sans-serif;
   padding: 5px;
}
`

const ContainerCart = styled.section`
position: fixed;
bottom: 0px;
height: auto;
width: 100%;
transform: ${({value}) => value ? 'translateY(100%)' : 'translateY(0%)'};
transition: 0.5s;
margin-bottom: 90px;
background-color: white;
box-shadow: 0px -1px 5px 0px rgba(128, 128, 128, 0.353);

`

const SectionProduct = styled.section`
   border: 1px solid rgba(128, 128, 128, 0.353);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px;
  border-radius: 10px;
  div{
    font-family: 'Roboto', sans-serif;
  }
`

const IconDelete = styled(AiOutlineDelete)`
width: 35px;
height: 35px;
color: grey;
`
const ImgCart = styled.img`
width: 120px;
height: 100px;
`

const Name = styled.p`
font-size: 22px;
margin-bottom: 5px;
`
const Price = styled.p`
font-size: 18px;
`


const NavButtom = () => {
  const {logAuth } = useTheContext();
  const {collectCart}  = useProducts();
  const [isOpen, setOpen] = useState(false);
  const [valueCart, setValueCart] = useState(false)

  console.log(collectCart)

  const openMenuCart = () => {
     if(!valueCart){
      setValueCart(true)
     }else{
      setValueCart(false)
     }
  }

  
  
  return (
    <main>
      <SectionMenu value={isOpen}> 
         <button onClick={logAuth}>Cerrar Sesion</button>
      </SectionMenu>
      <Nav>
        <Img src={Dark} />
        <Img src={User} />

        <ViewItemsCart onClick={openMenuCart}>
          <Img src={Cart} />
          <div value={collectCart.length}>{collectCart.length}</div>
       </ViewItemsCart>
      </Nav>

          <ContainerCart value={valueCart}> 
                {collectCart.map(product => (
                    <SectionProduct key={product.id}>
                      <ImgCart alt="" src={product.img.img1}/>
                      <div>
                        <Name>{product.name}</Name>
                        <Price>$ {product.price}</Price>
                      </div>
                       <IconDelete/>
                    </SectionProduct>
                ))}
          </ContainerCart>



       <OpenNav>
           <Hamburger toggled={isOpen} toggle={setOpen}/>
       </OpenNav>
    </main>
  );
};

export default NavButtom;
