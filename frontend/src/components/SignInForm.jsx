import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCompanyAuth } from "../context/CompanyAuthContext";
import "./SignInForm.css";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("USER");
    const navigate = useNavigate();

    const { login: userLogin } = useAuth();
    const { login: companyLogin } = useCompanyAuth();

    const loginUser = async () => {
        const response = await axios.post("https://localhost:7225/api/auth/login", { email, password });
        const token = response.data?.token ?? response.data?.jwtToken;
        const id = response.data?.id ?? response.data?.userId;

        if (!token || !id) throw new Error("User token or ID missing");

        userLogin(token, id);
        toast.success("User login successful!");
        navigate("/user-profile");
    };

    const loginCompany = async () => {
        try {
            const response = await axios.post("https://localhost:7225/api/companies/login", { email, password });

            // Просто вызываем login без токена и id
            companyLogin(null, null, "COMPANY");

            toast.success("Company login successful!");
            navigate("/company-profile");
        } catch (error) {
            throw new Error(error.response?.data?.message || "Company login failed");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (role === "USER") {
                await loginUser();
            } else {
                await loginCompany();
            }
        } catch (error) {
            console.error(`${role} login error:`, error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit} className="sign-in-form">
                <h2 className="sign-in-title">SIGN IN / REGISTER</h2>

                <div className="role-select">
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="USER"
                            checked={role === "USER"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        User
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="COMPANY"
                            checked={role === "COMPANY"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        Company
                    </label>
                </div>

                <p className="sign-in-subtitle">
                    <span>Multi-brand Comparison Tool</span>
                    <span>Fragrance Layering Tips</span>
                    <span>Mobile App With Bonuses</span>
                    <span>Fast and Reliable Shipping</span>
                    <span>New Arrivals Every Month</span>
                    <span>Real-Time Order Tracking</span>
                </p>

                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Continue</button>

                <p className="divider">OR</p>

                <button type="button" className="social-button google">
                    <FaGoogle className="social-icon" /> Continue with Google
                </button>

                <button type="button" className="social-button facebook">
                    <FaFacebookF className="social-icon" /> Continue with Facebook
                </button>

                <p className="policy-text">
                    By continuing, you agree to our <a href="/privacy">Privacy Policy</a> and{" "}
                    <a href="/terms">Terms & Conditions</a>.
                </p>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SignInForm;

