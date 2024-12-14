
import React, { useMemo, useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { userStore } from '@/store/userStore';
import { useStore } from 'zustand';
import { PermissionMenus } from '#/user';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;

const buildMenu = (menus: PermissionMenus[], context = '/'): MenuItem [] => {
  if(!menus) return undefined!;
  return menus.map((menu) => ({
    label: menu.title,
    key: context + menu.path,
    children: buildMenu(menu.children!, context + menu.path + '/')
  }));
}

const SideBar: React.FC = React.memo(() => {
  const navigate = useNavigate()
  const menus = useStore(userStore, state => state.userInfo.menus || [])

  const memoizedMenus = useMemo(() => {
    return buildMenu(menus)
  }, [menus]);

  const selectMenuItem = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    <Sider theme="light" trigger={null} collapsible>
      <Menu
        defaultSelectedKeys={['/']}
        theme="light"
        mode="inline"
        items={memoizedMenus}
        onSelect={selectMenuItem}
      />
    </Sider>
  )
})

export default SideBar;