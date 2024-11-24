    import React, { useState } from "react";

    const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch("http://localhost:7001/api/auth/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (response.ok) {
            setMessage(`Login successful! Your role is: ${data.role}`); // Display role in message
            console.log("Token:", data.role);

            // Store token and role in localStorage
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("role", data.role);

            if (data.role === "admin") {
                window.location.href = "/admin";
              } else if (data.role === "user") {
                window.location.href = "/user";
              }
        } else {
            setMessage(`Error: ${data.message}`);
        }
        } catch (error) {
        setMessage("An error occurred during login.");
        }
    };

    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Username:</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
        </div>
    );
    };

    export default Login;