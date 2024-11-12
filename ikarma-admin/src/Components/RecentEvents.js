import React, { useState } from "react";
import { Card, Col, Button ,Modal} from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";  // Import Toastify
import "react-toastify/dist/ReactToastify.css"; 

const nominations = [
    {
      title: "Nomination 1",
      description: "Details for nomination 1",
      nominator: "Alice",
      date: "2024-11-01",
    },
    {
      title: "Nomination 2",
      description: "Details for nomination 2",
      nominator: "Bob",
      date: "2024-11-05",
    },
    {
      title: "Nomination 3",
      description: "Details for nomination 3",
      nominator: "Charlie",
      date: "2024-11-10",
    },
    {
      title: "Nomination 4",
      description: "Details for nomination 4",
      nominator: "Diana",
      date: "2024-11-15",
    },
    {
      title: "Nomination 5",
      description: "Details for nomination 5",
      nominator: "Ethan",
      date: "2024-11-20",
    },
  ];
  

const RecentEvents = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [actionType, setActionType] = useState("");

  // Show confirmation modal
  const showConfirmModal = (nomination, action) => {
    setSelectedNomination(nomination);
    setActionType(action);
    setIsModalVisible(true);
  };

  // Handle confirmation
  const handleConfirm = () => {
    if (actionType === "accept") {
      toast.success(`${selectedNomination.title} accepted!`);
    } else if (actionType === "decline") {
      toast.error(`${selectedNomination.title} declined!`);
    }
    setIsModalVisible(false);
    setSelectedNomination(null);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedNomination(null);
  };


  return (
    <>
      <p className="heading">Recent Events</p>
      <Col className="custom-content-area col">
        {nominations.map((nomination, index) => (
          <Card
            style={{
              minWidth: 250,
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              padding: "16px",
            }}
            cover={
              <img
                alt="Nomination Image"
                src="/images.jpg" // Replace with actual image URL
                style={{
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            }
            bodyStyle={{ padding: "16px" }}
          >
            <h3 style={{ marginBottom: "8px", fontSize: "16px" }}>
              {nomination.title}
            </h3>
            <p style={{ color: "#555", marginBottom: "8px" }}>
              Nominated by {nomination.nominator}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: "#999",
              }}
            >
              <CalendarOutlined style={{ marginRight: "4px" }} />
              {nomination.date}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "16px",
              }}
            >
              <Button
                type="text"
                danger
                style={{
                  border: "1px solid #ff4d4f",
                  color: "#ff4d4f",
                }}
                onClick={() => showConfirmModal(nomination, "decline")}
              >
                Decline
              </Button>
              <Button
                type="text"
                style={{
                  border: "1px solid #52c41a",
                  color: "#52c41a",
                }}
                onClick={() => showConfirmModal(nomination, "accept")}
              >
                Accept
              </Button>
            </div>
          </Card>
        ))}
      </Col>

      <Modal
        title="Confirmation"
        visible={isModalVisible}
        onOk={handleConfirm}
        onCancel={handleCancel}
        okText={actionType === "accept" ? "Accept" : "Decline"}
        cancelText="Cancel"
      >
        <p>Are you sure you want to {actionType} this nomination?</p>
      </Modal>

      <ToastContainer position="top-center" autoClose={3000}/>
    </>
  );
};

export default RecentEvents;
