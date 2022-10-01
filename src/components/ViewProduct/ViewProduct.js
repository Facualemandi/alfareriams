import React from "react";
import styled from "styled-components";
import { BsBasket } from "react-icons/bs";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useTheContext } from "../../context/context";
import { useProducts } from "../../Hooks/useProducts";

const SectionModal = styled.section`
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.60);
  z-index: 5000;
  color: white;
  backdrop-filter: blur(3px);
  font-family: "Roboto", sans-serif;
  color: black;
`;
const Container = styled.section`
  margin: 20px;
  border-radius: 15px;
  background-color: rgb(239, 222, 255);
  margin-top: 70px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.500);;
`;
const ButtonClose = styled.button`
  padding: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  margin-right: 10px;
`;
const Img = styled.img`
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const DivImg = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    p {
      :nth-child(1) {
        font-size: 25px;
      }
      :nth-child(2) {
        font-size: 18px;
      }
    }
  }
`;
const DivDescription = styled.div`
  padding: 5px;
  padding-top: 15px;

  p {
    padding-top: 5px;
  }

  span {
    font-weight: lighter;
  }
`;
const DivAdd = styled.div`
  padding: 10px;
`;
const ButtonAddCart = styled.button`
  width: 100%;
  padding: 20px;
  background: rgb(52, 139, 236);
  background: linear-gradient(
    270deg,
    rgba(52, 139, 236, 1) 1%,
    rgba(52, 124, 215, 1) 78%
  );
  border: none;
  color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;

  hr {
    height: 30px;
  }
`;

const ViewProduct = ({ setModal, productAlone }) => {
  const { color, size, img, name, price, description, material } = productAlone;
  const {uuidUser} = useTheContext();
  const {sendProductCart} = useProducts()

  const closedModal = () => {
    setModal(false);
  };







  return (
    <SectionModal>
      <Container>
        <DivImg>
          <Img alt={name} src={img.img1} />
          <div>
            <p>{name}</p>
          </div>
        </DivImg>

        <DivDescription>
          <p>Color: <span>{color}</span></p>
          <p>Tamaño: <span>{size}</span></p>
          <p>Material: <span>{material}</span></p>
          <p>Descripción: <span>{description}</span></p>
        </DivDescription>

        <DivAdd>
          <ButtonAddCart onClick={() => sendProductCart(uuidUser, productAlone)}>
            <BsBasket />
            Agregr al carrito
            <hr />
            <p>$ {price}</p>
          </ButtonAddCart>
        </DivAdd>
      </Container>

      <ButtonClose onClick={closedModal}>Cerrar</ButtonClose>
    </SectionModal>
  );
};

export default ViewProduct;
