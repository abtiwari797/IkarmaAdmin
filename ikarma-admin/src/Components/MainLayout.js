import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout style={{ marginLeft: 200 }}>
          <Content
            style={{
              padding: "24px",
              margin: 0,
              minHeight: 280,
              background: "#fff",
              overflowY: "auto",
              marginTop: "64px", 
            }}
          >
            {children}  {/* This will render the child components (Home, NominationDetails, etc.) */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
