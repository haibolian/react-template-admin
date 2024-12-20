
import React, { lazy, useMemo, useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { userStore } from '@/store/userStore';
import { useStore } from 'zustand';
import { PermissionMenus } from '#/user';
const svgFiles = import.meta.glob('../assets/svgs/*.svg', { eager: true }); // 根据你的路径修改
type MenuItem = Required<MenuProps>['items'][number];
const { Sider } = Layout;

const buildMenu = (menus: PermissionMenus[], context = '/'): MenuItem [] => {
  if(!menus) return undefined!;
  return menus.map((menu) => {
    const Icon = svgFiles[`../assets/svgs/${menu.icon}.svg`]?.ReactComponent
    return {
      label: menu.title,
      key: context + menu.path,
      children: buildMenu(menu.children!, context + menu.path + '/'),
      icon: Icon ? <Icon /> : null
    }
  });
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