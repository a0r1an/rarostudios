import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import ReduxComponent from '../components/reduxComponent'
import { startStory } from '../libs/store'
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
  static getInitialProps({ reduxStore, req }) {
    // const isServer = !!req
    // reduxStore.dispatch(startStory(true))

    return {}
  }
  componentDidMount() {
    const { dispatch } = this.props
    // startStory(dispatch)
    // const { dispatch } = this.props
  }
  
  render(){
    return (
    <StoryPage>
      <Header />
      <div className="container">
        <ReduxComponent currentScene={this.props.currentScene} dispatch={this.props.dispatch} />
      </div>
    </StoryPage>
    )
  }
}
const mapStateToProps = state => {
  return { currentScene: state.currentScene }
}

export default connect(mapStateToProps)(Stories)