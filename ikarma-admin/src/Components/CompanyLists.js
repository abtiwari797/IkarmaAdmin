import React, { useState, useEffect } from "react";
import { Card, Col, Button, Modal, Spin, Table } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nominationFallback } from "../lib/nominationFallback";
import axios from "axios";
import { useSelector } from "react-redux";
import { stackBaseUrl } from "../constant/index";
import { useNavigate } from "react-router-dom";

const CompnayList = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    // const token = useSelector((state) => state.token);
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const columns = [
      {
        title: "Company Name",
        dataIndex: "company_name",
        key: "company_name",
        align: "center",
      },
      {
        title: "Alias",
        dataIndex: "alias",
        key: "alias",
        align: "center",
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        align: "center",
        render: (phone) => phone, // Trimming any extra spaces
      },
      {
        title: "Industry",
        dataIndex: "industry",
        key: "industry",
        align: "center",
      },
      {
        title: "Website",
        dataIndex: "website_url",
        key: "website_url",
        align: "center",
      },
      {
        title: "City",
        dataIndex: "cityname",
        key: "cityname",
        align: "center",
      },
      {
        title: "State",
        dataIndex: "statename",
        key: "statename",
        align: "center",
      },
      {
        title: "Country",
        dataIndex: "countryname",
        key: "countryname",
        align: "center",
      },
      {
        title: "Actions",
        key: "actions",
        align: "center",
        render: (text, record) => {
          return (
            <div>
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click navigation
                  addHrView(record);
                }}
              >
                Add HR
              </Button>
            </div>
          );
        },
      },
    ];
  
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
          setLeaderboardData(response.data.data || []);
        } catch (error) {
          console.error("Error fetching nominations:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNominations();
    }, []);
  
      const addHrView = (record) => {
      navigate("/addhr", { state: { company: record } });
    };
  
    const handleAddCompany = () => {
        navigate("/addcompany");
      };


    return (
      <div>
        <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
        <Button type="primary" onClick={handleAddCompany}>
          Add Company
        </Button>
      </div>
        <div className="table-wrapper">
          <Table
            columns={columns}
            dataSource={leaderboardData}
            pagination={false}
            scroll={{ x: "max-content" }} // Enable horizontal scrolling
            onRow={(record) => ({
              onClick: () =>
                navigate(`/editcompany/`, { state: { company: record } }), // Navigate on row click
            })}
          />
        </div>
      </div>
    );
  };
  
  export default CompnayList;