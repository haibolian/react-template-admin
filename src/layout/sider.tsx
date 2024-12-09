
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const SideBar: React.FC = () => {
  const navigate = useNavigate()
  const items = [
    {
      label: '仪表盘',
      key: '/',
    },
    {
      label: '表单',
      key: 'form',
      children: [
        {
          label: '基础表单',
          key: '/form/base',
        },
        {
          label: '高级表单',
          key: '/form/pro',
        },
      ],
    }
  ]
  const selectMenuItem = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    <Sider theme="light" trigger={null} collapsible>
      <Menu
        theme="light"
        mode="inline"
        items={items}
        onSelect={selectMenuItem}
      />
    </Sider>
  )
}

export default SideBar;