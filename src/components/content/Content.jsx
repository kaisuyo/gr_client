import Center from "./center/Center"
import Top from "./top/Top"

const Content = ({ curState }) => {
  return(
    <div>
      {curState.name}
      <Top />
      <Center />
    </div>
  )
}

export default Content