import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (perfume) => {
        setFavorites((prev) => {
            const exists = prev.some((p) => p.id === perfume.id);
            if (!exists) {
                return [...prev, perfume];
            }
            return prev;
        });
    };

    const removeFromFavorites = (id) => {
        setFavorites((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoriteContext);

