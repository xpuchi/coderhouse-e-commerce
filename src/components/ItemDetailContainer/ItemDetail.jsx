import Loader from "../Loader/Loader";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { ItemCount } from "./ItemCount";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetail = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { addItem, isInCart, removeItem } = useContext(CartContext);

  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", productId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: productId, ...data };

        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return (
      <h2>
        <Loader />
      </h2>
    );
  }

  console.log(product);

  if (Object.keys(product).length === 1) {
    return <h2>No existe el producto</h2>;
  }

  const isAdded = isInCart(productId);

  return (
    <CardDetail>
      <Image>
        <img src={product?.pictureUrl} alt={`portada de ${product?.title}`} />
      </Image>

      <div>
        <h2>{product?.title}</h2>
        <h4>{product?.author}</h4>
        <p>{product?.description}</p>
        <h3>${product?.price}</h3>

        <small>(stock: {product?.stock} unidad/es)</small>

        <div>
          {" "}
          <ItemCount
            initial={0}
            stock={product?.stock}
            count={count}
            setCount={setCount}
          />
          <ButtonPrimary
            onClick={() =>
              isAdded ? removeItem(product, count) : addItem(product, count)
            }
            disabled={product?.stock === 0}
          >
            {isAdded ? "Quitar del carrito" : "Agregar al carrito"}
          </ButtonPrimary>
          <Link to="/cart">
            <ButtonPrimary>Ir al carrito</ButtonPrimary>
          </Link>
        </div>
      </div>
    </CardDetail>
  );
};

const CardDetail = styled.div`
  width: 850px;
  height: 600px;
  background-color: #d5d5d5;
  border-radius: 20px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  padding: 40px;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.3);

  h2 {
    color: #da6868;
  }
`;

const Image = styled.div`
  img {
    width: 450px;
    height: 590px;
    border-radius: 15px;
  }
`;

export default ItemDetail;
