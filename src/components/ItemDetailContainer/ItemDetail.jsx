import React from "react";
import ItemCount from "./ItemCount";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getItemById } from "../../asyncMock";
import { useParams } from "react-router-dom";

const handleOnAdd = (quantity) => {
  console.log("Se agregaron al carrito " + quantity + " productos");
};

const ItemDetail = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    return <h2>Cargando..</h2>;
  }

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
        <ItemCount initial={0} stock={product?.stock} onAdd={handleOnAdd} />
        <p>({product?.stock} unidades en stock)</p>
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
