import React, { useState, useEffect } from "react";
import { Card, Col, Button, Modal, Spin } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nominationFallback } from "../lib/nominationFallback";
import axios from "axios";

const RecentEvents = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [actionType, setActionType] = useState("");
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNominations = async () => {
      try {
        const response = await axios.get(
          "https://umbznza169.execute-api.us-east-2.amazonaws.com/hr/home/list/company_id?pageSize=1&pageNumber=1",
          {
            headers: {
              Authorization: `Bearer ${process.env.TOKEN}`,
            },
          }
        );
        setNominations(response.data.data.eventData || []);
      } catch (error) {
        console.error("Error fetching nominations:", error);
        setNominations(nominationFallback.data.eventData || []);
      } finally {
        setLoading(false);
      }
    };

    fetchNominations();
  }, []);

  const showConfirmModal = (nomination, action) => {
    setSelectedNomination(nomination);
    setActionType(action);
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    if (actionType === "accept") {
      toast.success(`${selectedNomination.name} accepted!`);
    } else if (actionType === "decline") {
      toast.error(`${selectedNomination.name} declined!`);
    }
    setIsModalVisible(false);
    setSelectedNomination(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedNomination(null);
  };

  if (loading) {
    return <Spin size="large" />;
  }

    // Filter nominations with status === 7
    const filteredNominations = nominations.filter((nomination) => nomination.status >= 7);


  return (
    <>
      <p className="heading">Recent Events</p>
      <Col className="custom-content-area col">
        {filteredNominations.map((nomination) => (
          <Card
            key={nomination.id}
            style={{
              minWidth: 250,
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              padding: "16px",
            }}
            cover={
              <img
                alt="Nomination"
                src={nomination.imgurl}
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
              {nomination.name}
            </h3>
            <p style={{ color: "#555", marginBottom: "8px" }}>
              Nominated by {nomination.nominatedby}
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
              {new Date(nomination.created_date).toLocaleDateString()}

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
                disabled={!nomination.access}
                style={{
                  border:"1px solid #ff4d4f",
                  color: "#ff4d4f"
                }}
                onClick={() => showConfirmModal(nomination, "decline")}
              >
                Decline
              </Button>
              <Button
                type="text"
                disabled={!nomination.access}
                style={{
                  border:"1px solid #52c41a",
                  color:"#52c41a"
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

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default RecentEvents;
