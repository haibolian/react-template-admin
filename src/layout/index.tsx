import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import SideBar from './sider';
import Header from './header';
import { LayoutProvider } from './context/LayoutContext';

const LayoutPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <LayoutProvider>
      <Layout hasSider className='h-full'>
        <SideBar></SideBar>
        <Layout>
          <Header />
          <Layout.Content
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
          </Layout.Content>
        </Layout>
      </Layout>
    </LayoutProvider>
  );
};

export default LayoutPage;