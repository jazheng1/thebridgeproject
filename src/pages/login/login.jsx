import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import logo from '../../../public/logo.svg'; // Import the logo
import './login.css'; // Ensure this is the correct path to your CSS file

export default function Login() {
    return (
        <div className="container">
            <Card>
                <div className="card-logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1 className="card-title">Sign in</h1>
                <Form>
                    <Form.Item name="username" className="form-item">
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" className="form-item">
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-button" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
