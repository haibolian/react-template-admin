import React from 'react';
import logo from '@/assets/images/react.png'
import { useLayoutContext } from '../context/LayoutContext';

const Logo: React.FC = () => {
  const { collapsed } = useLayoutContext()
  return (
    <div className={`h-16 flex justify-center items-center py-3 px-3 ${!collapsed ? 'gap-3' : ''}`}>
      <img src={logo} width={34} alt="logo" />
      <div className={`text-base font-medium overflow-hidden whitespace-nowrap ${collapsed ? 'w-0 opacity-0' : ''}`}>React Admin</div>
    </div>
  );
}

export default Logo;