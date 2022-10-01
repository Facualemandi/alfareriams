import React from "react";
import styled from "styled-components";

const DivSearch = styled.div`
  width: 90%;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  margin: auto;

  margin-top: 50px;
  margin-bottom: 20px;
  background-color: rgba(175, 175, 175, 0.5);
`;

const DivProducts = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;

  div {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: rgba(175, 175, 175, 0.5);
  }
`;

const DivImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
  margin: 5px;
  div {
    height: 100px;
    width: 95%;
    height: 270px;
    margin-top: 10px;
    border-radius: 15px;
    background-color: rgba(175, 175, 175, 0.5);
  }
`;
const Loader = () => {
  return (
    <div>
      <DivSearch></DivSearch>

      <DivProducts>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </DivProducts>

      <DivImages>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </DivImages>
    </div>
  );
};

export default Loader;
