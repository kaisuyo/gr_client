import { Button, Card, Image } from 'antd'
import React from 'react'
import styled from 'styled-components'

const CourseStyled = styled.div`
  padding: 16px;

  .back {
    padding-bottom: 8px;
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
    }

  }
`

export default function Course(props) {
  const { courseId, setMode } = props

  const data = {
    imgSource: "https://random.imagecdn.app/500/150",
    title: "Title",
    description: "Description"
  }


  const registerCourse = () => {

  }

  return (
    <CourseStyled>
      <div className='back'>
        <Button onClick={() => setMode(1) } type="primary" >Về trang chủ</Button>
      </div>
      <div className="course-content">
        <div className="course-info">
          <Image src={data.imgSource} />
          <h3>{data.title}</h3>
          <h4>{data.description}</h4>
          <Button disabled={true} onClick={registerCourse}>Đăng ký khóa học</Button>
        </div>

        <div className="course-element course-videos">
          <Card title="Các video bài giảng" bodyStyle={{height: "calc(100vh - 168px)"}}>

          </Card>
        </div>
        <div className="course-element course-testes">
          <Card title="Các bài test" bodyStyle={{height: "calc(100vh - 168px)"}}></Card>
        </div>
      </div>
    </CourseStyled>
  )
}
