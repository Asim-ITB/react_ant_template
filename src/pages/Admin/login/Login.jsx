/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../../Apis/TestApi";
import { Button, Input, Form, Row, Card, Spin } from "antd";

export default function Login() {
  const tokenString = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mutation = useMutation(login);
  const handleFormSubmit = async () => {
    setLoading(true);
    try {
      const result = await mutation.mutateAsync({
        email: email,
        password,
      });
      if (result.access_token) {
        localStorage.setItem("token", result.access_token);
        navigate("/admin");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  const rules = {
    email: [
      {
        type: "email",
        message: "The input is not valid E-mail!",
      },
      {
        required: true,
        message: "Please enter your E-mail!",
      },
    ],
    password: [
      {
        required: true,
        message: "Please enter password!",
      },
    ],
  };
  function cusToken() {
    localStorage.setItem("token", "abc");
  }
  if (tokenString) {
    return <Navigate to="/admin/dashboard" />;
  }
  return (
    <Spin spinning={loading}>
      <Row
        justify="center"
        align="middle"
        style={{ display: "flex", height: "60vh" }}
      >
        <Card style={{ boxShadow: "0px 3px 15px rgba(0,0,0,0.2)" }}>
          <h2>Login</h2>
          <Form onFinish={handleFormSubmit}>
            <Form.Item rules={rules.email} label="Username" name="uname">
              <Input
                type="text"
                placeholder="Enter Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              rules={rules.password}
              label="Password"
              placeholder="Enter Password"
              name="psw"
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Login</Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={cusToken}>Token</Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </Spin>
  );
}
