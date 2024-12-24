
import React, { useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { userStore } from '@/store/userStore';
import { useStore } from 'zustand';
import { buildMenu } from './helper';
import Logo from './Logo';
import { useLayoutContext } from './context/LayoutContext';

const { Sider } = Layout;

const SideBar: React.FC = React.memo(() => {
  const { collapsed } = useLayoutContext()

  const navigate = useNavigate()
  const menus = useStore(userStore, state => state.userInfo.menus || [])

  const memoizedMenus = useMemo(() => {
    return buildMenu(menus)
  }, [menus]);

  const selectMenuItem = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu
        defaultSelectedKeys={['/']}
        theme="light"
        mode="inline"
        items={memoizedMenus}
        inlineCollapsed={collapsed}
        onSelect={selectMenuItem}
      />
    </Sider>
  )
})

export default SideBar;