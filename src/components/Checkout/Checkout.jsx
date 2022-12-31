import React from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  getDocs,
  collection,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ClientForm from "./ClientForm";
import ConfirmedOrder from "./ConfirmedOrder";

export function Checkout() {
  const { cart, getTotal, clearCart, orderId, setOrderId } =
    useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCreateOrder = async (data) => {
    setLoading(true);

    console.log("handlecreateOrder", data);

    try {
      const objOrder = {
        buyer: data,
        items: cart,
        date: serverTimestamp(),
        total: getTotal(),
        status: "Generado",
      };

      const batch = writeBatch(db);

      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );
      const productsAddedToCartFromFirestore = await getDocs(productsRef);

      const { docs } = productsAddedToCartFromFirestore;

      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const createdOrder = await addDoc(orderRef, objOrder);

        setSubmitted(true);

        clearCart();

        setOrderId(createdOrder.id);
      } else {
        console.error("Hay productos fuera de stock");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (submitted) {
    return <ConfirmedOrder id={orderId} />;
  }

  return (
    <Checkoutt>
      <h1>Checkout</h1>
      <ClientForm handleCreateOrder={handleCreateOrder} />
    </Checkoutt>
  );
}

const Checkoutt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  img {
    width: 600px;
    height: auto;
  }
`;
