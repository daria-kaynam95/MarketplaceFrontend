import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterForm.css";

function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, password, confirmPassword });
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2 className="register-title">NEW USER REGISTRATION</h2>
                <p className="register-subtitle">
                    Have an account? <a href="#">Sign in</a>
                </p>

                <div className="field-group">
                    <label className="field-label-container">
                        <span className="field-label">First Name</span>
                        <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-label-container">
                        <span className="field-label">Last Name</span>
                        <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-label-container">
                        <span className="field-label">Email</span>
                        <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-label-container">
                        <span className="field-label">Password</span>
                        <span className="required">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="field-group">
                    <label className="field-label-container">
                        <span className="field-label">Confirm Password</span>
                        <span className="required">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Continue</button>
            </form>
        </div>
    );
}

export default RegisterForm;