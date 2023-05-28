import React from 'react'
import { useState } from 'react'
import { Button, Card, List, Select, Space } from 'antd'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'

const CourseFilterStyled = styled.div`
  .filter-courses {
    padding-left: 24px;
  }

  .list-courses {
    display: flex;
    padding-top: 16px;
    flex-grow: 1;
    height: calc(100vh - 150px);
    overflow: scroll;
  }
  
`

export default function CourseFilter(props) {
  const { type } = props
  const [filter, setFilter] = useState({type, subject: 1, classNum: 1})
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const classNum = Array(12).fill(null).map((e, i) => ({
    label: `Lớp ${i+1}`,
    value: i+1,
  }))
  const subjects = Array(12).fill(null).map((e, i) => ({
    label: `Môn học ${i+1}`,
    value: i+1,
  }))

  const courses = [
    {
      id: "1",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "2",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "3",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "4",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "5",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "6",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "7",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "8",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "9",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "10",
      img: '',
      title: "title",
      description: "description"
    },
    {
      id: "11",
      img: '',
      title: "title",
      description: "description"
    }
  ]

  const handleFilter = (value) => {
    setFilter({...filter, ...value});
  }

  useEffect(() => {
    console.log(filter);
  }, [filter]);
  
  return (
    <CourseFilterStyled>
      <div className='filter-courses'>
        <Space>
          <Select onChange={(e) => handleFilter({subject: e})} defaultValue={filter.subject} style={{width: 120}} options={subjects}/>
          <Select onChange={(e) => handleFilter({classNum: e})} defaultValue={filter.classNum} style={{width: 120}} options={classNum}/>
        </Space>
      </div>
      <div className='list-courses'>
        <List 
          grid={{gutter: 15, column: 5}}
          dataSource={courses}
          renderItem={course => (
            <List.Item>
              <Card onClick={() => {navigate("course", {state: {courseId: course.id}})}} hoverable cover={<img src="https://random.imagecdn.app/500/150" />}>
                <h3>{course.title}</h3>
                {course.description}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </CourseFilterStyled>
  )
}
