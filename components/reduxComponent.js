import React from 'react'
import TitleScene from '../components/titleScene'
import Scene from '../components/Scene'
import StoryControl from '../components/storyControl'
import TransitionGroup from 'react-addons-transition-group';
import styled from 'styled-components'
import {goBackPreviousScene,goToNextScene,goToMadScene,goToSadScene,startStory,restartStory,addToScenes} from '../libs/store'
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
    white-space: nowrap;
  }
  .sceneList {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`
class reduxComponent extends React.Component {
  componentDidMount(){
    this.props.dispatch(addToScenes());
  }
  handleBackButton = () => {
    const dispatch = this.props.dispatch;
    if(this.props.currentScene == 0){
      dispatch(restartStory());
      animateElement(this.wrapperSelect,'1500','translateY',[0,-100],'easeInOutQuint');
      // AS TO NOT EXECUTE LINES BELOW
      return;
    }
    dispatch(goBackPreviousScene());
  }
  handleNextButton = () => {
    this.props.dispatch(goToNextScene());
    // CHANGE STATE
    // ANIMATE CURRENT SCENE IN
    // if(this.state.currentIndex === this.state.images.length - 1) {
    //   return this.setState({
    //     currentIndex: 0,
    //     translateValue: 0
    //   })
    // }
  }
  handleStartButton = () => {
    this.props.dispatch(startStory());
  }
  handleMadButton = () => {
    this.props.dispatch(goToMadScene());
  }
  handleSadButton = () => {
    this.props.dispatch(goToSadScene());
  }
  render() {
    const currentScene = this.props.currentScene
    const storyStart = this.props.storyStart
    const storyScenes = this.props.storyScenes

    return (
      <ReduxWrapper>
        <div className="sceneContainer">
          <TransitionGroup>
            { storyStart && <TitleScene {...this.props} onStartButton={this.handleStartButton}/>}
          </TransitionGroup>
          <ul className="sceneList"
            style={{
              transform: `translateX(${this.props.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {storyScenes.map((scene,index)=>
              <TransitionGroup key={index}>
                { !storyStart && <Scene {...this.props} scene={scene} /> }
              </TransitionGroup>
            )}
          </ul>
        </div>
        <TransitionGroup>
          { !storyStart && <StoryControl onBackButton={this.handleBackButton} onMadButton={this.handleMadButton} onSadButton={this.handleSadButton} onNextButton={this.handleNextButton} {...this.props} />}
        </TransitionGroup>
      </ReduxWrapper>
    )
  }
}
export default reduxComponent