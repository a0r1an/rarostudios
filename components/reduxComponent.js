import React from 'react'
import TitleScene from '../components/titleScene'
import CurrentScene from '../components/CurrentScene'
import StoryControl from '../components/storyControl'
import styled from 'styled-components'
import {goBackPreviousScene,goToNextScene} from '../libs/store'
import {animateElementTillComplete, animateElement} from '../js/animation'

const ReduxWrapper = styled.div `
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  .sceneContainer {
    background: #f9f9f9;
    border: 1px solid #dfdfdf;
    position: relative;
    display: inline-block;
    flex-direction: column;
    width: 350px;
    height: 434px;
    padding: 8px;
    flex-wrap: wrap;
    margin: 0 auto;
    z-index: 2;
    overflow: hidden;
  }
  .a{
    border: 1px solid #dfdfdf;
    border-top: none;
    width: 350px;
    height: 66px;
    z-index: 1;
    transform: translateY(-100px);
  }
  .currentSceneContainer{
    position: relative;
    z-index: 1;
    opacity: 0;
  }
  .titleContainer{
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    top: 0;
  }
`
class reduxComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleBackButton = () => {
    const dispatch = this.props.dispatch;
    const tC = this.titleContainer;
    const currentSceneContainer = this.currentSceneContainer
    if(this.props.currentScene == 0){
      animateElementTillComplete(this.currentSceneContainer,'1500','opacity',0,'easeInOutQuint').then(function(){
        animateElement(tC,'1500','opacity',1,'easeInOutQuint');
      });
      animateElement(this.wrapperSelect,'1500','translateY',[0,-100],'easeInOutQuint');
    } else {
      animateElement(currentSceneContainer,'1500','translateX',300,'easeInOutQuint');
      animateElementTillComplete(currentSceneContainer,'1500','opacity',0,'easeInOutQuint').then(function(){
        dispatch(goBackPreviousScene());
        animateElement(currentSceneContainer,'1500','translateX',[-300,0],'easeInOutQuint');
        animateElement(currentSceneContainer,'1500','opacity',1,'easeInOutQuint');
      });
    }
  }
  handleNextButton = () => {
    const dispatch = this.props.dispatch;
    const currentSceneContainer = this.currentSceneContainer
    animateElement(currentSceneContainer,'1500','translateX',-300,'easeInOutQuint');
    animateElementTillComplete(currentSceneContainer,'1500','opacity',0,'easeInOutQuint').then(function(){
      dispatch(goToNextScene());
      animateElement(currentSceneContainer,'1500','translateX',[300,0],'easeInOutQuint');
      animateElement(currentSceneContainer,'1500','opacity',1,'easeInOutQuint');
    });
    // CHANGE STATE
    // ANIMATE CURRENT SCENE IN
  }
  handleStartButton = () => {
    const cSC = this.currentSceneContainer;
    animateElementTillComplete(this.titleContainer,'1500','opacity',0,'easeInOutQuint').then(function(){
      animateElement(cSC,'1500','opacity',1,'easeInOutQuint');
    });
    animateElement(this.wrapperSelect,'1500','translateY',[-100,0],'easeInOutQuint');
  }
  render() {
    const currentScene = this.props.currentScene
    return (
      <ReduxWrapper>
        <div className="sceneContainer">
          <div className="titleContainer" ref={titleContainer => (this.titleContainer = titleContainer)}>
            <TitleScene dispatch={this.props.dispatch} onStartButton={this.handleStartButton}/>
          </div>
          <div className="currentSceneContainer" ref={currentSceneContainer => (this.currentSceneContainer = currentSceneContainer)}>
            <CurrentScene dispatch={this.props.dispatch} scenes={this.props.scenes} chosenPath={this.props.chosenPath} currentScene={currentScene} />
          </div>
        </div>
        <div className="a" ref={wrapperSelect => (this.wrapperSelect = wrapperSelect)}>
          <StoryControl onBackButton={this.handleBackButton} onNextButton={this.handleNextButton} {...this.props} />
        </div>
      </ReduxWrapper>
    )
  }
}
export default reduxComponent