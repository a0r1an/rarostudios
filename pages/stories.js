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
        <ReduxComponent storyStart={this.props.storyStart} currentScene={this.props.currentScene} scenes={this.props.scenes} chosenPath={this.props.chosenPath} dispatch={this.props.dispatch} />
      </div>
    </StoryPage>
    )
  }
}
const mapStateToProps = state => {
  return { 
    currentScene: state.currentScene,
    scenes: state.scenes,
    chosenPath: state.chosenPath,
    storyStart: state.storyStart
  }
}

export default connect(mapStateToProps)(Stories)