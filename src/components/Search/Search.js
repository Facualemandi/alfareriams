import React, { useState } from "react";
import styled from "styled-components";
import { useProducts } from "../../Hooks/useProducts";

const ContainerSerch = styled.section`
  width: 100%;
  margin-top: 70px;
`;
const Input = styled.input`
  padding: 20px;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.238);
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    margin: auto;
    margin-top: 10px;
    
  }
`;

const Search = ({ searchProduct }) => {
  return (
    <ContainerSerch>
      <Input onChange={searchProduct} placeholder="nombre de producto" />
    </ContainerSerch>
  );
};

export default Search;
