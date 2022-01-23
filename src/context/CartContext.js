import React, {createContext, useState} from 'react';

export const CartContext = createContext ([]);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState ([]);

    const removeItem = (item) => {
        const auxArray = items.filter ((producto) => producto.item.id !== item.id);
        setItems ([...auxArray]);
    };

  
    const addItem = (item) => {
        const findItem = items.find((producto) => producto.item.id === item.id);
    
        if (findItem) {
          findItem.cantidad += 1;
          setItems([...items]);
        }
      };

      const clearCart = () => {
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

