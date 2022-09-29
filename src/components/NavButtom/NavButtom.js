import React from 'react'
import styled from 'styled-components'

import Dark from '../../images/dark.png'
import User from '../../images/user.png'
import Cart from '../../images/cart.png'

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
box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.100);
background-color: rgba(223, 223, 223, 0.435);

div{
    width: 70px;
    height: 70px;
    border-radius: 100%;
}
`
const Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.200);
    background-color: white;
    padding: 15px;
    border-radius: 20px;
`
const NavButtom = () => {
  return (
     <Nav>
          <Img src={Dark}/>
          <Img src={User}/>
          <Img src={Cart}/>
     </Nav>
  )
}

export default NavButtom