import styled from 'styled-components'

const TopStyled = styled.div`
  width: 100%;
  height: 48px;
  line-height: 42px;
  text-align: center;
  background: #D3D3D3;
  color: #4e73df;
  font-size: 20px;
  border-bottom: 1px solid black;
  
`

const Top = ({ curState }) => {
  return (
    <TopStyled>{curState.name}</TopStyled>
  )
}

export default Top