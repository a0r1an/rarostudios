import React from 'react'
import styled from 'styled-components'
import {BackButton, NextButton, MadButton, SadButton} from './svgButtons'
import {animateElementTillComplete} from '../js/animation'
import TransitionGroup from 'react-addons-transition-group';

const StoryControlWrapper = styled.div `
  display: inline-flex;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-top: none;
  width: 350px;
  height: 66px;
  z-index: 1;
  transform: translateY(-100px);
  .smallControl {
    flex: 0 0 20%;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-right: 1px solid #dfdfdf;
    justify-content: center;
    transition: background 0.2s ease-in;
    
    &:nth-of-type(4) {
      border-right: none;
    }
    span {
      font-size: .75rem;
      transition: transform 0.3s ease-in;
    }
    svg {
      vertical-align: middle;
      transition: transform 0.2s ease-in;
    }
    &:hover {
      background: #f9f9f9;
    }
    &:active {
      background: #f1f1f1;
    }
    &:hover span, &:hover svg{
      transform: translateX(-2px);
    }
    &.inactive,&.inactive:hover{
      background: #fbfbfb;
    }
  }
  .smallControl--right {
    &:hover span, &:hover svg{
      transform: translateX(2px);
    }
    &:hover span, &:hover svg{
      transform: translateX(2px);
    }
  }
  .largeControl {
    flex: 0 0 30%;
    text-align: center;
    padding: 8px 0 5px;
    border-right: 1px solid #dfdfdf;
    cursor: pointer;
    height: 65px;
    transition: 1.5s background;
    &.inactive{
      background: #fbfbfb;
    }
    svg {
      width: 34px;
      display: block;
      margin: 0 auto;
    }
    span {
      font-size: .75rem;
      color: #000;
    }
  }
  .inactive {
    cursor: initial;
  }
`
class storyControl extends React.Component{
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillLeave (callback) {
    const storyControl = this.storyControl;
    animateElementTillComplete(storyControl,'1500','translateY',[0,-100],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  componentWillEnter (callback) {
    const storyControl = this.storyControl;
    animateElementTillComplete(storyControl,'1500','translateY',[-100,0],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  handleMad = () => {
    this.props.onMadButton();
  }
  handleSad = () => {
    this.props.onSadButton();
  }
  handleBack = () => {
    this.props.onBackButton();
  }
  handleNext = () => {
    this.props.onNextButton();
  }
  render(){
    const currentSceneChoiceGiven = this.props.currentSceneChoiceGiven;
    return(
      <StoryControlWrapper ref={storyControl => (this.storyControl = storyControl)}> 
        <div className="smallControl" onClick={this.handleBack}>
          <BackButton/>
        </div>
        <div className={"largeControl " + (!currentSceneChoiceGiven ? 'inactive' : '')} onClick={this.handleMad}>
          <TransitionGroup>
            { currentSceneChoiceGiven && <MadButton />}
          </TransitionGroup>
        </div>
        <div className={"largeControl " + (!currentSceneChoiceGiven ? 'inactive' : '')} onClick={this.handleSad}>
          <TransitionGroup>
            { currentSceneChoiceGiven && <SadButton />}
          </TransitionGroup>
        </div>
        <div className={"smallControl smallControl--right " + (currentSceneChoiceGiven ? 'inactive' : '')} onClick={!currentSceneChoiceGiven ?this.handleNext: undefined}> 
          <TransitionGroup>
            { !currentSceneChoiceGiven && <NextButton />}
          </TransitionGroup>
        </div> 
      </StoryControlWrapper>

    )
  }
}

export default storyControl;