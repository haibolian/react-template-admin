import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  console.log('render-dashboard');
  const navigate = useNavigate()
  
  return (
    <div>
      <button onClick={e => navigate('/dashboard')}>点击</button>
    </div>
  );
};

export default Dashboard;
