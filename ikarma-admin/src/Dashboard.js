import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Modal
} from "antd";
import Statistics from "./Components/Statistics";
import RecentNominations from "./Components/RecentNominations";
import RecentEvents from "./Components/RecentEvents";
import RecentEvents2 from "./Components/RecentEvents2";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [action, setAction] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  // Columns to include company and HR information
  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'company_name',
      key: 'company_name',
      align: 'center',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      align: 'center',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      align: 'center',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      align: 'center',
    },
    {
      title: 'Address Line 1',
      dataIndex: 'address1',
      key: 'address1',
      align: 'center',
    },
    {
      title: 'Address Line 2',
      dataIndex: 'address2',
      key: 'address2',
      align: 'center',
    },
    {
      title: 'HR Email',
      dataIndex: 'hr_email',
      key: 'hr_email',
      align: 'center',
    },
    {
      title: 'HR First Name',
      dataIndex: 'hr_first_name',
      key: 'hr_first_name',
      align: 'center',
    },
    {
      title: 'HR Last Name',
      dataIndex: 'hr_last_name',
      key: 'hr_last_name',
      align: 'center',
    },
    {
      title: 'Nomination ID',
      dataIndex: 'nomination_id',
      key: 'nomination_id',
      align: 'center',
    },
    {
      title: 'Website URL',
      dataIndex: 'website_url',
      key: 'website_url',
      align: 'center',
      render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'center',
      render: (text, record) => (
        <div>
         <Button type="primary" style={{ marginRight: 8 }} onClick={() => showConfirmModal("approve", record.key)}>
            Accept
          </Button>
          <Button danger onClick={() => showConfirmModal("reject", record.key)}>
            Reject
          </Button>
        </div>
      ),
    },
  ];
  const leaderboardData = [
    {
      key: '1',
      company_name: 'newCompany200',
      city: 'testCity',
      state: 'testState',
      country: 'test country',
      address1: '542',
      address2: 'aligajfdjs',
      hr_email: 'newCompanyHR200@gmail.com',
      hr_first_name: 'HR200',
      hr_last_name: 'Last Name',
      nomination_id: 42,
      website_url: 'https://www.qanvustech.com',
    },
    {
      key: '2',
      company_name: 'newCompany201',
      city: 'cityOne',
      state: 'stateOne',
      country: 'countryOne',
      address1: '1234',
      address2: 'streetName',
      hr_email: 'newCompanyHR201@gmail.com',
      hr_first_name: 'HR201',
      hr_last_name: 'LastName1',
      nomination_id: 43,
      website_url: 'https://www.example1.com',
    },
    {
      key: '3',
      company_name: 'newCompany202',
      city: 'cityTwo',
      state: 'stateTwo',
      country: 'countryTwo',
      address1: '5678',
      address2: 'laneStreet',
      hr_email: 'newCompanyHR202@gmail.com',
      hr_first_name: 'HR202',
      hr_last_name: 'LastName2',
      nomination_id: 44,
      website_url: 'https://www.example2.com',
    },
    {
      key: '4',
      company_name: 'newCompany203',
      city: 'cityThree',
      state: 'stateThree',
      country: 'countryThree',
      address1: '91011',
      address2: 'parkAve',
      hr_email: 'newCompanyHR203@gmail.com',
      hr_first_name: 'HR203',
      hr_last_name: 'LastName3',
      nomination_id: 45,
      website_url: 'https://www.example3.com',
    },
    {
      key: '5',
      company_name: 'newCompany204',
      city: 'cityFour',
      state: 'stateFour',
      country: 'countryFour',
      address1: '1213',
      address2: 'mainSt',
      hr_email: 'newCompanyHR204@gmail.com',
      hr_first_name: 'HR204',
      hr_last_name: 'LastName4',
      nomination_id: 46,
      website_url: 'https://www.example4.com',
    },
    {
      key: '6',
      company_name: 'newCompany205',
      city: 'cityFive',
      state: 'stateFive',
      country: 'countryFive',
      address1: '1415',
      address2: 'sunsetBlvd',
      hr_email: 'newCompanyHR205@gmail.com',
      hr_first_name: 'HR205',
      hr_last_name: 'LastName5',
      nomination_id: 47,
      website_url: 'https://www.example5.com',
    },
    {
      key: '7',
      company_name: 'newCompany206',
      city: 'citySix',
      state: 'stateSix',
      country: 'countrySix',
      address1: '1617',
      address2: 'riverSt',
      hr_email: 'newCompanyHR206@gmail.com',
      hr_first_name: 'HR206',
      hr_last_name: 'LastName6',
      nomination_id: 48,
      website_url: 'https://www.example6.com',
    },
    {
      key: '8',
      company_name: 'newCompany207',
      city: 'citySeven',
      state: 'stateSeven',
      country: 'countrySeven',
      address1: '1819',
      address2: 'oakSt',
      hr_email: 'newCompanyHR207@gmail.com',
      hr_first_name: 'HR207',
      hr_last_name: 'LastName7',
      nomination_id: 49,
      website_url: 'https://www.example7.com',
    },
    {
      key: '9',
      company_name: 'newCompany208',
      city: 'cityEight',
      state: 'stateEight',
      country: 'countryEight',
      address1: '2021',
      address2: 'elmSt',
      hr_email: 'newCompanyHR208@gmail.com',
      hr_first_name: 'HR208',
      hr_last_name: 'LastName8',
      nomination_id: 50,
      website_url: 'https://www.example8.com',
    },
    {
      key: '10',
      company_name: 'newCompany209',
      city: 'cityNine',
      state: 'stateNine',
      country: 'countryNine',
      address1: '2223',
      address2: 'pineSt',
      hr_email: 'newCompanyHR209@gmail.com',
      hr_first_name: 'HR209',
      hr_last_name: 'LastName9',
      nomination_id: 51,
      website_url: 'https://www.example9.com',
    }
  ];
  

  const showConfirmModal = (actionType, key) => {
    setAction(actionType);
    setSelectedKey(key);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (action === "approve") {
      toast.success("Entry approved successfully!");
      console.log("Approved entry with key:", selectedKey);
    } else if (action === "reject") {
      toast.error("Entry rejected!");
      console.log("Rejected entry with key:", selectedKey);
    }
    setIsModalVisible(false);
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
                <Card title="Company Information">
                  {/* Table wrapper with custom overflow styles */}
                  <div className="table-wrapper">
                    <Table
                      columns={columns}
                      dataSource={leaderboardData}
                      pagination={false}
                      scroll={{ x: 'max-content' }} // Enable horizontal scrolling
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
          visible={isModalVisible}
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
