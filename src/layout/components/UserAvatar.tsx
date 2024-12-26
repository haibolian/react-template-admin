import { userStore } from '@/store/userStore';
import { Avatar, Dropdown, MenuProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';

const UserAvatar: React.FC = () => {
  const navigate = useNavigate()
  const { userInfo, setUserToken } = useStore(userStore)
  const items: MenuProps['items'] = [
    { key: 'logout', label: '退出登录' }
  ]

  const handleLogout = () => {
    setUserToken({})
    navigate('/login')
  }

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if(key === 'logout') handleLogout()
  }

  return (
    <Dropdown menu={{items, onClick}} trigger={['click']}>
      <Avatar  src={ userInfo.avatar } />
    </Dropdown>
  );
}

export default UserAvatar;