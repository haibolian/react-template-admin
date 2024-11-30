import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard';
import BasicForm from '../pages/form/basic-form';
import ProForm from '../pages/form/pro-form';
import Layout from '../layout';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout /> }>
          <Route index element={ <Dashboard /> } />
          <Route path='form'>
            <Route index element={<BasicForm />}></Route>
            <Route path='pro' element={<ProForm />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
