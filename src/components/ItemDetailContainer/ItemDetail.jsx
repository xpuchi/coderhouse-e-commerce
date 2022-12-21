import Loader from "../Loader/Loader";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import React, { useState, useEffect, useContext } from "react";
import { getItemById } from "../../asyncMock";
import { useParams, Link } from "react-router-dom";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { ItemCount } from "./ItemCount";

const ItemDetail = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addItem, isInCart, removeItem } = useContext(CartContext);

  const { productId } = useParams();

  useEffect(() => {
    getItemById(productId)
      .then((response) => {
        setProduct(response);
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

  const isAdded = isInCart(product.id);

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
          <ButtonPrimary>Terminar compra</ButtonPrimary>
        </Link>
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
