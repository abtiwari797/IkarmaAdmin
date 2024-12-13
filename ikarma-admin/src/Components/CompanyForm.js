import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, Radio, notification } from "antd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { stackBaseUrl } from "../constant";
import { useLocation } from "react-router-dom";

const CompanyForm = () => {
  const location = useLocation();
  const { company } = location.state || {};  // Destructure the company data from the state
  console.log("company info", company);

  const [form] = Form.useForm();
  // const token = useSelector((state) => state.token);
  const token = localStorage.getItem("token");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [ikarmaPartner, setIkarmapartner] = useState(null); // State for the ikarma_partner radio

  // Fetch countries when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `${stackBaseUrl.Ikarmaphase1}/getcountries`
        );
        console.log("Countries data:", response.data.data);
        setCountries(response.data.data || []);
      } catch (error) {
        console.error("Error fetching countries:", error);
        notification.error({ message: "Error fetching countries" });
      }
    };

    fetchCountries();
  }, [token]);

  // Fetch states when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      const fetchStates = async () => {
        try {
          const response = await axios.get(
            `${stackBaseUrl.AdminGateway}/get/state?countryId=${selectedCountry}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("States data:", response.data.data);
          setStates(response.data.data || []);
        } catch (error) {
          console.error("Error fetching states:", error);
          notification.error({ message: "Error fetching states" });
        }
      };

      fetchStates();
    }
  }, [selectedCountry, token]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
            `${stackBaseUrl.AdminGateway}/get/city?stateId=${selectedState}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Cities data:", response.data.data);
          setCities(response.data.data || []);
        } catch (error) {
          console.error("Error fetching cities:", error);
          notification.error({ message: "Error fetching cities" });
        }
      };

      fetchCities();
    }
  }, [selectedState, token]);

  // Prepopulate the form with company data when available
  useEffect(() => {
    if (company) {
      // Set form fields with existing company data
      form.setFieldsValue({
        company_name: company.company_name,
        address1: company.address1,
        address2: company.address2,
        website_url: company.website_url,
        ikarma_partner: company.ikarma_partner, // Populate ikarma_partner if available in company data
      });

      // Set selected country, state, and city based on company data
      setSelectedCountry(company.countryid);
      setSelectedState(company.stateid);
      setSelectedCity(company.cityid);
      setIkarmapartner(company.ikarma_partner); // Set the ikarma_partner value
    }
  }, [company, form]);

  function isValidURL(url) {
    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);
  }

  const onFinish = async (values) => {
    try {
      const requestData = {
        ...values,
        country: Number(values.country),
        state: Number(values.state),
        city: Number(values.city),
      };

      if (!isValidURL(requestData.website_url)) {
        throw new Error('Invalid website URL');
      }

      const response = await axios.post(
        `${stackBaseUrl.AdminGateway}/nomination/addCompany`,
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
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select a country" }]}
        >
          <Select
            showSearch
            placeholder="Select Country"
            onChange={(value) => setSelectedCountry(Number(value))}
            value={selectedCountry}
            filterOption={(input, option) =>
              option?.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {countries.length > 0 ? (
              countries.map((country) => (
                <Select.Option key={country.id} value={country.id}>
                  {country.name}
                </Select.Option>
              ))
            ) : (
              <Select.Option disabled>No countries available</Select.Option>
            )}
          </Select>
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please select a state" }]}
        >
          <Select
            showSearch
            placeholder="Select State"
            onChange={(value) => setSelectedState(Number(value))}
            value={selectedState}
            disabled={!selectedCountry}
            filterOption={(input, option) =>
              option?.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {states.length > 0 ? (
              states.map((state) => (
                <Select.Option key={state.id} value={state.id}>
                  {state.name}
                </Select.Option>
              ))
            ) : (
              <Select.Option disabled>No states available</Select.Option>
            )}
          </Select>
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please select a city" }]}
        >
          <Select
            showSearch
            placeholder="Select City"
            onChange={(value) => setSelectedCity(Number(value))}
            value={selectedCity}
            disabled={!selectedState}
            filterOption={(input, option) =>
              option?.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {cities.length > 0 ? (
              cities.map((city) => (
                <Select.Option key={city.id} value={city.id}>
                  {city.name}
                </Select.Option>
              ))
            ) : (
              <Select.Option disabled>No cities available</Select.Option>
            )}
          </Select>
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
          label="Website URL"
          name="website_url"
          rules={[{ required: true, message: "Please enter website URL" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ikarma Partner"
          name="ikarma_partner"
          rules={[{ required: true, message: "Please select if you are an ikarma partner" }]}
        >
          <Radio.Group
            value={ikarmaPartner}
            onChange={(e) => setIkarmapartner(e.target.value)}
          >
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
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
