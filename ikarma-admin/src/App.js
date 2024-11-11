import React from "react";
import { Layout, Input, Menu, Avatar, Typography, Space, Row, Col } from "antd";
import {
  SearchOutlined,
  DashboardOutlined,
  GiftOutlined,
  CalendarOutlined,
  WalletOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Dashboard from "./Dashboard";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
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
        <Input
          placeholder="Search here..."
          prefix={<SearchOutlined />}
          style={{
            width: "300px",
            borderRadius: "20px",
            backgroundColor: "#f5f5f5",
          }}
        />

        {/* Right side - Icons and User Info */}
        <Space size="large">
          <MessageOutlined style={{ fontSize: "20px", color: "#000" }} />
          <Row align="middle">
            <Col style={{ marginLeft: "8px" }}>
              <Text style={{ fontWeight: "bold" }}>Anita William's</Text>
            </Col>
            <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" />
          </Row>
        </Space>
      </Header>

      <Layout style={{ minHeight: "100vh" }}>
        {" "}
        {/* Full height layout */}
        {/* Sidebar */}
        <Sider
          width={200}
          style={{
            background: "#fff",
            borderRight: "1px solid #f0f0f0",
            position: "fixed", // Keeps the sidebar fixed
            height: "100vh", // Full height for the sidebar
            top: "64px", // Offset from the top for the fixed header
          }}
        >
          <div style={{height:"2vh"}}>
            
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              height: "100%", // Ensures the menu takes full height
              borderRight: 0,
            }}
          >
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<GiftOutlined />}>
              Nominations
            </Menu.Item>
            <Menu.Item key="3" icon={<CalendarOutlined />}>
              Events
            </Menu.Item>
            <Menu.Item key="4" icon={<CalendarOutlined />}>
              Leaderboard
            </Menu.Item>
            <Menu.Item key="5" icon={<WalletOutlined />}>
              Wallet
            </Menu.Item>
          </Menu>
        </Sider>
        {/* Main Content */}
        <Layout style={{ marginLeft: 200 }}>
          {" "}
          {/* Offset content to the right of the sidebar */}
          <Content
            style={{
              padding: "24px",
              margin: 0,
              minHeight: 280,
              background: "#fff",
              overflowY: "auto", // Make the content scrollable
              marginTop: "64px", // Offset the header height
            }}
          >
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
