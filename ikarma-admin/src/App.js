import React from "react";
import {
  Layout,
  Input,
  Menu,
  Avatar,
  Card,
  Progress,
  Table,
  Row,
  Col,
  Button,
  Typography,
} from "antd";
import {
  UserOutlined,
  SearchOutlined,
  DashboardOutlined,
  GiftOutlined,
  CalendarOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Dashboard from "./Dashboard";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}   className="custom-content-area">
      {/* Sidebar */}
      <Sider width={200} style={{ background: "#fff"}}>
        <div
          className="logo"
          style={{ padding: "16px", fontSize: "20px", fontWeight: "bold" }}
        >
          <div
            className="Klogo"
          >
            K
          </div>
          iKarma
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            height: "100%",
            borderRight:"1px solid grey",
            borderTop:"1px solid grey",
          }}
        >
          <Menu.Item
            key="1"
            icon={<DashboardOutlined />}
            className="custom-menu-item"
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<GiftOutlined />}
            className="custom-menu-item"
          >
            Nominations
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<CalendarOutlined />}
            className="custom-menu-item"
          >
            Events
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<CalendarOutlined />}
            className="custom-menu-item"
          >
            Leaderboard
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<WalletOutlined />}
            className="custom-menu-item"
          >
            Wallet
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout style={{background:"white"}}>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "20px", fontSize: "20px" }}>Dashboard</div>
          <div style={{ flexGrow: 1, marginLeft: "20px", marginRight: "20px" }}>
            <Input
              placeholder="Search here..."
              className="search-input"
              style={{ width: "50%" }}
              suffix={<SearchOutlined />}
            />
          </div>
          <div style={{ marginRight: "20px" }}>
            <Avatar icon={<UserOutlined />} />
            <Text style={{ marginLeft: "8px" }}>Anita Williams</Text>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0"}}>
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
