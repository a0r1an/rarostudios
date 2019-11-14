import Header from '../components/header'
import ReduxComponent from '../components/reduxComponent'
import styled from 'styled-components'

const StoryPage = styled.section`
  h1 {
    color: black;
  }
  img {
    width: 600px;
    margin: 0 auto;
    display: block;
  }
`
class Stories extends React.Component{
  
  render(){
    return (
    <StoryPage>
      <Header />
      <div className="container">
        <ReduxComponent />
      </div>
    </StoryPage>
    )
  }
}

export default Stories