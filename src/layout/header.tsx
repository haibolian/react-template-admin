import { Icon } from '@iconify/react';
import { MoonFilled, SunFilled } from "@ant-design/icons";
import SolarHamburgerMenuOutline from '@iconify-icons/solar/hamburger-menu-outline';
import { Breadcrumb, Button, Flex, Layout } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useMatches } from 'react-router-dom';
import { useLayoutContext } from './context/LayoutContext';
import { BreadcrumbItemType, ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import UserAvatar from './components/UserAvatar';
import TabBar from './tabs';
import { useStore } from 'zustand';
import settingStore from '@/store/settingStore';
import { getSysTheme } from '@/utils/system';

const Header: React.FC = () => {
  const matches = useMatches()
  const [crumbItems, setCrumbItems] = useState<ItemType[]>([])
  const { collapsed, setcollapsed } = useLayoutContext()
  const theme = useStore(settingStore, state => state.theme)
  const setTheme = useStore(settingStore, state => state.setTheme)
  
  useEffect(() => {
    const routes = matches.slice(1) 
    const items = routes.map((route, index) => ({
      title: route.handle.title,
      path: index === routes.length - 1 ? undefined : route.pathname
    }))
    document.title = items[items.length - 1].title
    setCrumbItems(items)
  }, [matches])

  const itemRender = (currentRoute: BreadcrumbItemType) => {
    const { title, path } = currentRoute
    return path ? <Link to={path}>{ title }</Link> : title
  }

  const ThemeModeIcon = useMemo(() => {
    const isDark = theme === 'auto' ? getSysTheme() === 'dark' : theme === 'dark'
    return isDark 
      ? <MoonFilled
          className='cursor-pointer text-xl'
          onClick={(e) => {
            e.preventDefault()
            setTheme('light')
          }}
        />
      : <SunFilled
          className='cursor-pointer text-xl'
          onClick={(e) => {
            e.preventDefault()
            setTheme('dark')
          }} 
        />
  }, [theme])

  return (
    <Layout.Header className='px-2 flex flex-col justify-around'>
      <Flex className='w-full h-12' align='center' justify='space-between'>
        <Flex flex={1} align='center' gap={20}>
          <Button
            onClick={() => setcollapsed(!collapsed)}
            className='text-xl'
            color="default"
            variant="text"
            icon={<Icon icon={SolarHamburgerMenuOutline}></Icon>}>
          </Button>
          <Breadcrumb itemRender={itemRender} items={crumbItems}></Breadcrumb>
        </Flex>
        <Flex flex={1} justify='flex-end' align='center' gap={10}>
          { ThemeModeIcon }
          <UserAvatar />
        </Flex>
      </Flex>
      <TabBar />
    </Layout.Header>
  );
}

export default Header;