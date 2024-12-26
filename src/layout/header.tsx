import { Icon } from '@iconify/react';
import SolarHamburgerMenuOutline from '@iconify-icons/solar/hamburger-menu-outline';
import { Breadcrumb, Button, Flex, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useMatches } from 'react-router-dom';
import { useLayoutContext } from './context/LayoutContext';
import { BreadcrumbItemType, ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import UserAvatar from './components/UserAvatar';

const Header: React.FC = () => {
  const matches = useMatches()
  const [crumbItems, setCrumbItems] = useState<ItemType[]>([])
  const { collapsed, setcollapsed } = useLayoutContext()
  
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

  return (
    <Layout.Header className='bg-white px-2 flex justify-between items-center'>
      <Flex className='w-full' align='center' justify='space-between'>
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
        <Flex flex={1} justify='flex-end' gap={10}>
          <UserAvatar />
        </Flex>
      </Flex>
    </Layout.Header>
  );
}

export default Header;