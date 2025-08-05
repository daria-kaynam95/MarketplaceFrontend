import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";             // кастомный хук из AuthContext
import { useCompanyAuth } from "../context/CompanyAuthContext"; // кастомный хук из CompanyAuthContext
import "./SignInForm.css";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { login: userLogin } = useAuth();
    const { login: companyLogin } = useCompanyAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Попытка логина пользователя
            const userResponse = await axios.post(
                "https://localhost:7225/api/auth/login",
                { email, password }
            );

            console.log("User login response:", userResponse.data);

            const token = userResponse.data?.token ?? userResponse.data?.jwtToken;
            const id = userResponse.data?.id ?? userResponse.data?.userId;

            if (token && id) {
                userLogin(token, id);
                toast.success("User login successful!");
                navigate("/user-profile");
                return;
            }

            toast.error("Login failed: token or user ID missing.");
        } catch (userError) {
            console.log("User login error:", userError.response?.data || userError.message);

            if (userError.response?.status === 400 || userError.response?.status === 401) {
                try {
                    // Попытка логина компании
                    const companyResponse = await axios.post(
                        "https://localhost:7225/api/companies/login",
                        { email, password }
                    );

                    console.log("Company login response:", companyResponse.data);

                    const token = companyResponse.data?.token
                        ?? companyResponse.data?.jwtToken
                        ?? companyResponse.data?.accessToken
                        ?? companyResponse.data?.access_token;

                    const id = companyResponse.data?.id
                        ?? companyResponse.data?.companyId
                        ?? companyResponse.data?.idCompany;

                    if (token && id) {
                        companyLogin(token, id, "COMPANY");
                        toast.success("Company login successful!");
                        navigate("/company-profile");
                        return;
                    }

                    toast.error("Company login failed: token or company ID missing.");
                } catch (companyError) {
                    console.log("Company login error:", companyError.response?.data || companyError.message);
                    toast.error(companyError.response?.data?.message || "Company login failed.");
                }
            } else {
                toast.error(userError.response?.data?.message || "Login failed. Please try again.");
            }
        }
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit} className="sign-in-form">
                <h2 className="sign-in-title">SIGN IN / REGISTER</h2>

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
