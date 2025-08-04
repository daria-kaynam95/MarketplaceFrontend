import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { CartProvider } from "./context/CartContext"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <FavoriteProvider>
                    <CartProvider> 
                        <App />
                    </CartProvider>
                </FavoriteProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

