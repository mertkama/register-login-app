import React, { useState } from 'react'
import "./Login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login">
            <form className="login__form">
                <h2 className="login__title">Create Your Account </h2>
                <h4 className="login__subtitle">Created for developers by developers</h4>
                input
            </form>
        </div>
    );
};

export default Login;