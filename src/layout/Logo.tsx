import React from 'react';
import logo from '@/assets/images/react.png'

const Logo: React.FC = () => {
  return (
    <div className='flex items-center py-3 px-3 gap-3'>
      <img src={logo} width={34} alt="logo" />
      <h1 className='text-base font-medium'>React Admin</h1>
    </div>
  );
}

export default Logo;