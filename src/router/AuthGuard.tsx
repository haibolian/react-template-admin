import { Navigate } from 'react-router-dom';
import { userStore } from '../store/userStore';
import React from 'react';

type Props = {
  children: React.ReactNode
}

const AuthGuard = ({ children }: Props) => {
  const { getState } =  userStore
  const token = getState().userToken.accessToken
  
  if(!token) {
    return <Navigate to="/login" />
  }else {
    
  }

  return (
    <>
     { children }
    </>
  );
}

export default AuthGuard;