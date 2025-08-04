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
import CompanyProfile from "./components/CompanyProfile"; // добавил импорт

import "./styles/main.css";

import { AuthProvider, AuthContext } from "./context/AuthContext";

function AppRoutes() {
    const { user } = useContext(AuthContext);

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
            <Route
                path="/profile"
                element={user?.userType === "COMPANY" ? <CompanyProfile /> : <UserProfile />}
            />
            <Route path="/favorites" element={<FavoriteFragrances />} />

            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <ScrollToTop />
            <Header />
            <AppRoutes />
            <Footer />
        </AuthProvider>
    );
}

export default App;

//=========================================================================

// панели регистрации акк
/*import React from "react";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <>
            <Header />
            <RegisterForm />
            <Footer />
        </>
    );
}

export default App;*/

//=========================================================================

//панель входа в акк + профиль пользователя 

/*import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import UserProfile from "./components/UserProfile";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<SignInForm />} />
                <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;*/


//=========================================================================

// корзина - оформление заказа
/*import React from "react";
import Header from "./components/Header";
import CheckoutPage from "./components/CheckoutPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <CheckoutPage />
            <Footer />
        </div>
    );
}

export default App;*/