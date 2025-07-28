import React, { useState } from "react";
import axios from "axios";
import "./CompanyRegistration.css";

function CompanyRegistration() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [taxNumber, setTaxNumber] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const registerCompany = async (companyData) => {
        try {
            console.log("Отправляемые данные:", companyData); // ⬅️ Добавлено для отладки
            const response = await axios.post(
                "https://marketplaceapi20250628113538.azurewebsites.net/api/companies/create-company",
                companyData
            );
            console.log("Компания успешно зарегистрирована:", response.data);
            return response.data;
        } catch (error) {
            // Подробный вывод ошибки
            if (error.response) {
                console.error("Ошибка от сервера:", error.response.data);
            } else if (error.request) {
                console.error("Нет ответа от сервера:", error.request);
            } else {
                console.error("Ошибка при настройке запроса:", error.message);
            }
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await registerCompany({
                companyName: name,
                description: description,
                taxNumber: taxNumber,
                registrationNumber: regNumber,
                email: email,
                password: password
            });
            setSubmitted(true);
        } catch (err) {
            setError("Ошибка при регистрации компании. Попробуйте снова.");
        }
    };

    return (
        <div className="company-registration-card">
            <h1 className="company-registration-title">COMPANY REGISTRATION</h1>
            {submitted ? (
                <div className="success-message">
                    Thank you! Your company registration details have been submitted.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="company-registration-form">
                    <div className="form-columns">
                        <div className="column">
                            <label>
                                Company Name
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Description
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    rows={4}
                                />
                            </label>

                            <label>
                                Tax Number
                                <input
                                    type="text"
                                    value={taxNumber}
                                    onChange={(e) => setTaxNumber(e.target.value)}
                                    required
                                />
                            </label>
                        </div>

                        <div className="column">
                            <label>
                                Registration Number
                                <input
                                    type="text"
                                    value={regNumber}
                                    onChange={(e) => setRegNumber(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Email
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>

                            <label>
                                Password
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="submit-button">
                        Register Company
                    </button>
                </form>
            )}
        </div>
    );
}

export default CompanyRegistration;
