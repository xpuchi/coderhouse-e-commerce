import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { ButtonSecondary } from "../Button/ButtonSecondary";
import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, getTotal, removeItem } = useContext(CartContext);

  const total = getTotal();

  if (cart.length === 0) {
    return (
      <Carrito>
        <h1>¡Oh! Tu carrito está vacío.</h1>
        <CartImage>
          <img src="/images/cartilust.png" alt="shopping-cart" />
        </CartImage>
        <p>
          Si no sabés por dónde empezar, te sugerimos nuestros{" "}
          <Link to="/category/bestsellers">bestsellers</Link>.
        </p>
      </Carrito>
    );
  }

  return (
    <Carrito>
      <h1>
        <TbShoppingCart />
        <p>Tu Carrito</p>
      </h1>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td className="item">
                  <Image>
                    <img
                      src={product?.pictureUrl}
                      alt={`portada de ${product?.title}`}
                    />
                  </Image>

                  <div>
                    <h4>{product.title}</h4>
                    <p>{product.author}</p>
                  </div>
                </td>

                <td>
                  <p>${product.price}</p>
                </td>

                <td>{product?.quantity}</td>

                <td>${product.price * product.quantity}</td>

                <td>
                  <ButtonPrimary onClick={() => removeItem(product)}>
                    Eliminar
                  </ButtonPrimary>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total">
        <h2>Subtotal: ${total}</h2>
        <span>
          <Link to="/">
            <ButtonSecondary>Seguir Comprando</ButtonSecondary>
          </Link>
          <Link to="/checkout">
            <ButtonPrimary>Terminar compra</ButtonPrimary>
          </Link>
        </span>
      </div>
    </Carrito>
  );
};

// Debe mostrar el desglose de tu carrito y el precio total.✔
// Debe estar agregada la ruta ‘cart’ al BrowserRouter. ✔
// Debe mostrar todos los ítems agregados agrupados. ✔
// Por cada tipo de ítem, incluye un control para eliminar ítems.✔
// De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems. ✔
// y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.✔

const Carrito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  h1 {
    display: flex;
    align-items: center;

    p {
      margin-left: 1rem;
    }
  }

  table {
    width: 800px;

    th,
    td {
      padding: 15px;
    }

    tr:nth-child(even) {
      background-color: #d5d5d5;
    }

    .item {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      p {
        margin: 5px;
      }
      h4 {
        margin: 25px 5px 5px 5px;
      }
    }
  }
  .total {
    width: 800px;
    display: flex;
    flex-direction: column;

    h2,
    span {
      display: flex;
      justify-content: flex-end;
      margin: 0.5rem;
    }
  }
`;

const Image = styled.div`
  img {
    width: 70px;
    height: 110px;
    border-radius: 15px;
  }
`;

const CartImage = styled.div`
  img {
    width: 400px;
    height: 280px;
  }
`;
