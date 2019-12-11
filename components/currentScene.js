import React from 'react'
import styled from 'styled-components'
import anime from "animejs"
import {goToNextScene} from '../libs/store'
import {animateElement} from '../js/animation'

const CurrentSceneWrapper = styled.div `
  opacity: 0;
  .titleBackground {
    position:absolute;
    z-index: 0;
    width: 350px;
    top: 8px;
  }
  .elbow{
    z-index: 1;
    position: relative;
    width: 200px;
    display: block;
    margin: 100px auto 0;
    opacity: 0;
  }
  .drop{
    z-index: 1;
    position: relative;
    width: 150px;
    display: block;
    margin: 0 auto;
    opacity: 0;
  }
  .startButton {
    position: absolute;
    top: 300px;
    left: 50%;
    margin-left: -40px;
    background-color: #2ae382;
    padding: 12px 0;
    width: 80px;
    color: black;
    border: none;
    text-align: center;
    border-radius: 10px;
    font-size: .75rem;
    cursor: pointer;
    box-shadow: #000000 5px 5px;
    opacity: 0;
    &:hover{
      background-color: #82eba9;
    }
    &:focus {
      background-color: #b7f3cb;
      outline: none;
    }
  }
  .startArrow {
    vertical-align: top;
  }
`
class titleScreen extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    animateElement(this.titleContainer,'500','opacity','1','easeInOutQuint')
  }
  
  startStory = () => {
    animateElement(this.titleContainer,'1500','opacity',0,'easeInOutQuint')
    this
      .props
      .dispatch(goToNextScene());
  }
  render(){
    const scenes = this.props.scenes;
    const currentScene = this.props.currentScene;
    const chosenPath = this.props.chosenPath;
    return(
      <CurrentSceneWrapper ref={titleContainer => (this.titleContainer = titleContainer)}>
        
        <img src={`/static/img/elbowDrop/scenes/${scenes[currentScene][chosenPath].src}`}/>
      </CurrentSceneWrapper>
    )
  }
}

export default titleScreen;