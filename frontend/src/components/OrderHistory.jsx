import React, { useState } from 'react';
import { FaListUl, FaThLarge } from 'react-icons/fa';
import './OrderHistory.css';

const categories = ['All', 'This Month', 'Last Month', 'This Year', 'Last Year'];

function OrderHistory() {
    const [selectedCategory, setSelectedCategory] = useState('All');

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
                <div className="order-table-header">
                    <span>Order</span>
                    <span>Status</span>
                    <span>Total</span>
                </div>
                <div className="divider-line"></div>
                {/* Пока нет содержимого заказов */}
            </div>
        </div>
    );
}

export default OrderHistory;





