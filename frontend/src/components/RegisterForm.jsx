import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import "./RegisterForm.css";

function RegisterForm() {
    const [isCompany, setIsCompany] = useState(false);

    // User fields
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Company fields
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");
    const [taxNumber, setTaxNumber] = useState("");
    const [regNumber, setRegNumber] = useState("");

    const navigate = useNavigate();

    const handleUserSubmit = async () => {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const requestBody = {
            email,
            nickname,
            password,
            role: "CLIENT",  // <-- добавлено поле role ???
        };
        console.log("User request body:", requestBody);

        try {
            const response = await axios.post(
                "https://localhost:7225/api/auth/register",
                requestBody,
                { headers: { "Content-Type": "application/json" } }
            );
            console.log("User response:", response.data);

            toast.success("User registered successfully!");
            navigate("/user-profile");
        } catch (error) {
            console.error("User registration error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "User registration failed");
        }
    };

    const handleCompanySubmit = async () => {
        const requestBody = {
            name: companyName,
            description,
            taxNumber,
            regNumber,
            email,
            password
        };
        console.log("Company request body:", requestBody);

        try {
            const response = await axios.post(
                "https://localhost:7225/api/companies/create-company",
                requestBody,
                { headers: { "Content-Type": "application/json" } }
            );
            console.log("Company response:", response.data);

            toast.success("Company registered successfully!");
            navigate("/company-profile");
        } catch (error) {
            console.error("Company registration error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Company registration failed");
        }
    };

    // Универсальный обработчик формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isCompany) {
            await handleCompanySubmit();
        } else {
            await handleUserSubmit();
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
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
                                <span className="field-label">Nickname</span><span className="required">*</span>
                            </label>
                            <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
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
                    </>
                )}
                <button type="submit" className="submit-button">Continue</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default RegisterForm;
