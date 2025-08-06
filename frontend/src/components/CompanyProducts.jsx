import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CompanyProducts.css";

function CompanyProducts({ token }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        descriprtion: "",
        amount: 0,
        price: 0
    });

    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://localhost:7225/api/products/GetProducts", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProducts(res.data);
        } catch (error) {
            console.error("Ошибка при получении продуктов:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://localhost:7225/api/products/CreateProduct", newProduct, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setShowModal(false);
            fetchProducts();
        } catch (error) {
            console.error("Ошибка при создании продукта:", error);
        }
    };

    const handleDeleteProduct = async (id) => {
        if (!window.confirm("Удалить продукт?")) return;
        try {
            await axios.delete(`https://localhost:7225/api/products/DeleteProduct${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchProducts();
        } catch (error) {
            console.error("Ошибка при удалении продукта:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <p>Загрузка продуктов...</p>;

    return (
        <div className="company-products">
            <h2>My Products</h2>
            <button className="add-product-btn" onClick={() => setShowModal(true)}>
                Add Product
            </button>

            {products.length === 0 ? (
                <p>Нет продуктов</p>
            ) : (
                <ul className="product-list">
                    {products.map((p) => (
                        <li key={p.id}>
                            <div>
                                <h3>{p.name}</h3>
                                <p>{p.descriprtion}</p>
                                <p>Количество: {p.amount}</p>
                                <p>Цена: ${p.price}</p>
                                <button onClick={() => handleDeleteProduct(p.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Create Product</h3>
                        <form onSubmit={handleCreateProduct}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                required
                            />
                            <textarea
                                placeholder="Description"
                                value={newProduct.descriprtion}
                                onChange={(e) => setNewProduct({ ...newProduct, descriprtion: e.target.value })}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Amount"
                                value={newProduct.amount}
                                onChange={(e) => setNewProduct({ ...newProduct, amount: Number(e.target.value) })}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                                required
                            />
                            <button type="submit">Save</button>
                            <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CompanyProducts;
