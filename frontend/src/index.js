import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { FavoriteProvider } from "./context/FavoriteContext"; // <-- добавляем

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <FavoriteProvider> {/* <-- оборачиваем App в FavoriteProvider */}
                    <App />
                </FavoriteProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

