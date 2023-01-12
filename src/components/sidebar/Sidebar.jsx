import { useState } from 'react'
import styled from 'styled-components'

const SidebarStyled = styled.div`
  width: max-content;
  background: #4e73df;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .sidebar-item {
    width: auto;
    padding: 8px 16px;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    cursor: pointer;
  }
  .sidebar-item:hover {
    color: white;
  }
  .sidebar-item.active {
    color: white;
  }
`

const Sidebar = ({ curState, setCurState, items }) => {

  return (
    <SidebarStyled>
      {items.map((item) => (
        <div
          className={'sidebar-item ' + (curState.key === item.key ? 'active' : '')}
          onClick={() => setCurState(item.key)}
          key={item.key}>
          {item.name}
        </div>
      ))}
    </SidebarStyled>
  )
}

export default Sidebar