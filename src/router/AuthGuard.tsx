import React from 'react';

type Props = {
  children: React.ReactNode
}
const AuthGuard = ({ children }: Props) => {
  const token = useToken();

  return (
    <>
     { children }
    </>
  );
}

export default AuthGuard;