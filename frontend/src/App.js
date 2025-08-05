//глав. страницы + каталога для женщин | мужчин + вход в акк + профиль пользователя + офорление заказа
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DiscountBanner from "./components/DiscountBanner";
import PopularCategories from "./components/PopularCategories";
import LimitedTimeOffer from "./components/LimitedTimeOffer";
import BestSellers from "./components/BestSellers";
import ShopByNotes from "./components/ShopByNotes";
import ShopByGender from "./components/ShopByGender";
import ShopByBrands from "./components/ShopByBrands";
import WhyEllysiaSection from "./components/WhyEllysiaSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

import CatalogWoman from "./components/CatalogWoman";
import CatalogMen from "./components/CatalogMen";
import ScrollToTop from "./components/ScrollToTop";

import SignInForm from "./components/SignInForm";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";
import FavoriteFragrances from "./components/FavoriteFragrances";
import PerfumeDetail from "./components/PerfumeDetail";

import ShoppingCart from "./components/ShoppingCart";
import CheckoutPage from "./components/CheckoutPage";
import CompanyProfile from "./components/CompanyProfile";

import "./styles/main.css";

import { AuthProvider, AuthContext, useAuth } from "./context/AuthContext";
import { CompanyAuthProvider } from "./context/CompanyAuthContext";

function AppRoutes() {
    const { user } = useAuth(); // если нужен user из контекста AuthContext

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <HeroSection />
                        <DiscountBanner />
                        <PopularCategories />
                        <LimitedTimeOffer />
                        <BestSellers />
                        <ShopByNotes />
                        <ShopByGender />
                        <ShopByBrands />
                        <WhyEllysiaSection />
                        <SubscribeSection />
                    </>
                }
            />
            <Route path="/catalog-women" element={<CatalogWoman />} />
            <Route path="/catalog-men" element={<CatalogMen />} />
            <Route path="/perfume/:id" element={<PerfumeDetail />} />

            <Route path="/signin" element={<SignInForm />} />
            <Route path="/register" element={<RegisterForm />} />

            {/* Профили */}
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/company-profile" element={<CompanyProfile />} />

            <Route path="/favorites" element={<FavoriteFragrances />} />

            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <CompanyAuthProvider>
                <ScrollToTop />
                <Header />
                <AppRoutes />
                <Footer />
            </CompanyAuthProvider>
        </AuthProvider>
    );
}

export default App;


//=========================================================================

//профиль компании | ! доделать страницу и связи с айпишкой + добавление товара от лица компании
/*import React from "react";
import Header from "./components/Header";
import CompanyProfile from "./components/CompanyProfile";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <CompanyProfile />
            <Footer />
        </div>
    );
}

export default App;*/
