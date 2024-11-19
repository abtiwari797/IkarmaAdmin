import React from "react";
import { Layout, Input, Menu, Avatar, Typography, Space, Row, Col } from "antd";
import {
  SearchOutlined,
  DashboardOutlined,
  GiftOutlined,
  CalendarOutlined,
  WalletOutlined,
  MessageOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import login from "../api/login";
import { useDispatch } from "react-redux";
import { setToken } from "../ReduxStore/action";
const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const dispatch = useDispatch();

  const handleIKarmaClick = async () => {
    try {
      const response = await login({
        email: "Hk",
        password: "Hk",
      });
      const accessToken = response?.data?.token.AccessToken;
      if (accessToken) {
        dispatch(setToken(accessToken));
      } else {
        throw new Error("Token not received");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "fixed",
        width: "100%",
        zIndex: 1,
        height: "64px",
      }}
    >
      {/* Left side - Logo and Title */}
      <Row align="middle">
        <Avatar
          style={{
            backgroundColor: "#ff8c00",
            color: "#fff",
            fontSize: "16px",
          }}
        >
          K
        </Avatar>
        <Text
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
          onClick={handleIKarmaClick}
        >
          iKarma
        </Text>
        <Text
          style={{
            fontSize: "16px",
            marginLeft: "20px",
          }}
        >
          Dashboard
        </Text>
      </Row>

      {/* Middle - Search Input */}

      {/* Right side - Icons and User Info */}
      <Space size="large">
        <Input
          placeholder="Search here..."
          suffix={<SearchOutlined />}
          style={{
            width: "300px",
            borderRadius: "20px",
            backgroundColor: "#f5f5f5",
          }}
        />
        <MessageOutlined style={{ fontSize: "20px", color: "#000" }} />
        <Row align="middle">
          <Col style={{ marginLeft: "8px" }}>
            <Text style={{ fontWeight: "bold" }}>Anita William's</Text>
          </Col>
          <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" />
        </Row>
      </Space>
    </Header>
  );
};

export default Navbar;
