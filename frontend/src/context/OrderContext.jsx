import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orderData, setOrderData] = useState({
        // ... данные формы ...
    });

    const [orderPlaced, setOrderPlaced] = useState(false);

    // Новый стейт — список всех заказов пользователя
    const [orderHistory, setOrderHistory] = useState([]);

    const updateOrderData = (field, value) => {
        setOrderData(prev => ({ ...prev, [field]: value }));
    };

    const resetOrder = () => {
        setOrderData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address1: "",
            address2: "",
            postal: "",
            city: "",
            country: "",
            paymentMethod: "",
            cardNumber: "",
            expireDate: "",
            cvv: "",
        });
        setOrderPlaced(false);
    };

    // Функция для добавления заказа в историю
    const addOrderToHistory = (order) => {
        setOrderHistory(prev => [...prev, order]);
    };

    return (
        <OrderContext.Provider
            value={{
                orderData,
                updateOrderData,
                orderPlaced,
                setOrderPlaced,
                resetOrder,
                orderHistory,
                addOrderToHistory,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};
