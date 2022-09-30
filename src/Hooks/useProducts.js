import React, { useEffect, useState } from "react";

// Con esto trabajamos con la base de datos de firestore //
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productAlone, setProductAlone] = useState([]);
  const [modal, setModal] = useState(false)

  // Le pasamos la base de datos a collection y el nombre de la colección
  const productsCollect = collection(db, "allProducts");

  const getProducts = async () => {
    const data = await getDocs(productsCollect);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getOneProduct = async (id) => {
    const oneProduct = doc(db, "allProducts", id);
    const aloneDoc = await getDoc(oneProduct);
    setProductAlone(aloneDoc._document.data.value.mapValue.fields);
    setModal(true)
  };

  useEffect(() => {
    getProducts();
  }, []);



  return {
    products,
    getOneProduct,
    productAlone,
    modal,
    setModal
  };
};
