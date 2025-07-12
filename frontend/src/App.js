//глав. страницы + каталога для женщин + каталог для мужчин + вход в акк
/*import React from "react";
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

import "./styles/main.css";

function App() {
    return (
        <>
            <ScrollToTop />
            <Header />
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
                <Route path="/signup" element={<SignInForm />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;*/

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

export default App;*/

//=========================================================================

//панель входа в акк

/*import React from "react";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import Footer from "./components/Footer";
function App() {
    return (
        <div>
            <Header />
            <SignInForm />
            <Footer />
        </div>
    );
}

export default App;*/

//=========================================================================

// профиль пользователя + история заказов + настройки профиля + израбнные + сравнение 
// вероятно нужен бэкенд для продолжениее работы (??)

/*import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
    // Пример пользователя
    const userData = {
        fullName: "Анна Иванова",
        email: "anna@example.com"
    };

    return (
        <div>
            <Header />
            <UserProfile user={userData} />
            <Footer />
        </div>
    );
}

export default App;*/

//=========================================================================

// корзина - оформление заказа
import React from "react";
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

export default App;

