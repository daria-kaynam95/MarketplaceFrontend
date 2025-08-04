import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (perfume, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === perfume.id);
            if (existing) {
                return prev.map(p =>
                    p.id === perfume.id
                        ? { ...p, quantity: p.quantity + quantity }
                        : p
                );
            } else {
                return [...prev, { ...perfume, quantity }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(p => p.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
export { CartContext };
