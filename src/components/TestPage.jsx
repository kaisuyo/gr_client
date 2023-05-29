import { Button, Card, Form, Radio, Space, Typography } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Countdown from 'react-countdown'
import HeaderComponent from './common/HeaderComponent'
import { UserContext } from '../App'

const { Text, Title } = Typography

const TestPageStyled = styled.div`
  height: calc(100vh - 50px);
  display: flex;

  .part {
    height: 100%;
    overflow: scroll;
    padding: 8px;
  }

  .left {
    width: 20%;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .right {
    flex-grow: 1;
  }
`

export default function TestPage() {
  const { testId, courseId} = useLocation().state
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const dataTest = {
    title: "Bài kiểm tra thử",
    description: "Bài kiểm tra thử",
    estimate: 15*60*1000,
    questions: [
      {
        title: "Câu 1",
        description: "Câu hỏi?",
        id: 1,
        answers: [
          {title: "A", description: "1", id: 1},
          {title: "B", description: "2", id: 2},
          {title: "C", description: "3", id: 3},
          {title: "D", description: "4", id: 4}
        ]
      },
      {
        title: "Câu 2",
        description: "Câu hỏi?",
        id: 2,
        answers: [
          {title: "A", description: "1", id: 1},
          {title: "B", description: "2", id: 2},
          {title: "C", description: "3", id: 3},
          {title: "D", description: "4", id: 4}
        ]
      },
      {
        title: "Câu 3",
        description: "Câu hỏi?",
        id: 3,
        answers: [
          {title: "A", description: "1", id: 1},
          {title: "B", description: "2", id: 2},
          {title: "C", description: "3", id: 3},
          {title: "D", description: "4", id: 4}
        ]
      },
      {
        title: "Câu 4",
        description: "Câu hỏi?",
        id: 4,
        answers: [
          {title: "A", description: "1", id: 1},
          {title: "B", description: "2", id: 2},
          {title: "C", description: "3", id: 3},
          {title: "D", description: "4", id: 4}
        ]
      },
      {
        title: "Câu 5",
        description: "Câu hỏi?",
        id: 5,
        answers: [
          {title: "A", description: "1", id: 1},
          {title: "B", description: "2", id: 2},
          {title: "C", description: "3", id: 3},
          {title: "D", description: "4", id: 4}
        ]
      }
    ]
  }

  const [testState, setTestState] = useState(true);
  const clockRef = useRef()
  const formRef = useRef()

  const finish = (values) => {
    console.log(values);
  }

  const submit = () => {
    clockRef.current.pause();
    formRef.current.submit();

    navigate(-1)
  }

  const start = () => {
    setTestState(!testState)
    clockRef.current.start();
  }

  return (
    <>
      <HeaderComponent />
      {user && <TestPageStyled>
        <div className="part left">
          <Card>
            <Title level={4}>{dataTest.title}</Title>
            <Text>{dataTest.description}</Text>
            <hr />
            <Countdown ref={clockRef} onComplete={submit} autoStart={false} date={Date.now() + dataTest.estimate} />
            <Space>
              <Button type="primary" disabled={!testState} onClick={start}>Làm bài</Button>
              <Button disabled={testState} onClick={submit}>Nộp bài</Button>
            </Space>
          </Card>

        </div>
        {!testState && <div className="part right">
          <Form onFinish={finish} ref={formRef}>
            {dataTest.questions?.map(question => (
              <Form.Item key={question.id} name={question.id}>
                <Card hoverable bodyStyle={{width: "100%"}}>
                  <Title level={5}>{question.title}</Title>
                  <Text>{question.description}</Text>
                  <br />
                  <Radio.Group>
                    <Space size="large">
                      {question.answers?.map(answer => (
                        <Radio key={answer.id} value={answer.title} >{answer.title}. {answer.description}</Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </Card>
              </Form.Item>
            ))}
            </Form>
          </div>
        }
      </TestPageStyled>}
    </>
  )
}
