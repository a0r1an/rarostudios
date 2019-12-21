import React from 'react'
import styled from 'styled-components'

const CurrentSceneWrapper = styled.div `
  
`
class titleScreen extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const scenes = this.props.scenes;
    const currentScene = this.props.currentScene;
    const chosenPath = this.props.chosenPath;
    return(
      <CurrentSceneWrapper>
        <img src={`/static/img/elbowDrop/scenes/${scenes[currentScene][chosenPath].src}`}/>
      </CurrentSceneWrapper>
    )
  }
}

export default titleScreen;