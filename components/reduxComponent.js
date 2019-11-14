import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { withRedux } from '../libs/redux'
import styled from 'styled-components'

const ReduxWrapper = styled.header`
`
const reduxComponent = () => {
  const dispatch = useDispatch()
  dispatch({
    type: 'TICK',
    light: true,
    lastUpdate: Date.now(),
  })
  return (
    <ReduxWrapper>
      redux wrappera
    </ReduxWrapper>
  )
}
export default withRedux(reduxComponent)