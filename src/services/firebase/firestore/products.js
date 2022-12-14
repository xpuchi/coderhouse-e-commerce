import { db } from "../firebaseConfig";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : query(collection(db, "products"), orderBy("title", "asc"));

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(productsAdapted);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//getProductsById
