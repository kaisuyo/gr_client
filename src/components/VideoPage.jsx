import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from './common/HeaderComponent'
import Youtube from "react-youtube"
import styled from 'styled-components'

const VideoPageStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export default function VideoPage() {
  const navigate = useNavigate()
  return (
    <VideoPageStyled>
      <HeaderComponent />
      <div style={{padding: "8px"}}>
        <Button type='primary' onClick={() => navigate(-1)}>Trở lại khóa học</Button>
      </div>
      <Youtube videoId="344Kk_4GpcY"/>
    </VideoPageStyled>
  )
}
