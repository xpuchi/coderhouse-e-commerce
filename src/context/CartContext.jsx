import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [orderId, setOrderId] = useState("");

  const addItem = (productToAdd, quantity) => {
    if (!isInCart(productToAdd.id)) {
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

  const clearCart = () => {
    setCart([]);
    setCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        count,
        orderId,
        setOrderId,
        addItem,
        removeItem,
        isInCart,
        getQuantity,
        getTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
