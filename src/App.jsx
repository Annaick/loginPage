import './App.css'
import {GithubFilled} from '@ant-design/icons'
import { Form, Button, Input, ConfigProvider, Checkbox, message, Typography, Space } from 'antd'
import { useState } from 'react'




export default function App(){
  const {Title, Paragraph, Text, Link}= Typography

  function handleSubmit (){
    message.success ('Welcome Back!')
    form.setFieldsValue({email: '', password: ''})
  }
  function handleSignUp (){
    message.success ('Welcome dear new member')
    form_.setFieldsValue({newEmail: '', newPassword: '', confirmPassword: ''})
  }


  const [form] = Form.useForm()
  const [form_] = Form.useForm()
  const [isNew, setIsNew] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState ('')

  function SingIn(){
    return(<>
      <Form form={form} onFinish={handleSubmit} layout='vertical' labelCol={{span: 6}} wrapperCol={{span:24}} className='form' name='SignIn' initialValues={{remember: true}} autoComplete='off'>
        <Title level={1}>Sign in</Title>
        <Form.Item label="Email" name="email" rules={[{required: true, message: 'Please enter your email adress'}]} >
          <Input placeholder='Email adress'></Input>
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{required: true, message: 'Please enter your password'}]}>
          <Input.Password placeholder='Password'></Input.Password>
        </Form.Item>
        <Form.Item>
          <Space direction='vertical' align='start'>
            <Button size='small' style={{fontSize: '0.7rem', padding: '0px'}} type='link' onClick={()=> message.info('Relax and try to remember it')}>Forgot Password</Button>
            <Text style={{fontSize: '0.7rem'}}>No account? <Button size='small' style={{fontSize: '0.7rem'}} type='link' onClick={()=> setIsNew(true)}>Sign up</Button></Text>
          </Space>
        </Form.Item>
        <Form.Item name="remember" valuePropName='checked' wrapperCol={{span: 16}}>
          <Checkbox>Remeber me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 18, span: 'auto'}}>
          <Button htmlType='submit' type='primary'>Add Task</Button>
        </Form.Item> 
      </Form>
    </>)
  }
  
  function SignUp (){
    return(<>
      <Form form={form_} onFinish={handleSignUp} autoComplete='off'  layout='vertical' labelCol={{span: 12}} wrapperCol={{span:24}} className='form' name='SignUp' initialValues={{remember: true}} >
        <Title level={1}>Sign Up</Title>
        <Form.Item label="Email" name="newEmail" rules={[{required: true, message: 'Please enter your email adress'}, {type: 'email', message: 'The email adress is not valide'}]}>
          <Input placeholder='Email adress' aria-label='Enter your email here'></Input>
        </Form.Item>
        <Form.Item label="Password" name="newPassword" rules={[{required: true, message: 'Please enter your password'}]}>
          <Input.Password aria-label='Enter your password here' placeholder='Password'></Input.Password>
        </Form.Item>
        <Form.Item label='Confirm password' name='confirmPassword' dependencies={['newPassword']} rules={[{required: true, message:'Please confirm your password'},
        ({getFieldValue}) =>({
          validator(_, value){
            if (!value || getFieldValue('newPassword') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('The password do not match'))
          }
        })
        ]}>
          <Input.Password placeholder='Confirm password' aria-label='Confirm your password here'></Input.Password>
        </Form.Item>
        <Text style={{fontSize: '0.7rem'}}>Already have an account? <Button size='small' style={{fontSize: '0.7rem'}} type='link' onClick={()=>setIsNew(false)}>Sign in</Button></Text>
        <Form.Item wrapperCol={{offset: 18, span: 'auto'}}>
          <Button htmlType='submit' type='primary'>Add Task</Button>
        </Form.Item> 
      </Form>
    </>)
  }
  

  return (<>
    <ConfigProvider theme={{
      token:{
        colorPrimary: 'rgb(223, 35, 66)'
      },
      components:{
        Input:{
          colorBgBase: '#FFF'
        },
        Form:{
          fontSize: '0.8rem'
        },
        Message:{
          colorBg: 'rgb(223, 35, 66)'
        },
        Typography:{
          titleMarginTop: '3px',
          titleMarginBottom: '3px',
          colorText: '#FFF',
          colorTextHeading: '#FFF'
        }
      }
    }}>
      <div className='container'>
        {isNew? <SignUp></SignUp>: <SingIn></SingIn>}
        <footer>
                <GithubFilled></GithubFilled> 
                <p>View Source Code <a href="https://github.com/Annaick/loginPage" rel='noopener norefer'>here</a></p>
        </footer>
      </div>
    </ConfigProvider>
  </>)
}