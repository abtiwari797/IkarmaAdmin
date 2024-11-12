import React from 'react';
import { Row, Col, Card } from 'antd';
import { Column } from '@ant-design/charts';

const Statistics = () => {
  const data = [
    { month: 'Jan', nominations: 5000 },
    { month: 'Feb', nominations: 10000 },
    { month: 'Mar', nominations: 23454 },
    { month: 'Apr', nominations: 15000 },
    { month: 'May', nominations: 15000 },
    { month: 'Jun', nominations: 15000 },
    { month: 'Jul', nominations: 15000 },
    { month: 'Aug', nominations: 15000 },
    { month: 'Sept', nominations: 15000 },
    { month: 'Oct', nominations: 15000 },
    { month: 'Nov', nominations: 15000 },
    { month: 'Dec', nominations: 15000 },
  ];

  const config = {
    data,
    xField: 'month',
    yField: 'nominations',
    color: '#000000', // Initial bar color (gray)
    columnWidthRatio: 0.6,
    autoFit: true,
    height: 220,
    tooltip: {
      customContent: (title, items) => {
        if (items.length) {
          return `<div><strong>${items[0].data.month}</strong><br/>Nominations: ${items[0].data.nominations.toLocaleString()}</div>`;
        }
        return null;
      },
    },
    state: {
      active: {
        style: {
          fill: '#FFA500', // Orange color on hover
        },
      },
    },
    interactions: [{ type: 'element-active' }], // Enable hover effect
  };

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card
          title="Total Budget"
          bordered={false}
          style={{
            height: '300px',
            minWidth: '30%',
            backgroundColor: '#FFF4E5', // Slightly orange background color
          }}
        ></Card>
      </Col>
      <Col span={8}>
        <Card
          title="Total Nominations"
          bordered={false}
          style={{
            height: '300px',
            minWidth: '30%',
            backgroundColor: '#FFF4E5', // Slightly orange background color
          }}
        >
          <Column {...config} />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          title="Total Awarded"
          bordered={false}
          style={{
            height: '300px',
            minWidth: '30%',
            backgroundColor: '#FFF4E5', // Slightly orange background color
          }}
        >
           <Column {...config} />
        </Card>
      </Col>
    </Row>
  );
};

export default Statistics;
