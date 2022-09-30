import React, { useEffect, useState } from "react";

// Con esto trabajamos con la base de datos de firestore //
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productAlone, setProductAlone] = useState([]);
  const [modal, setModal] = useState(false);
  const [collectCart, setCollectCart] = useState([])

  // Le pasamos la base de datos a collection y el nombre de la colección
  const productsCollect = collection(db, "allProducts");
  const userCart = collection(db, 'Users');

  const getProducts = async () => {
    const data = await getDocs(productsCollect);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    console.log(products)
  };

  const getOneProduct = async (id) => {
    const oneProduct = doc(db, "allProducts", id);
    const aloneDoc = await getDoc(oneProduct);
    setModal(true);
    setProductAlone(aloneDoc.data(), aloneDoc.id);
    console.log(productAlone)
  };


  const sendProductCart = async (uid, product) => {
    const refCollect = collection(db, 'Users');
    const docRef = doc(refCollect, uid);
     
      const getOneDoc = doc(db, 'Users', uid);
      const oneDoc = await getDoc(getOneDoc); 

      const totalProductInTheCart = oneDoc.data().cartUser;
      console.log(totalProductInTheCart)
      return await updateDoc(docRef, {cartUser: [...totalProductInTheCart, product]});
  }




  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    getOneProduct,
    productAlone,
    modal,
    setModal,
    sendProductCart,
  };
};


// const addProduct = async (productAlone, id) => {
//   const docRef = doc(db, "Cart", id);
//   const payload = productAlone;
//   await setDoc(docRef, payload);
// };

// const sendProductCart = async (uid, product) => {
//   const docRef = doc(db, 'Users', uid);
//   const oneDoc = await getDoc(docRef); 
//   console.log(oneDoc);
// }
