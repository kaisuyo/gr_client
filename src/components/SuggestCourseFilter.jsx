import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Space, Steps } from 'antd';


const SuggestCourseFilterStyled = styled.div`
  overflow: scroll;
  padding: 0 8px;
  display: flex;

  .steps {
    width: 20%;
    height: calc(100vh - 150px);
  }

  .content {
    flex-grow: 1;
    display: flex;
    height: calc(100vh - 150px);
    
    .main-content {
      padding: 8px;
      border-radius: 8px;
      border: 1px dashed rgba(0, 0, 0, 0.5);
      flex-grow: 1;
    }

    .step-control {
      padding: 8px;
    }
  }
`

export default function SuggestCourseFilter() {
  const [step, setStep] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setStep(value);
  };
  const description = 'This is a description.';

  const steps = [
    {
      title: 'Trích rút dữ liệu tham gia các môn học',
      description,
      content: <h3>content</h3>
    },
    {
      title: 'Đánh giá mức độ quan tâm các môn học',
      description,
      content: <h2>heelo</h2>
    },
    {
      title: 'Gợi ý',
      description,
      content: <h1>hi</h1>
    },
  ]

  return (
    <SuggestCourseFilterStyled>
      <div className="steps">

        <Steps
          current={step}
          direction="vertical"
          items={steps}
          onChange={onChange}
        />
      </div>
      <div className="content">
        <div className='main-content'>
          {steps[step].content}
        </div>
        <div className="step-control" style={{margin: "0 auto"}}>
          <Space>
            <Button onClick={() => setStep(step-1 <= 0 ? 0 : step-1)}>Trở lại</Button>
            <Button type='primary' onClick={() => setStep(step+1 >= 2 ? 2 : step+1)}>Tiếp tục</Button>
          </Space>
        </div>
      </div>
    </SuggestCourseFilterStyled>
  )
}
