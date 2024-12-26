import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';
import { loginApi } from '@/api/user'
import { userStore } from '@/store/userStore';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '@/components/svg-icon';
import logoSrc from '@/assets/images/react.png'

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();
  const setUserToken = userStore(state => state.setUserToken)
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
    <div className='flex h-full'>
      <div className='absolute top-2 left-2 flex items-center gap-2'> 
        <img src={logoSrc} width={45} alt="" />
        <h2 className='text-xl text-gray-700 font-medium'>React Admin</h2>
      </div>
      <div className='w-2/3 bg-gray-100 flex flex-col items-center justify-center'>
        <SvgIcon className='w-80 h-80 animate-bounce-mild' name='login-bg' />
        <div className='text-center'>
          <h2 className='text-2xl text-gray-700'>A Sample React Admin Template</h2>
          <h5 className='text-sm text-gray-600 leading-10'>一个简易的react后台管理模版</h5>
        </div>
      </div>
      <div className='w-1/3 flex justify-center flex-col gap-4 p-8'>
        <h1 className='text-4xl font-medium'>👴，欢迎回来</h1>
        <p className='text-sm text-gray-500'>请输入您的账户信息以管理您的项目</p>

        <Form className='mt-4' form={form} size='large' name='login' onFinish={handleSubmit}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder='请输入用户名'></Input>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input type='password' placeholder='请输入密码'></Input>
          </Form.Item>
          <Form.Item>
            <Button className='w-full' type='primary' htmlType='submit' loading={loading}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;