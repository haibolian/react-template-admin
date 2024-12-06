import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';
import { loginApi } from '@/api/user'
import { userStore } from '@/store/userStore';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();
  const { setUserToken } = userStore.getState().actions
  const nav = useNavigate()
  const handleSubmit = async () => {
    setLoading(true)
    const { msg, code, data } = await loginApi()
    if(code === 200) {
      console.log('登录成功')
      setUserToken(data)
      nav('/')
    } else {
      console.log('登录失败')
    }
    setLoading(false)
    }
  
  return (
    <>
      <Form form={form} name='login' layout="inline" onFinish={handleSubmit}>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder='请输入用户名'></Input>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input type='password' placeholder='请输入密码'></Input>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading}>登录</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginPage;