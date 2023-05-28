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
export default function Video(props) {
  const { id, title, description } = props
  const navigate = useNavigate()

  return (
    <VideoStyled>
      <Card onClick={() => navigate("/video", {state: {videoId: id}})} size='small' hoverable bodyStyle={{background: "whitesmoke"}}>
        <Title level={5}>{title}</Title>
        <Text>{description}</Text>
      </Card>
    </VideoStyled>
  )
}
