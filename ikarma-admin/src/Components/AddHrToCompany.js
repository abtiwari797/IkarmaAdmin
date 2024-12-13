import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification, Card, Table, Spin } from "antd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { stackBaseUrl } from "../constant";
import { useLocation } from "react-router-dom";

const CompanyForm = () => {
  const location = useLocation();
  const { company } = location.state || {};  // Destructure the company data from the state

  console.log("Company info", company);

  const [hrDetails, setHrDetails] = useState([]); // State to store HR details
  const [form] = Form.useForm();
  // const token = useSelector((state) => state.token);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  // Handle form submission
  const onFinish = async (values) => {
    try {
      const requestData = {
        ...values,
        company_id: company.id,  // Use the company ID directly from the passed object
      };

      console.log(" add HR data ",requestData)
      const response = await axios.post(
        `${stackBaseUrl.AdminGateway}/company/add/hr`,
        requestData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Company information submitted successfully!");
        form.resetFields();
        
        // Add the entered HR details to the hrDetails state
        setHrDetails((prev) => [
          ...prev,
          {
            company_id: company.id,  // Company ID is directly linked
            email: values.email,
            first_name: values.first_name,
            last_name: values.last_name,
          },
        ]);
      } else {
        toast.error("Failed to submit the company information.");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error(`An error occurred while submitting the form. ${error}`);
    }
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({
      message: "Submission Failed",
      description: "Please check the fields and try again.",
    });
    console.log("Failed:", errorInfo);
  };

  // Fetch HR list data
  useEffect(() => {
    const fetchHrList = async () => {
      try {
        const response = await axios.get(
          stackBaseUrl.AdminGateway + `/hr/getlist/company_id?id=${company.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("HR list fetched", response.data.data);

        // Update the HR details state with the response data
        setHrDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching HR list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHrList();
  }, [company.id, token]);

  // Define the columns for the HR details table
  const columns = [
    // {
    //   title: "Company ID",
    //   dataIndex: "company_id",
    //   key: "company_id",
    // },
    {
      title: "HR Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "HR First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "HR Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
  ];

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Card
        title="Company Information"
        bordered={false}
        style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}
      >
        <Form
          form={form}
          name="companyForm"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Company Name (Non-editable) */}
          <Form.Item
            label="Company Name"
            name="company_name"
            initialValue={company?.company_name}
            rules={[{ required: true, message: "Company name is required" }]}
          >
            <Input disabled />
          </Form.Item>

          {/* Company ID (Hidden, but submitted) */}
          <Form.Item name="company_id" initialValue={company?.id} hidden>
            <Input />
          </Form.Item>

          <Form.Item
            label="HR Email"
            name="email"
            rules={[
              { required: true, message: "Please enter the HR email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="HR First Name"
            name="first_name"
            rules={[{ required: true, message: "Please enter the HR first name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="HR Last Name"
            name="last_name"
            rules={[{ required: true, message: "Please enter the HR last name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Table to display the submitted HR details */}
      <Card
        title="Submitted HR Details"
        bordered={false}
        style={{ maxWidth: 800, margin: "20px auto", padding: "20px" }}
      >
        <Table
          columns={columns}
          dataSource={hrDetails}
          rowKey="id" // Assuming each HR entry has a unique `id`
          pagination={false}
        />
      </Card>
    </>
  );
};

export default CompanyForm;
