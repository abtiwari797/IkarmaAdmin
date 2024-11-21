import React from 'react';
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  GiftOutlined,
  CalendarOutlined,
  WalletOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Map routes to menu item keys
  const getMenuKeyFromPath = (path) => {
    switch (path) {
      case "/dashboard":
        return "1";  // Dashboard
      case "/nominationdetails":
        return "2";  // Nominations
      case "/":
        return "3";  // Events
      case "/":
        return "4";  // Leaderboard
      case "/":
        return "5";  // Wallet
      case "/companylist":
        return "6";  // Add Company
      default:
        return "1"; // Default to Dashboard if path doesn't match
    }
  };

  return (
    <Sider
      width={200}
      style={{
        background: "#fff",
        borderRight: "1px solid #f0f0f0",
        position: "fixed",
        height: "100vh",
        top: "64px",
      }}
    >
      <div style={{ height: "2vh" }}></div>
      <Menu
        mode="inline"
        selectedKeys={[getMenuKeyFromPath(location.pathname)]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        onClick={(e) => {
          // Define path based on key
          let path;
          switch (e.key) {
            case "1":
              path = "/dashboard";
              break;
            case "2":
              path = "/nominationdetails";
              break;
            case "3":
              path = "/";
              break;
            case "4":
              path = "/";
              break;
            case "5":
              path = "/";
              break;
            case "6":
              path = "/companylist";
              break;
            default:
              path = "/";
          }
          navigate(path);
        }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        {/* <Menu.Item key="2" icon={<GiftOutlined />}>
          Nominations
        </Menu.Item> */}
        <Menu.Item key="3" icon={<CalendarOutlined />}>
          Events
        </Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined />}>
          Leaderboard
        </Menu.Item>
        <Menu.Item key="5" icon={<WalletOutlined />}>
          Wallet
        </Menu.Item>
        <Menu.Item key="6" icon={<BuildOutlined />}>
        Company List
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
