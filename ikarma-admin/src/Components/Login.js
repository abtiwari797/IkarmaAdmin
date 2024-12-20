import React, { useState } from "react";
import { Form, Input, Button, Typography, notification } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setToken } from "../ReduxStore/action";
import login from "../api/login"; // Import the login API function
import Spinner from "./Spinner";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch
  const [loading, setLoading] = useState(false);

  // Handle successful login submission
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await login({
        email: "rohit@gooddolphin.com",
        password: "Welcome1@",
      });

      const accessToken = response?.data?.token.AccessToken;

      if (accessToken) {
        localStorage.setItem("token", accessToken);
        if (response.data.isadmin) {
          toast.success("Logged in successfully!");
          navigate("/dashboard");
        } else {
          toast.error("You have not access to Dashboard!");
        }
      } else {
        throw new Error("Token not received");
      }
    } catch (error) {
      notification.error({
        message: "Login Failed",
        description: "Invalid username or password.",
      });
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle failed login submission
  const onFinishFailed = (errorInfo) => {
    notification.error({
      message: "Login Failed",
      description: "Please check your username and password.",
    });
    console.log("Login Failed:", errorInfo);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ToastContainer position="top-center" autoClose={3000} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Form
              name="loginForm"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{
                width: 300,
                padding: "20px",
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Title level={3} style={{ textAlign: "center" }}>
                Login
              </Title>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please enter your username" },
                ]}
              >
                <Input placeholder="Enter your username" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
