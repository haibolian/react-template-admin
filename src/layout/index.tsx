import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import SideBar from './sider';

const { Header, Content } = Layout;

const LayoutPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='h-full'>
      <SideBar></SideBar>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          
        </Header>
        <Content
          style={{
            margin: '10px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;