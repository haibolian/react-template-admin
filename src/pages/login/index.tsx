import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();

  const handleSubmit = () => {
    setLoading(true)
    
  }
  
  return (
    <>
      <Form form={form} name='login' layout="inline">
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder='请输入用户名'></Input>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input type='password' placeholder='请输入密码'></Input>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading} onClick={handleSubmit}>登录</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginPage;