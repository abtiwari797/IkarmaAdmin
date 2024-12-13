import React, { useState,useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Modal
} from "antd";
import axios from "axios";
import Statistics from "./Components/Statistics";
import RecentNominations from "./Components/RecentNominations";
import RecentEvents from "./Components/CompanyList";
import RecentEvents2 from "./Components/RecentEvents2";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [action, setAction] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const token = useSelector((state) => state.token);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // Columns to include company and HR information
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Nominated By",
      dataIndex: "nominatedby",
      key: "nominatedby",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => (status === 3 ? "Approved" : "Pending"),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      key: "created_date",
      align: "center",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "HR Approver",
      dataIndex: "hr_approver",
      key: "hr_approver",
      align: "center",
    },
    // {
    //   title: "Access",
    //   dataIndex: "access",
    //   key: "access",
    //   align: "center",
    //   render: (access) => (access ? "Granted" : "Denied"),
    // },
    // {
    //   title: "Image",
    //   dataIndex: "imgurl",
    //   key: "imgurl",
    //   align: "center",
    //   render: (url) => (
    //     <img
    //       src={url}
    //       alt="Nomination"
    //       style={{ width: "50px", height: "50px", objectFit: "cover" }}
    //     />
    //   ),
    // },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (text, record) => {
        const hasAccess = record.access; // Assuming `access` is a boolean
        const hasRequiredStatus = record.status >= 7;
    
        if (hasAccess && hasRequiredStatus) {
          return (
            <div>
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={() => showConfirmModal("approve", record.id)}
              >
                Accept
              </Button>
              <Button danger onClick={() => showConfirmModal("reject", record.id)}>
                Reject
              </Button>
            </div>
          );
        } else {
          return <span style={{ color: "gray" }}>No Actions Available</span>;
        }
      },
    },
    
  ];

  const fetchNominations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://umbznza169.execute-api.us-east-2.amazonaws.com/hr/home/list/company_id?pageSize=20&pageNumber=1",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLeaderboardData(response.data.data.nominationData || []);
      console.log(response.data.data.nominationData);
    } catch (error) {
      console.error("Error fetching nominations:", error);
      toast.error("Failed to fetch leaderboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNominations();
  }, []);

  const showConfirmModal = (actionType, key) => {
    if (!actionType || !key) {
      console.error("Invalid actionType or key");
      return;
    }
    setAction(actionType);
    setSelectedKey(key);
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const type = action === "approve" ? 1 : 2; 
      const url = `https://umbznza169.execute-api.us-east-2.amazonaws.com/hr/nomination/approve`;
      const nominationId = selectedKey; 

      const fullUrl = `${url}?nominationId=${nominationId}&type=${type}`;

      const response = await axios.get(fullUrl, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
        
      if (response.data.resCode === 1) {
        toast.success(`Entry ${type === 1 ? "approved" : "rejected"} successfully!`);
        fetchNominations();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      console.error(`Failed to ${action} entry:`, error);
      toast.error(`Failed to ${action} entry. Please try again.`);
    } finally {
      setIsModalVisible(false);
    }
  };
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <div style={{ background: "white" }}>
      <ToastContainer position="top-center" autoClose={3000} />
        <Statistics />
        <div className="details">
          <div className="details1">
            <Row gutter={16} className="rows">
              <RecentNominations />
              <RecentEvents />
            </Row>
            <Row gutter={16} style={{ marginTop: "20px" }}>
              <Col span={24}>
                <Card title="Nominations">
                  {/* Table wrapper with custom overflow styles */}
                  <div className="table-wrapper">
                    <Table
                      columns={columns}
                      dataSource={leaderboardData}
                      pagination={false}
                      scroll={{ x: 'max-content' }} // Enable horizontal scrolling
                      onRow={(record) => ({
                        onClick: () => navigate(`/nominationdetails/${record.id}`), // Navigate on row click
                      })}
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <RecentEvents2 />
        </div>
        <Modal
          title={`Confirm ${action === "approve" ? "Approval" : "Rejection"}`}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Yes"
          cancelText="No"
        >
          <p>Are you sure you want to {action === "approve" ? "approve" : "reject"} this entry?</p>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
