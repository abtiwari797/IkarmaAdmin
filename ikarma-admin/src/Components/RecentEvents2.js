import React from "react";
import { Col, Card, Tag, Button, Typography } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const RecentEvents2 = () => {


  const nominations = [
    {
      title: "Nomination 1",
      description: "Details for nomination 1",
      date: "Feb 12, 2023",
      time: "10:00 AM",
      price: "$20",
      currentAttendees: 50,
      maxAttendees: 100,
    },
    {
      title: "Nomination 2",
      description: "Details for nomination 2",
      date: "Mar 10, 2023",
      time: "2:00 PM",
      price: "$30",
      currentAttendees: 80,
      maxAttendees: 150,
    },
    {
      title: "Nomination 3",
      description: "Details for nomination 3",
      date: "Apr 5, 2023",
      time: "9:00 AM",
      price: "$15",
      currentAttendees: 60,
      maxAttendees: 120,
    },
    {
      title: "Nomination 4",
      description: "Details for nomination 4",
      date: "May 20, 2023",
      time: "11:00 AM",
      price: "$25",
      currentAttendees: 40,
      maxAttendees: 100,
    },
    {
      title: "Nomination 5",
      description: "Details for nomination 5",
      date: "Jun 15, 2023",
      time: "1:00 PM",
      price: "$10",
      currentAttendees: 30,
      maxAttendees: 80,
    },
  ];

  return (
    <>
      <div className="custom-content-area events">
        <Col className="custom-content-area row">
          {nominations.map((nomination, index) => (
            <Card
              className="card"
              style={{
                width: 300,
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt="Event Cover"
                    src="/images.jpg" // Replace with actual image URL
                    style={{
                      height: "150px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <Tag
                    color="orange"
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    Limited Seats
                  </Tag>
                  <Button
                    type="primary"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#FF8C42",
                      border: "none",
                    }}
                  >
                    Join
                  </Button>
                </div>
              }
              bodyStyle={{ padding: "16px" }}
            >
              <h3 style={{ marginBottom: "8px" }}>{nomination.title}</h3>
              <Text type="secondary">UPCOMING</Text>
              <div style={{ margin: "8px 0", fontSize: "12px" }}>
                <CalendarOutlined style={{ marginRight: "4px" }} />
                {nomination.date} &nbsp;&nbsp;
                <ClockCircleOutlined style={{ marginRight: "4px" }} />
                {nomination.time}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <DollarOutlined
                    style={{ color: "#FFD700", marginRight: "4px" }}
                  />
                  <Text>{nomination.price}</Text>
                </div>
                <Text>Public</Text>
                <Text>Paid</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "8px",
                  fontSize: "14px",
                }}
              >
                <TeamOutlined style={{ marginRight: "4px" }} />
                <Text>
                  {nomination.currentAttendees} / {nomination.maxAttendees}
                </Text>
              </div>
            </Card>
          ))}
        </Col>
      </div>
    </>
  );
};

export default RecentEvents2;
