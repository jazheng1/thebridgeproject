import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button } from 'antd';
import logo from '../../../public/logo.svg'; // Ensure this path is correct
import './login.css'; // Ensure this is the correct path to your CSS file

export default function Login() {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        // Here you would handle the login logic, e.g., an API call to your backend
        console.log('Received values of form: ', values);

        // For now, let's assume the login is successful and redirect to the questions page
        // In a real app, you'd check the response from your login API
        navigate('/questions');
    };

    return (
        <div className="container">
            <Card>
                <div className="card-logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1 className="card-title">Sign in</h1>
                <Form onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        className="form-item"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        className="form-item"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
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
