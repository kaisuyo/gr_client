import { useState } from 'react';
import styled from 'styled-components'

import './App.css';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';

const AppStyled = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  const items = [{ key: 0, name: "Home" }, { key: 1, name: "Database" }, { key: 2, name: "Test" }]

  const [curState, setCurState] = useState(items[0])
  return (
      <AppStyled>
        <Sidebar curState={curState} setCurState={(key) => setCurState(items.find(item => item.key===key))} items={items} />
        <Content curState={curState} />
      </AppStyled>
  );
}

export default App;
