import React, {createContext, useState} from 'react';

export const CartContext = createContext ();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState ([]);

    const removeItem = (id) => {
        const auxArray = items.filter ((producto) => producto.id !== id);
        setItems (auxArray);
    };

  
    const addItem = (id) => {
        const findItem = items.find((producto) => producto.id === id);
    
        if (findItem) {
          findItem.cantidad += 1;
          setItems([...items]);
        }
      };

      const clearCart = (items) => {
        setItems ([]);
      };

      const totalItems = () => {
        return items.reduce((acc, curr) => acc + curr.items, 0);
      };
      return (
        <CartContext.Provider
          value={{
            items,
            removeItem,
            addItem,
            totalItems,
            clearCart,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };
    
export default CartContext;

