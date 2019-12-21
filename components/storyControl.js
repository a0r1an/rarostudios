import React from 'react'
import styled from 'styled-components'
import {MadButton, SadButton} from './svgButtons'
import TransitionGroup from 'react-addons-transition-group';

const StoryControlWrapper = styled.div `
  display: inline-flex;
  width: 100%;
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
    &:hover span, &:hover svg{
      transform: translateX(-2px);
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
  }
  handleMadClick(){
    console.log('this');
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
      <StoryControlWrapper> 
        <div className="smallControl" onClick={this.handleBack}>
          {/* <TransitionGroup>
              { !currentSceneChoiceGiven && 
                <React.Fragment> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="4 5 16 16"><path d="M14 7l-5 5 5 5V7z"/><path fill="none" d="M24 0v24H0V0h24z"/></svg>
                  <span>BACK</span>
                {/* </React.Fragment>
              }
          </TransitionGroup> */}
        </div>
        <div className={"largeControl " + (!currentSceneChoiceGiven && 'inactive')} >
          <TransitionGroup>
            { currentSceneChoiceGiven && <MadButton onClick={this.handleMadClick} key="1" />}
          </TransitionGroup>
        </div>
        <div className={"largeControl " + (!currentSceneChoiceGiven && 'inactive')} >
          <TransitionGroup>
            { currentSceneChoiceGiven && <SadButton onClick={this.handleMadClick} key="2" />}
          </TransitionGroup>
        </div>
        <div className="smallControl smallControl--right" onClick={this.handleNext}> 
          <span>NEXT</span> 
          <svg xmlns = "http://www.w3.org/2000/svg" width="18" height="18" viewBox="4 5 16 16"> <path d="M10 17l5-5-5-5v10z"/> 
            <path fill = "none" d = "M0 24V0h24v24H0z" />
          </svg>
        </div> 
      </StoryControlWrapper>

    )
  }
}

export default storyControl;