import React, { useEffect, useState } from "react";

// Con esto trabajamos con la base de datos de firestore //
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useTheContext } from "../context/context";

export const useProducts = () => {
  const {uuidUser} = useTheContext()
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
    const getDocUser =  doc(userCart, uuidUser);
    const docUser = await getDoc(getDocUser);
    setCollectCart(docUser.data().cartUser)
  };

  const getOneProduct = async (id, product) => {
    console.log(product)
    setModal(true);
    setProductAlone(product);
  };


  const sendProductCart = async (uid, product) => {
      console.log(product)
      const refCollect = collection(db, 'Users');
      const docRef = doc(refCollect, uid);
    
      const getOneDoc = doc(db, 'Users', uid);
      const oneDoc = await getDoc(getOneDoc); 

      const totalProductInTheCart = oneDoc.data().cartUser;
      const findProductInCart = totalProductInTheCart.find(obj => obj.id === product.id)

      if(findProductInCart){
          console.log('Producto yaa existe')
      }else{
        await updateDoc(docRef, {cartUser: [...totalProductInTheCart, product]});
        return await getProducts()
      }
       
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
    collectCart,
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
