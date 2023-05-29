import { Button } from 'antd'
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeaderComponent from './common/HeaderComponent'
import Youtube from "react-youtube"
import styled from 'styled-components'
import { UserContext } from '../App'

const VideoPageStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export default function VideoPage() {
  const navigate = useNavigate()
  const { videoId, courseId } = useLocation().state
  const { user } = useContext(UserContext)
  return (
    <VideoPageStyled>
      <HeaderComponent />
      {user && <><div style={{padding: "8px"}}>
        <Button type='primary' onClick={() => navigate(-1)}>Trở lại khóa học</Button>
      </div>
      <Youtube videoId="344Kk_4GpcY"/>
      </>}
    </VideoPageStyled>
  )
}
