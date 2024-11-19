import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import {
  Layout,
  Typography,
  Card,
  Avatar,
  Button,
  Input,
  Space,
  Row,
  Col,
  Badge,
  Tabs,
  Spin
} from "antd";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import axios from "axios";
const { Header, Sider, Content } = Layout;
const { Text, Title } = Typography;
const { TabPane } = Tabs;

const NominationDetails = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.token);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `https://umbznza169.execute-api.us-east-2.amazonaws.com/hr/nomination/detail?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDetails(response.data.data.nominationData);
      } catch (error) {
        console.error("Error fetching nomination details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, token]);


  if (loading) {
    return <Spin size="large" />;
  }

  if (!details) {
    return <Text>No details available for this nomination.</Text>;
  }


  return (
    <Layout style={{ minHeight: "100vh", background: "white" }}>
      <Content>
        <Row gutter={[16, 16]}>
          {/* Event Details */}
          <Col xs={24} md={8}>
            <Card
              cover={<img alt="example" src={details.eventMedia[0].imgurl} />}
              style={{ borderRadius: "8px" }}
            >
              <Title level={4}>Planting Trees With Your Folks</Title>
              <Text>12:00PM to 3:00PM</Text>
              <br />
              <Text>6201 Elgin St. Celina, Delaware 10299</Text>
            </Card>
          </Col>

          {/* Nominator, Nominee, and Witness Details */}
          <Col xs={24} md={8}>
            <Card title="Nominator Details" bordered={false}>
              <Space direction="vertical">
                <Text>Nirmal Kushwah</Text>
                <Text>nirmalkushwah@gmail.com</Text>
                <Text>+1 5647 012350</Text>
              </Space>
            </Card>
            <Card
              title="Nominee Details"
              bordered={false}
              style={{ marginTop: "16px" }}
            >
              <Space direction="vertical">
                <Text>John Marie</Text>
                <Text>johnmarie0@gmail.com</Text>
              </Space>
            </Card>
            <Card
              title="Witness Details"
              bordered={false}
              style={{ marginTop: "16px" }}
            >
              <Space direction="vertical">
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text>PRIMARY</Text>
                    <Space>
                      <Avatar
                        icon={
                          <CheckCircleOutlined style={{ color: "#52c41a" }} />
                        }
                      />
                      <Text>John Marie</Text>
                    </Space>
                  </Col>
                  <Col>
                    <Button type="link">Verified</Button>
                  </Col>
                </Row>
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text>SECONDARY</Text>
                    <Space>
                      <Avatar
                        icon={
                          <CheckCircleOutlined style={{ color: "#52c41a" }} />
                        }
                      />
                      <Text>John Marie</Text>
                    </Space>
                  </Col>
                  <Col>
                    <Button type="link">Verified</Button>
                  </Col>
                </Row>
              </Space>
            </Card>
          </Col>

          {/* Verification Section */}
          <Col xs={24} md={8}>
            <Card bordered={false}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Verification" key="1">
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Row justify="space-between" align="middle">
                      <Col>
                        <Text>PRIMARY WITNESS</Text>
                        <Space>
                          <Avatar icon={<EditOutlined />} />
                          <Text>John Marie</Text>
                        </Space>
                        <Text>johnmarie0@gmail.com</Text>
                        <Text>+1 5647 012350</Text>
                      </Col>
                      <Col>
                        <Button type="link">In Review</Button>
                      </Col>
                    </Row>
                    <Input.TextArea placeholder="Personal query" />
                    <Button type="primary" style={{ marginTop: "8px" }}>
                      Submit
                    </Button>

                    <Row
                      justify="space-between"
                      align="middle"
                      style={{ marginTop: "16px" }}
                    >
                      <Col>
                        <Text>SECONDARY WITNESS</Text>
                        <Space>
                          <Avatar
                            icon={
                              <CheckCircleOutlined
                                style={{ color: "#52c41a" }}
                              />
                            }
                          />
                          <Text>John Marie</Text>
                        </Space>
                        <Text>johnmarie0@gmail.com</Text>
                        <Text>+1 5647 012350</Text>
                      </Col>
                      <Col>
                        <Button type="link">Verified</Button>
                      </Col>
                    </Row>
                    <Input.TextArea placeholder="Personal query" />
                    <Button type="primary" style={{ marginTop: "8px" }}>
                      Submit
                    </Button>
                  </Space>
                </TabPane>
                <TabPane tab="Reward" key="2">
                  {/* Reward Content Goes Here */}
                </TabPane>
              </Tabs>
              <Button
                type="primary"
                style={{ marginTop: "16px", width: "100%" }}
              >
                Next
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default NominationDetails;
