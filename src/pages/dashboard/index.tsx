import React from 'react';
import { userStore } from '../../store';

const Dashboard: React.FC = () => {

  const userInfo = userStore(state => state.userInfo)
  const updateUserInfo = userStore(state => state.updateUserInfo)

  return (
    <>
      <h1>{ userInfo.name }</h1>
      <button onClick={() => updateUserInfo({ name: 'lhb' })}>update</button>
    </>
  );
}

export default Dashboard;
