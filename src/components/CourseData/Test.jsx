import React from 'react'
import styled from 'styled-components'
import { Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography

const VideoStyled = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`
export default function Test(props) {
  const navigate = useNavigate()
  const { id, title, description } = props
  return (
    <VideoStyled>
      <Card size='small' onClick={() => navigate("/test", {state: {testId: id}})} hoverable bodyStyle={{background: "whitesmoke"}}>
        <Title level={5}>{title}</Title>
        <Text>{description}</Text>
      </Card>
    </VideoStyled>
  )
}
