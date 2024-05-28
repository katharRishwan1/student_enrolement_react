import axios from 'axios';
import React, { useState } from 'react';
import { sigin } from './Api';
import "./login.css"

function LoginPage() {

    const [email, setEmail] = useState('');
    const [passwords, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        const payload = {
            value: email,
            password: passwords
        }
        console.log(payload)
        const response = await axios.post(sigin, payload)
        const { token } = response?.data?.result;
        localStorage.setItem('token', token);
        console.log(token)
        window.location.reload();
    };


    return (
        <div>
            <div class="form">
                <p class="form-title">Sign in to your account</p>
                <div class="input-container">
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div class="input-container">
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={passwords}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button class="submit"
                    onClick={() => handleSubmit()}
                >
                    Sign in
                </button>
            </div>


        </div>
    );
}

export default LoginPage;
