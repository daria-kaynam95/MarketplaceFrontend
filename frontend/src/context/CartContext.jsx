import React, { createContext, useContext, useState } from 'react';

// Создаём контекст корзины
const CartContext = createContext();

// Провайдер корзины, оборачивает компоненты, которым нужен доступ к корзине
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Функция добавления товара в корзину
    const addToCart = (perfume, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(p => p.id === perfume.id);
            if (existing) {
                // Если товар уже есть, увеличиваем количество
                return prev.map(p =>
                    p.id === perfume.id
                        ? { ...p, quantity: p.quantity + quantity }
                        : p
                );
            } else {
                // Если товара нет — добавляем новый объект с количеством
                return [...prev, { ...perfume, quantity }];
            }
        });
    };

    // Функция удаления товара из корзины по id
    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(p => p.id !== id));
    };

    // Функция очистки корзины (удаляет все товары)
    const clearCart = () => {
        setCartItems([]);
    };

    // Передаём в провайдер значения и функции для использования в компонентах
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Хук для удобного использования контекста корзины
export const useCart = () => useContext(CartContext);

export { CartContext };
