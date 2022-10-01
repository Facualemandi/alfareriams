import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import NavButtom from "../../components/NavButtom/NavButtom";
import Search from "../../components/Search/Search";
import ViewProduct from "../../components/ViewProduct/ViewProduct";
import { useTheContext } from "../../context/context";
import { db } from "../../firebase/firebase";
import { useProducts } from "../../Hooks/useProducts";


const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
const ContaianerAll = styled.section`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 100px;
`;
const ContainerProduct = styled(NavLink)`
  margin: 15px;
  height: max-content;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.200);
  padding: 5px;
  border-radius: 15px;
  text-decoration: none;
  color: black;
`;
const DivPriceName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  p {
    :nth-child(1) {
      font-size: 20px;
    }
    :nth-child(2) {
      font-size: 16px;
      color: green;
    }
  }
`;



const Home = () => {
  const { userAutentication} = useTheContext();
  const {getOneProduct, products, productAlone, modal, setModal} = useProducts()
  
  const [changeValue, setChangeValue] = useState("");

  if (userAutentication === null) {
    return <p>Cargando</p>;
  }
  const searchProduct = (e) => {
    setChangeValue(e.target.value);
  };
  const filterProducts = products.filter((el) => el.name.toLowerCase().includes(changeValue.toLowerCase()));



  return (
    <main>
      <Search searchProduct={searchProduct} />
      <Nav />

      <ContaianerAll>
        {filterProducts.map((obj) => (
          <ContainerProduct key={obj.id} onClick={() => getOneProduct(obj.id, obj)}>
            <Img alt={obj.name} src={obj.img.img1}/>
            <DivPriceName>
              <p>{obj.name}</p>
              <p>${obj.price}</p>
            </DivPriceName>
          </ContainerProduct>
        ))}
      </ContaianerAll>
      
      {modal && 
      <ViewProduct setModal={setModal} productAlone={productAlone} />
      }

      <NavButtom/>
    </main>
  );
};

export default Home;
