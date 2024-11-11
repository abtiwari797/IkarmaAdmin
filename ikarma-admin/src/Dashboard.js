import React from "react";
import {
  Row,
  Col,
  Card,
  Progress,
  Table,
  Tag,
  Button,
  Avatar,
  Typography,
} from "antd";
import NominationDetail from "./NominationDetail";
import { Bar } from "@ant-design/plots";
import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Statistics from "./Components/Statistics";
import RecentNominations from "./Components/RecentNominations";
import RecentEvents from "./Components/RecentEvents";
import RecentEvents2 from "./Components/RecentEvents2";


const Dashboard = () => {
  const columns = [
    {
      title: 'RANK',
      dataIndex: 'rank',
      key: 'rank',
      align: 'center',
      render: (text) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={record.avatar} style={{ marginRight: 8 }} />
          <span style={{ fontWeight: 500 }}>{text}</span>
        </div>
      ),
    },
    {
      title: 'PARTICIPATED IN',
      dataIndex: 'participatedIn',
      key: 'participatedIn',
      align: 'center',
      render: (text) => <span style={{ color: '#888' }}>{text}</span>,
    },
    {
      title: 'AWARDED',
      dataIndex: 'awarded',
      key: 'awarded',
      align: 'center',
    },
    {
      title: 'BADGES',
      dataIndex: 'badges',
      key: 'badges',
      align: 'center',
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      align: 'center',
      render: () => (
        <div>
          <Button type="primary" style={{ marginRight: 8 }} onClick={handleApprove}>Accept</Button>
          <Button danger onClick={handleReject}>Reject</Button>
        </div>
      ),
    },
  ];

  const leaderboardData = [
    {
      key: '1',
      rank: '01',
      name: 'Cody Fisher',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      participatedIn: 'Event',
      awarded: 250,
      badges: 265,
    },
    {
      key: '2',
      rank: '02',
      name: 'Floyd Miles',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      participatedIn: 'Incident',
      awarded: 250,
      badges: 136,
    },
    {
      key: '3',
      rank: '03',
      name: 'Eleanor Pena',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      participatedIn: 'Event',
      awarded: 250,
      badges: 102,
    },
    {
      key: '4',
      rank: '04',
      name: 'Bessie Cooper',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      participatedIn: 'Incident',
      awarded: 250,
      badges: 85,
    },
    {
      key: '5',
      rank: '05',
      name: 'Esther Howard',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      participatedIn: 'Event',
      awarded: 250,
      badges: 70,
    },
    {
      key: '6',
      rank: '06',
      name: 'Kristin Watson',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      participatedIn: 'Incident',
      awarded: 250,
      badges: 65,
    },
    {
      key: '7',
      rank: '07',
      name: 'Cameron Williamson',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      participatedIn: 'Event',
      awarded: 250,
      badges: 60,
    },
    {
      key: '8',
      rank: '08',
      name: 'Jenny Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
      participatedIn: 'Incident',
      awarded: 250,
      badges: 55,
    },
    {
      key: '9',
      rank: '09',
      name: 'Courtney Henry',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
      participatedIn: 'Event',
      awarded: 250,
      badges: 50,
    },
    {
      key: '10',
      rank: '10',
      name: 'Ronald Richards',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      participatedIn: 'Incident',
      awarded: 250,
      badges: 45,
    },
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
        <Statistics />
        <div className="details">
          <div className="details1">
            <Row gutter={16} className="rows">
              <RecentNominations />
              <RecentEvents />
            </Row>
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
          <RecentEvents2/>
        </div>
     
      </div>
    </>
  );
};

export default Dashboard;
