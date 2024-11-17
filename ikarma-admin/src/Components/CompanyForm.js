import React from "react";
import { Form, Input, Button, notification } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CompanyForm = () => {
  const [form] = Form.useForm();

  
  // Form submission handler
  const onFinish = async (values) => {
    try {
      // Call the API
      const response = await axios.post(
        "https://umbznza169.execute-api.us-east-2.amazonaws.com/nomination/addCompany",
        values,
        {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`, // Replace with your actual token
          },
        }
      );

      if (response.status === 200) {
        toast.success("Company information submitted successfully!");
        form.resetFields(); // Clear the form
      } else {
        toast.error("Failed to submit the company information.");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  // Error handling
  const onFinishFailed = (errorInfo) => {
    notification.error({
      message: "Submission Failed",
      description: "Please check the fields and try again.",
    });
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Form
        form={form}
        name="companyForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}
      >
        <Form.Item
          label="Company Name"
          name="company_name"
          rules={[{ required: true, message: "Please enter the company name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please enter the city" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please enter the state" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please enter the country" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address 1"
          name="address1"
          rules={[{ required: true, message: "Please enter address line 1" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Address 2" name="address2">
          <Input />
        </Form.Item>

        <Form.Item
          label="HR Email"
          name="hr_email"
          rules={[
            { required: true, message: "Please enter the HR email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="HR First Name"
          name="hr_first_name"
          rules={[{ required: true, message: "Please enter HR's first name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="HR Last Name"
          name="hr_last_name"
          rules={[{ required: true, message: "Please enter HR's last name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nomination ID"
          name="nomination_id"
          rules={[
            { required: true, message: "Please enter the nomination ID" },
            { type: "text", message: "Nomination ID must be a number" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Website URL"
          name="website_url"
          rules={[
            { required: true, message: "Please enter the website URL" },
            {
              type: "url",
              message: "Please enter a valid URL",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CompanyForm;
