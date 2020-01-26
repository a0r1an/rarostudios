import React from 'react'
import styled from 'styled-components'
import {BackButton, NextButton, MadButton, SadButton} from './svgButtons'
import {animateElementTillComplete} from '../../../libs/animation'
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
  button:disabled {
    color: inherit;
  }
  .smallControl {
    flex: 0 0 20%;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
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
    &:focus {
      outline: none;
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
    border: none;
    padding: 8px 0 5px;
    border-right: 1px solid #dfdfdf;
    cursor: pointer;
    height: 65px;
    transition: 1.5s background;
    &.inactive{
      background: #fbfbfb;
    }
    &:focus{
      outline: none;
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
  .largeControl-mad:hover:not(.inactive) {
    background: #ffbebe;
  }
  .largeControl-sad:hover:not(.inactive) {
    background: #bec9ff;
  }
  .inactive {
    cursor: initial;
  }
`
class storyControl extends React.Component{
  constructor(props) {
    super(props);
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
  updateMood = value => {
    this.props.onUpdateMood(value);
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
  hoverEffect = (e) => {
  }
  render(){
    const currentSceneChoiceGiven = this.props.currentSceneChoiceGiven;
    return(
      <StoryControlWrapper ref={storyControl => (this.storyControl = storyControl)}> 
        <button className="smallControl" onClick={this.handleBack}  disabled={!this.props.moodComplete}>
          <BackButton/>
        </button>
        <button className={"largeControl largeControl-mad " + (!currentSceneChoiceGiven ? 'inactive' : '')} onClick={this.handleMad} onMouseEnter={this.hoverEffect} onMouseLeave={this.hoverEffect} disabled={!currentSceneChoiceGiven}>
          <TransitionGroup>
            { currentSceneChoiceGiven && <MadButton updateMood={this.updateMood} />}
          </TransitionGroup>
        </button>
        <button className={"largeControl largeControl-sad " + (!currentSceneChoiceGiven ? 'inactive' : '')} onClick={this.handleSad} disabled={!currentSceneChoiceGiven}>
          <TransitionGroup>
            { currentSceneChoiceGiven && <SadButton updateMood={this.updateMood} />}
          </TransitionGroup>
        </button>
        <button className={"smallControl smallControl--right " + ((currentSceneChoiceGiven || this.props.lastScene) ? 'inactive' : '')} onClick={!currentSceneChoiceGiven ?this.handleNext: undefined} disabled={!this.props.moodComplete || this.props.lastScene}> 
          <TransitionGroup>
            { (!currentSceneChoiceGiven && !this.props.lastScene) && <NextButton />}
          </TransitionGroup>
        </button> 
      </StoryControlWrapper>

    )
  }
}

export default storyControl;