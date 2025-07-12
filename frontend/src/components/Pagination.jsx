import React from 'react';
import './Pagination.css';

const Pagination = () => {
    return (
        <div className="pagination-container">
            <button className="view-more">View more</button>
            <div className="page-numbers">
                <button className="page active">1</button>
                <button className="page">2</button>
                <button className="page">3</button>
                <span className="dots">…</span>
                <button className="page">48</button>
            </div>
        </div>
    );
};

export default Pagination;

