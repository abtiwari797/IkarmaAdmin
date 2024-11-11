import React from "react";
import { Card, Avatar, Tag,Col} from "antd";
import { UserOutlined } from "@ant-design/icons";

const nominations = [
    {
      title: "Nomination 1",
      description: "Details for nomination 1",
      nominatedBy: "Esther Howard",
      nominatedFor: "Incident Helping Hands",
      date: "Feb 12, 2023",
      status: "In Review",
    },
    {
      title: "Nomination 2",
      description: "Details for nomination 2",
      nominatedBy: "John Doe",
      nominatedFor: "Community Service",
      date: "Mar 10, 2023",
      status: "Approved",
    },
    {
      title: "Nomination 3",
      description: "Details for nomination 3",
      nominatedBy: "Jane Smith",
      nominatedFor: "Outstanding Performance",
      date: "Apr 5, 2023",
      status: "In Review",
    },
    {
      title: "Nomination 4",
      description: "Details for nomination 4",
      nominatedBy: "Michael Brown",
      nominatedFor: "Exemplary Leadership",
      date: "May 20, 2023",
      status: "Pending",
    },
    {
      title: "Nomination 5",
      description: "Details for nomination 5",
      nominatedBy: "Sarah Johnson",
      nominatedFor: "Team Spirit",
      date: "Jun 15, 2023",
      status: "Rejected",
    },
  ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case "In Review":
        return "gold";
      case "Approved":
        return "green";
      case "Pending":
        return "blue";
      case "Rejected":
        return "red";
      default:
        return "gray";
    }
  };


const RecentNominations = () => (
  <>
    <p className="heading">Recent Nominations</p>
    <Col className="custom-content-area col">
      {nominations.map((nomination, index) => (
        <Card
          style={{
            minWidth: 300,
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          bodyStyle={{ padding: "16px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              size={48}
              icon={<UserOutlined />}
              src="/user.jpg" // Replace with actual image URL
              style={{ marginRight: "16px" }}
            />
            <div>
              <h3 style={{ margin: 0, fontSize: "16px" }}>Guy Hawkins</h3>
              <div style={{ fontSize: "14px", color: "#555" }}>
                By: Esther Howard
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                For: Incident Helping Hands
              </div>
              <div style={{ fontSize: "12px", color: "#999" }}>
                Feb 12, 2023
              </div>
            </div>
          </div>
           <Tag
            color={getStatusColor(nomination.status)}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              fontSize: "12px",
              borderRadius: "8px",
            }}
          >
            {nomination.status}
          </Tag>
        </Card>
      ))}
    </Col>
  </>
);

export default RecentNominations;
