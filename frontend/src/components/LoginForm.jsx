import { useState } from "react";
import axios from "axios";

export default function LoginForm({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5253/api/auth/login", {
                email,
                password,
            });

            const { token, user } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            setError(null);
            onLoginSuccess(user);

        } catch (err) {
            setError(err.response?.data ?? "Ошибка при входе");
        }
    };

    return (
        <form onSubmit={handleLogin} style={{ maxWidth: 300, margin: "auto" }}>
            <h2>Вход</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ display: "block", marginBottom: 10, width: "100%" }}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ display: "block", marginBottom: 10, width: "100%" }}
            />
            <button type="submit" style={{ width: "100%" }}>Войти</button>
        </form>
    );
}

