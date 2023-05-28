import React from 'react'
import { Layout, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../App'

const { Header } = Layout

const HeaderStyled = styled.div`
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
}

.logo {
  width: 120px;
  height: 31px;
  background: #333333;
  margin-right: 16px;
}

.header-buttons {
  display: flex;
  line-height: 31px;
}

.header-buttons button {
  margin-left: 8px;
}
`

export default function HeaderComponent() {
  const { user, setUser } = useContext(UserContext) 
  const navigate = useNavigate()
  const logOut = () => {
    setUser(null);
  }
  return (
    <HeaderStyled>
    <Header className="header">
        <div className="logo" />
        <div className="header-buttons">
          {!user ? <>
            <Button type="primary" onClick={() => navigate("/login")}>Đăng nhập</Button>
            <Button onClick={() => navigate("/register")}>Đăng ký</Button>
          </> : <>
            {user.fullName || user.username}
          <Button onClick={() => logOut()}>Đăng xuất</Button>
          </>}
        </div>
      </Header>
      </HeaderStyled>
  )
}
