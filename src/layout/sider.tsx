import React, { useEffect, useMemo, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, useMatches, useNavigate } from 'react-router-dom';
import { userStore } from '@/store/userStore';
import { useStore } from 'zustand';
import { buildMenu } from './helper';
import Logo from './components/Logo';
import { useLayoutContext } from './context/LayoutContext';

const { Sider } = Layout;

const SideBar: React.FC = React.memo(() => {
  const location = useLocation();
  const matches = useMatches();
  const [defaultOpenKeys] = useState<string[]>(matches.map(m => m.pathname));
  const [selectedKeys, setSelectedKeys] = useState<string>(matches[matches.length - 1].pathname);

  const { collapsed } = useLayoutContext();
  const navigate = useNavigate();
  const menus = useStore(userStore, state => state.userInfo.menus || []);

  const memoizedMenus = useMemo(() => {
    return buildMenu(menus);
  }, [menus]);

  const selectMenuItem = ({ key }: { key: string }) => {
    navigate(key);
  };

  useEffect(() => {
    // 更新默认选中的菜单项
    const currentPath = location.pathname;
    setSelectedKeys(currentPath);
  }, [location]);

  return (
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu
        theme="light"
        mode="inline"
        items={memoizedMenus}
        inlineCollapsed={collapsed}
        onSelect={selectMenuItem}
        selectedKeys={[selectedKeys]}
        defaultOpenKeys={defaultOpenKeys}
      />
    </Sider>
  );
});

export default SideBar;