import React, { useState } from 'react';

import { Card, Radio, Space, Row, Col, Statistic } from 'antd';

interface IProps {
  renderView: Function;
}

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];

const Index = (props: IProps) => {
  const { renderView } = props;

  const [noTitleKey, setNoTitleKey] = useState<string>('');
  const [size, setSize] = useState<string>('');

  const handleSizeChange = (e: any) => {
    setSize(e.target.value);
  };

  return (
    <Card
      style={{ width: '100%' }}
      tabList={tabListNoTitle}
      activeTabKey={noTitleKey}
      tabBarExtraContent={
        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      }
      onTabChange={(key: string) => {
        setNoTitleKey(key);
      }}
    >
      {renderView()}
    </Card>
  );
};

export default Index;
