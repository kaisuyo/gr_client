import Database from "./database/Database"
import styled from 'styled-components'

const CenterStyled = styled.div`
  flex-grow: 1;
  overflow: scroll;
`
const Center = ({ curState }) => {
  return(
    <CenterStyled>
      {curState.name === 'Database' && <Database />}
    </CenterStyled>
  )
}

export default Center