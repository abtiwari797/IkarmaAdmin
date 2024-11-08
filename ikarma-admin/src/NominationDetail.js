import React from 'react';
import { Layout, Card, Tabs, Button, Row, Col, Typography, Avatar, Input } from 'antd';
import { LeftOutlined, UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;

const NominationDetail = () => {
  return (
    <Layout style={{ padding: '24px' }}>
      <Content>
        <Button type="text" icon={<LeftOutlined />} style={{ marginBottom: '20px' }}>
          Nomination Detail
        </Button>

        <Row gutter={16}>
          {/* Left Section - Event Details */}
          <Col span={12}>
            <Card title="Event Details" bordered={false} style={{ marginBottom: '16px' }}>
              <img
                src="https://via.placeholder.com/400" // replace with actual image source
                alt="Event"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
              />
              <Title level={4}>Planting Trees With Your Folks</Title>
              <Text>12:00PM to 3:00PM</Text>
              <p>6391 Elgin St. Celina, Delaware 10299</p>

              <div style={{ marginTop: '16px' }}>
                <Title level={5}>Nominator Details</Title>
                <Text><UserOutlined /> Nirmal Kushwah</Text><br />
                <Text><MailOutlined /> NirmalKushwah@gmail.com</Text><br />
                <Text><PhoneOutlined /> +1 5647 012350</Text>
              </div>

              <div style={{ marginTop: '16px' }}>
                <Title level={5}>Nominee Details</Title>
                <Text><UserOutlined /> John Marie</Text><br />
                <Text><MailOutlined /> johnmarie@gmail.com</Text><br />
                <Text><PhoneOutlined /> +1 5647 012350</Text>
              </div>

              <div style={{ marginTop: '16px' }}>
                <Title level={5}>Witness Details</Title>
                <div style={{ marginBottom: '8px' }}>
                  <Text strong>Primary:</Text><br />
                  <Text><UserOutlined /> John Marie</Text><br />
                  <Text><MailOutlined /> johnmarie@gmail.com</Text><br />
                  <Text><PhoneOutlined /> +1 5647 012350</Text>
                </div>
                <div>
                  <Text strong>Secondary:</Text><br />
                  <Text><UserOutlined /> John Marie</Text><br />
                  <Text><MailOutlined /> johnmarie02@gmail.com</Text><br />
                  <Text><PhoneOutlined /> +1 5647 012350</Text>
                </div>
              </div>
            </Card>
          </Col>

          {/* Right Section - Verification and Reward Tabs */}
          <Col span={12}>
            <Card bordered={false} extra={<Button type="text" disabled style={{ color: '#1890ff' }}>In Process</Button>}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Verification" key="1">
                  <div>
                    <Title level={5}>Primary Witness</Title>
                    <Text><UserOutlined /> John Marie</Text><br />
                    <Text><MailOutlined /> johnmarie@gmail.com</Text><br />
                    <Text><PhoneOutlined /> +1 5647 012350</Text><br />
                    <TextArea rows={3} placeholder="Personal query" style={{ marginTop: '8px', marginBottom: '8px' }} />
                    <Button type="default" style={{ marginRight: '8px' }}>Request to Verify</Button>
                    <Button type="primary">Submit</Button>
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <Title level={5}>Secondary Ratify</Title>
                    <Text><UserOutlined /> John Marie</Text><br />
                    <Text><MailOutlined /> johnmarie02@gmail.com</Text><br />
                    <Text><PhoneOutlined /> +1 5647 012350</Text><br />
                    <TextArea rows={3} placeholder="Personal query" style={{ marginTop: '8px', marginBottom: '8px' }} />
                    <Button type="primary">Submit</Button>
                  </div>
                </TabPane>

                <TabPane tab="Reward" key="2">
                  {/* Add Reward content here if needed */}
                  <Text>Reward information goes here...</Text>
                </TabPane>
              </Tabs>
              <Button type="primary" block style={{ marginTop: '20px', backgroundColor: '#FA8C16', borderColor: '#FA8C16' }}>
                Next
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default NominationDetail;
