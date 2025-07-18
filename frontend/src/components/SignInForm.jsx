import React, { useState, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./SignInForm.css";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Получаем функцию login из контекста
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://marketplaceapi20250628113538.azurewebsites.net/api/auth/login",
                { email, password }
            );

            console.log("Login response:", response.data);

            const { token, id } = response.data;

            if (token && id) {
                login(token, id); // сохраняем в контексте
                toast.success("Login successful!");
                navigate("/user-profile");
            } else {
                toast.error("Login failed: token or user ID missing.");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error(
                error.response?.data?.message || "Login failed. Please try again."
            );
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

                <button type="submit" className="submit-button">
                    Continue
                </button>

                <p className="divider">OR</p>

                <button type="button" className="social-button google">
                    <FaGoogle className="social-icon" />
                    Continue with Google
                </button>

                <button type="button" className="social-button facebook">
                    <FaFacebookF className="social-icon" />
                    Continue with Facebook
                </button>

                <p className="policy-text">
                    By continuing, you agree to our{" "}
                    <a href="/privacy">Privacy Policy</a> and{" "}
                    <a href="/terms">Terms & Conditions</a>.
                </p>
            </form>

            <ToastContainer />
        </div>
    );
}

export default SignInForm;
