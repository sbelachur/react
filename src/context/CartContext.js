import React, {createContext, useState} from 'react';

const CartContext = createContext ();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState ([
        { id: '1', title: 'Producto1', cantidad: 0},
        {id: '2', title: 'Producto2', cantidad: 0},
    ]);

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

      const totalItems = () => {
        return items.reduce((acc, curr) => acc + curr.votes, 0);
      };
      return (
        <CartContext.Provider
          value={{
            items,
            removeItem,
            addItem,
            totalItems,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };
    
export default CartContext;

