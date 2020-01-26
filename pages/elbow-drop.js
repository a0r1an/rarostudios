import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import StoryPlayer from '../components/storyPlayer/storyPlayer'
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
        <StoryPlayer {...this.props} />
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
    storyStart: state.storyStart,
    currentSceneChoiceGiven: state.currentSceneChoiceGiven,
    storyScenes: state.storyScenes,
    translateValue: state.translateValue,
    moodComplete: state.moodComplete,
    lastScene: state.lastScene
  }
}

export default connect(mapStateToProps)(Stories)