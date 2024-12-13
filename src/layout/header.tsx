import { IconFont } from '@/components/IconFont';
import { userStore } from '@/store/userStore';
import { Layout } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate()  
  const signOut = () => {
    // userStore().setUserToken({})
    // userStore().setUserInfo({})
    navigate('/login')
  }

  return (
    <Layout.Header className='bg-white px-5 flex justify-between items-center'>
      <span>asd</span>
      <IconFont className='text-lg cursor-pointer' onClick={signOut} type='icon-tuichu'></IconFont>
    </Layout.Header>
  );
}

export default Header;