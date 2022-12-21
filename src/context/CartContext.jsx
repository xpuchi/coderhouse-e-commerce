import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = (productToAdd, quantity) => {
    console.log(productToAdd);
    if (!isInCart(productToAdd.id)) {
      console.log(productToAdd.id);
      setCart([...cart, { ...productToAdd, quantity }]);
      setCount((prevCount) => prevCount + quantity);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const removeItem = (productToRemove, quantity) => {
    const updatedCart = cart.filter(
      (product) => product.id !== productToRemove.id
    );
    setCart(updatedCart);
    setCount((prevCount) => prevCount - (quantity || productToRemove.quantity));
  };

  const getQuantity = () => {
    let acc = 0;

    cart.forEach((product) => {
      acc += product.quantity;
    });

    return acc;
  };

  const getTotal = () => {
    let acc = 0;

    cart.forEach((product) => {
      acc += product.quantity * product.price;
    });

    return acc;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        count,
        addItem,
        removeItem,
        isInCart,
        getQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
