import React, { useEffect, useState } from "react";

// Con esto trabajamos con la base de datos de firestore //
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useProducts = () => {
    const [products, setProducts] = useState([]);

  // Le pasamos la base de datos a collection y el nombre de la colección
  const productsCollect = collection(db, "allProducts");

const getProducts = async () => {
 const data = await getDocs(productsCollect);
 setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})));
 console.log(products)
};

useEffect(() => {
 getProducts();
}, []);

  return {
    products,
  };
};
