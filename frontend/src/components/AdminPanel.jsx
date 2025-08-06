import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

export default function AdminPanel() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const token = localStorage.getItem("authToken");
        console.log("Токен из localStorage:", token);

        if (!token) {
            setError("Нет токена авторизации. Пожалуйста, войдите в систему.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.get(
                "https://localhost:7225/api/admin/users",
                config
            );

            console.log("Ответ от сервера:", response.data);
            setUsers(response.data);
        } catch (err) {
            console.error("Ошибка при получении пользователей:", err.response || err);

            if (err.response) {
                console.log("Статус ошибки:", err.response.status);
                console.log("Данные ошибки:", err.response.data);

                if (err.response.status === 403) {
                    setError("Доступ запрещён: недостаточно прав.");
                } else if (err.response.status === 401) {
                    setError("Неавторизован. Пожалуйста, войдите.");
                } else {
                    setError("Не удалось загрузить пользователей.");
                }
            } else {
                setError("Ошибка сети или сервера.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (!localStorage.getItem("authToken")) {
        return (
            <div className="admin-panel p-4">
                <p className="text-red-600 font-bold">
                    Вы не авторизованы. Пожалуйста, войдите в систему, чтобы получить
                    доступ к админ-панели.
                </p>
            </div>
        );
    }

    return (
        <div className="admin-panel">
            <main className="admin-content">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

                {loading && <p>Загрузка...</p>}
                {error && <p className="text-red-500">{error}</p>}

                <h2 className="text-xl font-semibold mb-2">Пользователи</h2>
                <ul className="mb-4 border p-2 rounded">
                    {users.map((user) => (
                        <li key={user.id} className="border-b p-1">
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
