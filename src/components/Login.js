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
                <input type="text" name="username" id="username" />
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <span>
                    I agree to the Terms & Conditions
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;