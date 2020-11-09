import React from 'react';
import DashBoard from './components/DashBoard';
import SliceShape from './components/SliceShape';
import { Card, Space, Row, Col, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Wrapper } from './components/styled';
import ViewWithDate from './components/ViewWithDate';

const Index = () => {
  return (
    <Wrapper>
      <Space size={20} direction="vertical" style={{ width: '100%' }}>
        <Row gutter={10}>
          <Col span={8}>
            <Space size={10} direction="vertical">
              <Card>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
              <Card>
                <Statistic
                  title="Ide"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Space>
          </Col>
          <Col span={16}>
            <Card>
              <DashBoard />
            </Card>
          </Col>
        </Row>
        <Row>
          <ViewWithDate
            renderView={() => (
              <Row>
                <Col span={12}>
                  <SliceShape />
                </Col>
                <Col span={12}>
                  <SliceShape />
                </Col>
              </Row>
            )}
          />
        </Row>
        <Row>
          <Col>
            <Card bordered={false} title="仪表盘">
              <SliceShape />
            </Card>
          </Col>
        </Row>
      </Space>
    </Wrapper>
  );
};

export default Index;
