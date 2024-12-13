import React, { useState, useEffect } from "react";
import { Card, Col, Button, Modal, Spin } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nominationFallback } from "../lib/nominationFallback";
import axios from "axios";
import { useSelector } from "react-redux";
import { stackBaseUrl } from "../constant/index";
import { useNavigate } from "react-router-dom";

const RecentEvents = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNomination, setSelectedNomination] = useState(null);
  const [actionType, setActionType] = useState("");
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(true);

    // const token = useSelector((state) => state.token);
    const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchNominations = async () => {
      try {
        const response = await axios.get(
          stackBaseUrl.AdminGateway + "/get/getAllCompanies",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNominations(response.data.data || []);
      } catch (error) {
        console.error("Error fetching nominations:", error);
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

  // Filter nominations with status >= 0 (or use all if there's no filtering logic)
  const filteredNominations = nominations;

  const handleCardClick = (nomination) => {
    navigate("/editcompany", { state: { company: nomination } });
  };

  const addHrView = (nomination) => {
    navigate("/addhr", { state: { company: nomination } });
  };

  return (
    <>
      <p className="heading">Company list</p>
      <Col className="custom-content-area col">
        {filteredNominations.map((nomination) => (
           <Card
           key={nomination.id}
           style={{
             borderRadius: "10px",
             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
             overflow: "hidden",
             display: "flex",
             flexDirection: "column",
             minWidth: "300px",
           }}
           cover={
             <img
               alt="Nomination"
               src={nomination.logo_url}
               style={{
                 height: "150px",
                 objectFit: "cover",
                 borderRadius: "10px 10px 0 0", // Rounded corners only on the top
               }}
             />
           }
           bodyStyle={{
             padding: "16px",
             display: "flex",
             flexDirection: "column",
             flex: "1",
           }}
           onClick={() => handleCardClick(nomination)}
         >
           <h3
             style={{
               marginBottom: "8px",
               fontSize: "18px",
               fontWeight: "bold",
               textAlign: "center",
             }}
           >
             {nomination.company_name}
           </h3>
           <p
             style={{
               color: "#555",
               marginBottom: "8px",
               textAlign: "center",
               fontSize: "14px",
             }}
           >
             {nomination.alias}
           </p>
           <div
             style={{
               fontSize: "14px",
               color: "#999",
               textAlign: "center",
               marginBottom: "16px",
             }}
           >
             Sector: {nomination.industry}
           </div>
           <div
             style={{
               display: "flex",
               justifyContent: "center",
               marginTop: "auto",
             }}
           >
             <Button
               type="text"
               style={{
                 border: "1px solid #52c41a",
                 color: "#52c41a",
                 borderRadius: "5px",
               }}
               onClick={(e) => {
                 e.stopPropagation(); // Prevent card click navigation
                 addHrView(nomination);
               }}
             >
               Add HR
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
