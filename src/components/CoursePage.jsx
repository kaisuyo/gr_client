import { Button, Card, Image } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import HeaderComponent from './common/HeaderComponent'
import Test from './CourseData/Test'
import Video from './CourseData/Video'

const CourseStyled = styled.div`
  .back {
    padding-bottom: 8px;
  }

  .content-style {
    padding: 8px 16px;
  }

  .course-content {
    height: calc(100vh - 114px);
    display: flex;

    .course-info {
      width: 320px;
      height: 100%;
      overflow: scroll;
    }

    .course-element {
      flex-grow: 1;
      padding: 0 8px;
      height: 100%;
      overflow: scroll;
    }

  }
`

export default function CoursePage() {
  const courseId = useLocation().state.courseId
  const navigate = useNavigate()

  const data = {
    imgSource: "https://random.imagecdn.app/500/150",
    title: "Title",
    description: "Description",
    videos: [
      {title: "video1", description: "Video1", id: 1},
      {title: "video2", description: "Video2", id: 2},
      {title: "video3", description: "Video3", id: 3},
      {title: "video4", description: "Video4", id: 4},
      {title: "video5", description: "Video5", id: 5},
      {title: "video6", description: "Video6", id: 6},
      {title: "video7", description: "Video7", id: 7},
      {title: "video8", description: "Video8", id: 8},
      {title: "video9", description: "Video9", id: 9},
      {title: "video10", description: "Video10", id: 10},
      {title: "video11", description: "Video11", id: 11}
    ],
    testes: [
      {title: "Test1", description: "Test1", id: 1},
      {title: "Test2", description: "Test2", id: 2},
      {title: "Test3", description: "Test3", id: 3},
      {title: "Test4", description: "Test4", id: 4},
      {title: "Test5", description: "Test5", id: 5},
      {title: "Test6", description: "Test6", id: 6},
      {title: "Test7", description: "Test7", id: 7},
      {title: "Test8", description: "Test8", id: 8},
      {title: "Test9", description: "Test9", id: 9},
      {title: "Test10", description: "Test10", id: 10},
      {title: "Test11", description: "Test11", id: 11}
    ]
  }


  const registerCourse = () => {
    alert(courseId)
  }

  return (
    <CourseStyled>
      <HeaderComponent />
      <div className="content-style">
      <div className='back'>
        <Button onClick={() => navigate("/")} type="primary" >Về trang chủ</Button>
      </div>
      <div className="course-content">
        <div className="course-info">
          <Image src={data.imgSource} />
          <h3>{data.title}</h3>
          <h4>{data.description}</h4>
          <Button disabled={false} onClick={registerCourse}>Đăng ký khóa học</Button>
        </div>

        <div className="course-element course-videos">
          <Card title="Các video bài giảng" bodyStyle={{height: "calc(100vh - 168px)", padding: "0px"}}>
            {data.videos.map(video => (
              <div key={video.id} style={{padding: "4px"}}>
                <Video id={video.id} title={video.title} description={video.description} />
              </div>
            ))}
          </Card>
        </div>
        <div className="course-element course-testes">
          <Card title="Các bài test" bodyStyle={{height: "calc(100vh - 168px)", padding: "0px"}}>
            {data.testes.map(test => (
              <div key={test.id} style={{padding: "4px"}}>
                <Test id={test.id} title={test.title} description={test.description} />
              </div>
            ))}
          </Card>
        </div>
      </div>
      </div>
    </CourseStyled>
  )
}
