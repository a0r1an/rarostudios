import React from 'react'
import TitleScene from './components/titleScene'
import Scene from './components/scene'
import StoryControl from './components/storyControl'
import TransitionGroup from 'react-addons-transition-group';
import styled from 'styled-components'
import * as actions from './actions'
import {animateElement} from '../../libs/animation'

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
    this.props.dispatch(actions.addToScenes());
  }
  componentWillUnmount(){
    this.props.dispatch(actions.resetState());
  }
  handleBackButton = () => {
    const dispatch = this.props.dispatch;
    if(this.props.currentScene == 0){
      dispatch(actions.restartStory());
      animateElement(this.wrapperSelect,'1500','translateY',[0,-100],'easeInOutQuint');
      // AS TO NOT EXECUTE LINES BELOW
      return;
    }
    dispatch(actions.goBackPreviousScene());
  }
  handleNextButton = () => {
    this.props.dispatch(actions.goToNextScene());
  }
  handleStartButton = () => {
    this.props.dispatch(actions.startStory());
  }
  handleMadButton = () => {
    this.props.dispatch(actions.updateMood(false));
    this.props.dispatch(actions.goToMadScene());

  }
  handleSadButton = () => {
    this.props.dispatch(actions.updateMood(false));
    this.props.dispatch(actions.goToSadScene());
  }
  handleUpdateMood = value => {
    this.props.dispatch(actions.updateMood(value));
  }
  render() {
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
          { !storyStart && <StoryControl onBackButton={this.handleBackButton} onMadButton={this.handleMadButton} onSadButton={this.handleSadButton} onNextButton={this.handleNextButton} onUpdateMood={this.handleUpdateMood} {...this.props} />}
        </TransitionGroup>
      </ReduxWrapper>
    )
  }
}
export default reduxComponent