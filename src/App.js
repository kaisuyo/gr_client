import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'antd/dist/reset.css';
import "@ant-design/icons";
import TopPage from './components/Toppage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import { createContext, useState } from 'react';
import CoursePage from './components/CoursePage';
import VideoPage from './components/VideoPage';
import TestPage from './components/TestPage';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
`

const UserContext = createContext();

function App() {

  const [user, setUser] = useState(null);
    return (
      <BrowserRouter>
      <UserContext.Provider value={{user, setUser}} >
      <div>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
      </UserContext.Provider>
      </BrowserRouter>
    );
}

export default App;
export { UserContext }
