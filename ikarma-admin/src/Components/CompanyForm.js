import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, notification } from "antd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { stackBaseUrl } from "../constant";

const CompanyForm = () => {
  const [form] = Form.useForm();
  const token = useSelector((state) => state.token);

  // States to hold dropdown options
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // States to hold the selected values
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  // Fetch countries when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `${stackBaseUrl.Ikarmaphase1}/getcountries`, // API to fetch countries
        );
        console.log(" get countries ",response)
        setCountries(response.data.data || []); // Update countries list
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
            `${stackBaseUrl.AdminGateway}/get/state?countryId=${selectedCountry}`, // API to fetch states
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setStates(response.data.data || []); // Update states list
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
            `${stackBaseUrl.AdminGateway}/get/city?stateId=${selectedState}`, // API to fetch cities
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCities(response.data.data || []); // Update cities list
        } catch (error) {
          console.error("Error fetching cities:", error);
          notification.error({ message: "Error fetching cities" });
        }
      };

      fetchCities();
    }
  }, [selectedState, token]);


  function isValidURL(url) {
    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);
  }
  // Form submission handler
  const onFinish = async (values) => {
    try {


      const requestData = {
        ...values,
        country: Number(values.country),
        state: Number(values.state),
        city: Number(values.city),
      }

      if(!isValidURL(requestData.website_url))
      {
       throw new Error('invalid website URL')
      }


      console.log("on finished ",requestData)
      
      const response = await axios.post(
        stackBaseUrl.AdminGateway+"/nomination/addCompany",
        requestData,
        {
          headers: {
            authorization: `Bearer ${token}`,
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
            showSearch // Enable search functionality
            placeholder="Select Country"
            onChange={(value) => setSelectedCountry(Number(value))}
            value={selectedCountry}
            filterOption={(input, option) =>
              option?.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {countries.map((country) => (
              <Select.Option key={country.id} value={country.id}>
                {country.name}
              </Select.Option>
            ))}
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
            disabled={!selectedCountry} // Disable if no country is selected
            filterOption={(input, option) =>
              option?.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {states.map((state) => (
              <Select.Option key={state.id} value={state.id}>
                {state.name}
              </Select.Option>
            ))}
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
            value={selectedState ? undefined : undefined} // Disable if no state is selected
            disabled={!selectedState}
            filterOption={(input, option) =>
              option?.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {cities.map((city) => (
              <Select.Option key={city.id} value={city.id}>
                {city.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Address 1"
          name="address1"
          rules={[{ required: true, message: "Please enter address line 1" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
        label="Address 2" 
        name="address2" 
        rules={[{ required: true, message: "Please enter address line 2" }]}>
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
          label="Website url"
          name="website_url"
          rules={[{ required: true, message: "Please enter website_url" }]}
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
