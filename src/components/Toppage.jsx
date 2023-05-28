import React from 'react';
import { Layout, Button, Tabs } from 'antd';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../App';
import { Content } from 'antd/es/layout/layout';
import CourseFilter from './CourseFilter';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from './CourseFilter/Course';
import HeaderComponent from './common/HeaderComponent';

const { Header } = Layout;

const StyledTopPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .tab-content {
    flex-grow: 1;
  }
`;

const TopPage = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext);

  return (
    <StyledTopPage>
      <HeaderComponent />
      <Content className='content'>
        <Tabs className='tab-content' defaultActiveKey="1" centered items={[
          {
            label: "Tất cả khóa học",
            key: "1",
            children: <CourseFilter type="all"/>
          },
          {
            label: "Khóa học của tôi",
            key: "2",
            children: <CourseFilter type="self"/>,
            disabled: !user
          }
        ]} />
      </Content>
    </StyledTopPage>
  );
};

export default TopPage;
