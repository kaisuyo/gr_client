import styled from 'styled-components'
import Center from "./center/Center"
import Top from "./top/Top"

const ContentStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Content = ({ curState }) => {
  return(
    <ContentStyled>
      <Top curState={curState} />
      <Center curState={curState} />
    </ContentStyled>
  )
}

export default Content