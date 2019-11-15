import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { withRedux } from '../libs/redux'
import styled from 'styled-components'

const ReduxWrapper = styled.header`
`
const reduxComponent = () => {
  const dispatch = useDispatch()
  const nextPage = () => {
    dispatch({
      type: 'NEXT_SCENE',
      currentScene: "scene-2",
    })
  }
  return (
    <ReduxWrapper>
      <button onClick={nextPage}>Click</button>
    </ReduxWrapper>
  )
}
export default withRedux(reduxComponent)