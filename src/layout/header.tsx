import { Icon } from '@iconify/react';
import SolarHamburgerMenuOutline from '@iconify-icons/solar/hamburger-menu-outline';
import { Breadcrumb, Button, Flex, Layout } from 'antd';
import React, { useContext } from 'react';
import { useLocation, useMatches, useNavigate } from 'react-router-dom';
import { useLayoutContext } from './context/LayoutContext';

const Header: React.FC = () => {
  const matches = useMatches()
  const { collapsed, setcollapsed } = useLayoutContext()
  const navigate = useNavigate()
  const signOut = () => {
    navigate('/login')
  }

  return (
    <Layout.Header className='bg-white px-2 flex justify-between items-center'>
      <Flex className='w-full' align='center' justify='space-between'>
        <div>
          <Button
            onClick={() => setcollapsed(!collapsed)}
            className='text-xl'
            color="default"
            variant="text"
            icon={<Icon icon={SolarHamburgerMenuOutline}></Icon>}>
          </Button>
          <Breadcrumb></Breadcrumb>
        </div>
        <div>
        </div>
      </Flex>
    </Layout.Header>
  );
}

export default Header;