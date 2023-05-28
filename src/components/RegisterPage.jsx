import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';

const StyledRegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RegisterPage = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const onFinish = (values) => {
    console.log('Form values:', values);
    setUser(values);
    navigate("/");
  };

  return (
    <StyledRegisterPage>
      <Form
        name="register"
        initialValues={{
          fullName: '',
          class: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập họ tên!',
            }
          ]}
        >
          <Input placeholder="Họ tên" autoComplete='off' />
        </Form.Item>
        <Form.Item
          name="class"
          rules={[
            {
              pattern: /^[0-9]+$/,
              required: true,
              message: 'Vui lòng lớp!',
            }
          ]}
        >
          <Input placeholder="Tuổi" autoComplete='off' />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên đăng nhập!',
            }
          ]}
        >
          <Input placeholder="Tên đăng nhập" autoComplete='off' />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            }
          ]}
        >
          <Input.Password placeholder="Mật khẩu" autoComplete='off' />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập lại mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không khớp!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Nhập lại mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Space>
          <Button onClick={() => navigate("/")}>
            Về trang chủ
          </Button>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
          </Space>
        </Form.Item>
      </Form>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
