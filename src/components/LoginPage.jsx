import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../App';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)

  const onFinish = (values) => {
    // Xử lý đăng nhập

    // Chuyển hướng người dùng sau khi đăng nhập thành công
    setUser(values);
    navigate('/');
  };

  return (
    <Container>
      <FormWrapper>
        <FormTitle>Đăng nhập</FormTitle>
        <Form
          name="login"
          onFinish={onFinish}
        >
          <FormItem
            name="username"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên đăng nhập!',
              }
            ]}
          >
            <Input placeholder="Tên đăng nhập" />
          </FormItem>
          <FormItem
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              }
            ]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </FormItem>
          <FormItem>
            <LoginButton type="primary" block htmlType="submit">
              Đăng nhập
            </LoginButton>
          </FormItem>
          <FormItem>
            <LoginButton onClick={() => navigate("/register")}>
              Đăng ký tài khoản mới
            </LoginButton>
          </FormItem>
          <FormItem>
            <LoginButton type='link' onClick={() => navigate("/")}>
              Về trang chủ
            </LoginButton>
          </FormItem>
        </Form>
      </FormWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const FormItem = styled(Form.Item)`
  margin-bottom: 10px;
`;

const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;

export default LoginPage;
