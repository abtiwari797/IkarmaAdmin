import React from "react";
import { Row, Col, Card, Progress, Table, Tag, Button } from "antd";
import NominationDetail from "./NominationDetail";
import { Bar } from "@ant-design/plots";

const Dashboard = () => {
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>
          <Button 
            type="primary" 
            style={{ marginRight: "8px" }} 
            onClick={() => handleApprove(record.key)}>
            Approve
          </Button>
          <Button 
            type="danger" 
            onClick={() => handleReject(record.key)}>
            Reject
          </Button>
        </div>
      ),
    },
  ];
  const leaderboardData = [
    {
      key: "1",
      rank: "01",
      name: "Cody Fisher",
      participation: "Event",
      awarded: 250,
      badges: 265,
      points: 17000,
    },
    {
      key: "2",
      rank: "02",
      name: "Floyd Miles",
      participation: "Incident",
      awarded: 250,
      badges: 210,
      points: 16800,
    },
    {
      key: "3",
      rank: "03",
      name: "Eleanor Pena",
      participation: "Event",
      awarded: 250,
      badges: 190,
      points: 16500,
    },
    {
      key: "4",
      rank: "04",
      name: "Bessie Cooper",
      participation: "Incident",
      awarded: 250,
      badges: 185,
      points: 16300,
    },
    {
      key: "5",
      rank: "05",
      name: "Esther Howard",
      participation: "Event",
      awarded: 250,
      badges: 170,
      points: 16000,
    },
    {
      key: "6",
      rank: "06",
      name: "Robert Fox",
      participation: "Incident",
      awarded: 250,
      badges: 165,
      points: 15800,
    },
    {
      key: "7",
      rank: "07",
      name: "Arlene McCoy",
      participation: "Event",
      awarded: 250,
      badges: 160,
      points: 15500,
    },
    {
      key: "8",
      rank: "08",
      name: "Devon Lane",
      participation: "Incident",
      awarded: 250,
      badges: 155,
      points: 15300,
    },
    {
      key: "9",
      rank: "09",
      name: "Courtney Henry",
      participation: "Event",
      awarded: 250,
      badges: 150,
      points: 15000,
    },
    {
      key: "10",
      rank: "10",
      name: "Albert Flores",
      participation: "Incident",
      awarded: 250,
      badges: 145,
      points: 14800,
    },
  ];

  const nominationData = [
    { month: "Jan", nominations: 8000 },
    { month: "Feb", nominations: 9000 },
    { month: "Mar", nominations: 8500 },
    { month: "Apr", nominations: 9500 },
    { month: "May", nominations: 10000 },
  ];

  const awardedData = [
    { month: "Jan", awards: 7000 },
    { month: "Feb", awards: 7500 },
    { month: "Mar", awards: 8000 },
    { month: "Apr", awards: 8700 },
    { month: "May", awards: 9200 },
  ];

  const nominationConfig = {
    data: nominationData,
    xField: "month", // Months will be on the X-axis
    yField: "nominations", // Nominations will be on the Y-axis (values will grow vertically)
    color: "#ff7f0e",
    label: {
      position: "top", // Label will be placed at the top of the bars
      style: { fill: "#ffffff", opacity: 0.6 },
    },
  };

  const awardedConfig = {
    data: awardedData,
    xField: "month", // Months will be on the X-axis
    yField: "awards", // Awards will be on the Y-axis (values will grow vertically)
    color: "#2ca02c",
    label: {
      position: "top", // Label will be placed at the top of the bars
      style: { fill: "#ffffff", opacity: 0.6 },
    },
  };

  const nominations = [
    { title: "Nomination 1", description: "Details for nomination 1" },
    { title: "Nomination 2", description: "Details for nomination 2" },
    { title: "Nomination 3", description: "Details for nomination 3" },
    { title: "Nomination 4", description: "Details for nomination 4" },
    { title: "Nomination 5", description: "Details for nomination 5" },
  ];

  // Approve button handler
const handleApprove = (key) => {
  console.log("Approved entry with key:", key);
  // Add logic to handle the approve action (e.g., update status in the backend)
};

// Reject button handler
const handleReject = (key) => {
  console.log("Rejected entry with key:", key);
  // Add logic to handle the reject action (e.g., update status in the backend)
};

  return (
    <>
      <div style={{ background: "white" }}>
        {/* Top Row */}
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Total Budget"
              bordered={false}
              style={{
                height: "300px",
                width: "350px",
                border: "1px solid grey",
              }}
            >
              {/* <Progress type="circle" percent={70} format={() => "$20,000"} /> */}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Total Nominations"
              bordered={false}
              style={{
                height: "300px",
                width: "350px",
                border: "1px solid grey",
              }}
            >
              {/* <Bar {...nominationConfig} /> */}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Total Awarded"
              bordered={false}
              style={{
                height: "300px",
                width: "350px",
                border: "1px solid grey",
              }}
            >
              {/* <Bar {...awardedConfig} /> */}
            </Card>
          </Col>
        </Row>

        <div className="details">
          <div className="details1">
            <Row gutter={16} className="rows">
              <p className="heading">Recent Nominations</p>
              <Col className="custom-content-area col">
                {nominations.map((nomination, index) => (
                  <Card
                    key={index}
                    title={nomination.title}
                    style={{
                      flex: "1 1 calc(33% - 16px)",
                      marginBottom: "16px",
                      minWidth: "300px",
                    }} // Flex and margin for spacing
                  >
                    <p>{nomination.description}</p>
                  </Card>
                ))}
              </Col>
              <p className="heading">Recent Events</p>
              <Col className="custom-content-area col">
                {nominations.map((nomination, index) => (
                  <Card
                    key={index}
                    title={nomination.title}
                    style={{
                      flex: "1 1 calc(33% - 16px)",
                      marginBottom: "16px",
                      minWidth: "300px",
                    }} // Flex and margin for spacing
                  >
                    <p>{nomination.description}</p>
                  </Card>
                ))}
              </Col>
            </Row>
            {/* Bottom Row - Leaderboard */}
            <Row gutter={16} style={{ marginTop: "20px" }}>
              <Col span={24}>
                <Card title="Top 10 on Leaderboard">
                <Table
            columns={columns}
            dataSource={leaderboardData}
            pagination={false}
          />
                </Card>
              </Col>
            </Row>
          </div>
          <div className="custom-content-area events">
          <Col className="custom-content-area row">
                {nominations.map((nomination, index) => (
                  <Card
                    key={index}
                    title={nomination.title}
                    className="card" // Flex and margin for spacing
                  >
                    <p>{nomination.description}</p>
                  </Card>
                ))}
              </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
