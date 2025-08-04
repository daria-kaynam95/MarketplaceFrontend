import { useState, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./RegisterForm.css";

function RegisterForm() {
    const [isCompany, setIsCompany] = useState(false);

    // User fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Company fields
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");
    const [taxNumber, setTaxNumber] = useState("");
    const [regNumber, setRegNumber] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(
                "https://marketplaceapi20250628113538.azurewebsites.net/api/auth/register",
                { nickname: `${firstName} ${lastName}`, email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200 || response.status === 201) {
                toast.success("Registration successful! Logging in...");
                const loginResponse = await axios.post(
                    "https://marketplaceapi20250628113538.azurewebsites.net/api/auth/login",
                    { email, password }
                );

                const { token, id } = loginResponse.data;
                if (token && id) {
                    login(token, id);
                    navigate("/user-profile");
                } else {
                    toast.warning("Registration done, but login failed.");
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
        }
    };

    const handleCompanySubmit = async (e) => {
        e.preventDefault();
        try {
            // 1. Регистрация компании
            await axios.post(
                "https://marketplaceapi20250628113538.azurewebsites.net/api/companies/create-company",
                {
                    companyName,
                    description,
                    taxNumber,
                    registrationNumber: regNumber,
                    email,
                    password
                },
                { headers: { "Content-Type": "application/json" } }
            );

            // 2. Автоматический логин
            const loginResponse = await axios.post(
                "https://marketplaceapi20250628113538.azurewebsites.net/api/auth/login",
                { email, password }
            );

            const { token, id } = loginResponse.data;
            if (token && id) {
                login(token, id);
                toast.success("Company registered & logged in successfully!");
                navigate("/company-profile");
            } else {
                toast.warning("Company created, but login failed.");
                navigate("/signin");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Company registration failed");
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={isCompany ? handleCompanySubmit : handleUserSubmit} className="register-form">
                <h2 className="register-title">
                    {isCompany ? "NEW COMPANY REGISTRATION" : "NEW USER REGISTRATION"}
                </h2>

                <p className="register-subtitle">
                    Have an account?{" "}
                    <Link to="/signin" className="sign-in-link">Sign in</Link>
                </p>

                <div className="register-switch under-title">
                    <button
                        type="button"
                        className={!isCompany ? "active" : ""}
                        onClick={() => setIsCompany(false)}
                    >
                        User Registration
                    </button>
                    <button
                        type="button"
                        className={isCompany ? "active" : ""}
                        onClick={() => setIsCompany(true)}
                    >
                        Company Registration
                    </button>
                </div>

                {!isCompany ? (
                    <>
                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">First Name</span><span className="required">*</span>
                            </label>
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Last Name</span><span className="required">*</span>
                            </label>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Email</span><span className="required">*</span>
                            </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Password</span><span className="required">*</span>
                            </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Confirm Password</span><span className="required">*</span>
                            </label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>

                        <button type="submit" className="submit-button">Continue</button>
                    </>
                ) : (
                    <>
                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Company Name</span><span className="required">*</span>
                            </label>
                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Description</span><span className="required">*</span>
                            </label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Tax Number</span><span className="required">*</span>
                            </label>
                            <input type="text" value={taxNumber} onChange={(e) => setTaxNumber(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Registration Number</span><span className="required">*</span>
                            </label>
                            <input type="text" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Email</span><span className="required">*</span>
                            </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="field-group">
                            <label className="field-label-container">
                                <span className="field-label">Password</span><span className="required">*</span>
                            </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <button type="submit" className="submit-button">Continue</button>
                    </>
                )}
            </form>
            <ToastContainer />
        </div>
    );
}

export default RegisterForm;
