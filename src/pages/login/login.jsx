import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import logo from '../../../public/logo.svg'; // Import the logo
import './login.css'; // Ensure this is the correct path to your CSS file
import { useState } from "react";

export default function Login({ onLogin }) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const handleLogin = (e) => {
        print('HI')
        e.preventDefault()
        if (username && password) {
            onLogin({ username, password });
        }
    };
    return (
        <div className="container">
            <Card>
                <div className="card-logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1 className="card-title">Sign in</h1>
                <Form>
                    <Form.Item name="username" className="form-item">
                        <Input type="text" value={username} onChange={(e) => setusername(e.target.value)} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" className="form-item">
                        <Input.Password type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-button" onClick={handleLogin} block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
