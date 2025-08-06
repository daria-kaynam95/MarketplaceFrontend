import React, { useState, useEffect } from 'react';
import { FaListUl, FaThLarge } from 'react-icons/fa';
import perfumeAllData from '../data/perfumeAllData'; 
import './OrderHistory.css';

const categories = ['All', 'This Month', 'Last Month', 'This Year', 'Last Year'];

function getOrderStatus(orderDateStr) {
    const orderDate = new Date(orderDateStr);
    const now = new Date();
    const diffDays = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));

    if (diffDays < 3) return 'Processing';
    if (diffDays < 7) return 'Delivered';
    return 'Declined';
}

function OrderHistory() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ordersHistory = JSON.parse(localStorage.getItem('ordersHistory') || '[]');
        setOrders(ordersHistory);
    }, []);

    const filteredOrders = orders.filter((order) => {
        const orderDate = new Date(order.date);
        const now = new Date();

        switch (selectedCategory) {
            case 'This Month':
                return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear();
            case 'Last Month':
                const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
                return orderDate.getMonth() === lastMonth.getMonth() && orderDate.getFullYear() === lastMonth.getFullYear();
            case 'This Year':
                return orderDate.getFullYear() === now.getFullYear();
            case 'Last Year':
                return orderDate.getFullYear() === now.getFullYear() - 1;
            case 'All':
            default:
                return true;
        }
    });

    return (
        <div className="order-history-container">
            <div className="order-header">
                <h2 className="order-title">ORDERS HISTORY</h2>

                <div className="order-top-row">
                    <div className="order-buttons">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`order-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="order-icons">
                        <button className="icon-btn">
                            <FaListUl />
                        </button>
                        <button className="icon-btn">
                            <FaThLarge />
                        </button>
                    </div>
                </div>
            </div>

            <div className="order-content">
                {filteredOrders.length === 0 ? (
                    <p className="no-orders-message">No orders found for the selected period.</p>
                ) : (
                    <div className="order-cards-container">
                        {filteredOrders.map((order) => {
                            const orderDate = new Date(order.date);
                            const status = getOrderStatus(order.date);
                            const orderedItems = order.items.map((id) =>
                                perfumeAllData.find((p) => p.id === id)
                            );

                            return (
                                <div className="order-card" key={order.id}>
                                    <div className="order-images">
                                        {orderedItems.map((item, idx) =>
                                            item ? (
                                                <img
                                                    key={idx}
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="order-image"
                                                />
                                            ) : null
                                        )}
                                    </div>

                                    <div className="order-info">
                                        <p className="order-id">#{order.id}</p>
                                        <p className="order-items">{order.items.length} items</p>
                                    </div>

                                    <div className="order-status-block">
                                        <span className={`order-status ${status.toLowerCase()}`}>{status}</span>
                                        <p className="order-date">{orderDate.toLocaleDateString()}</p>
                                    </div>

                                    <div className="order-total">
                                        <p>${order.total.toFixed(2)}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderHistory;






