import { Icon } from '@iconify/react';
import SolarHamburgerMenuOutline from '@iconify-icons/solar/hamburger-menu-outline';
import { Button, Layout } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Header: React.FC = () => {
  const navigate = useNavigate()
  const signOut = () => {
    navigate('/login')
  }

  return (
    <Layout.Header className='bg-white px-2 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <Button
          className='text-xl'
          color="default"
          variant="text"
          icon={<Icon icon={SolarHamburgerMenuOutline}></Icon>}>
        </Button>
      </div>
    </Layout.Header>
  );
}

export default Header;