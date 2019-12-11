import React from 'react'
import styled from 'styled-components'
import {MadButtonOff, MadButtonOn} from './svgButtons'
import {animateElement} from '../js/animation'

const StoryControlWrapper = styled.div `
  display: inline-flex;
  border: 1px solid #dfdfdf;
  border-top: none;
  width: 366px;
  z-index: 1;
  .smallControl {
    flex: 0 0 20%;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-right: 1px solid #dfdfdf;
    justify-content: center;
    &:nth-of-type(4) {
      border-right: none;
    }
    span {
      font-size: .75rem;
    }
    svg {
      vertical-align: middle;
    }
  }
  .largeControl {
    flex: 0 0 30%;
    text-align: center;
    padding: 8px 0 5px;
    border-right: 1px solid #dfdfdf;
    cursor: pointer;
    svg {
      width: 34px;
      display: block;
      margin: 0 auto;
    }
    span {
      font-size: .75rem;
    }
  }
`
class storyControl extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    animateElement(this.wrapperSelect,'1500','translateY',[-100,0],'easeInOutQuint')
  }
  
  handleMadClick(){
    console.log('this');
  }
  render(){
    const scenes = this.props.scenes;
    const currentScene = this.props.currentScene;
    const chosenPath = this.props.chosenPath;
    const choosePath =  scenes[currentScene][chosenPath].choiceGiven;
    console.log(scenes[currentScene][chosenPath].choiceGiven);
    return(
      <StoryControlWrapper ref={wrapperSelect => (this.wrapperSelect = wrapperSelect)}> 
        <div className="smallControl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="4 5 16 16"><path d="M14 7l-5 5 5 5V7z"/><path fill="none" d="M24 0v24H0V0h24z"/></svg>
          <span>BACK</span>
        </div>
        {choosePath ? (
          <React.Fragment>
            <MadButtonOn onClick={this.handleMadClick} />
            <MadButtonOn onClick={this.handleMadClick} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <MadButtonOff />
            <MadButtonOff />
          </React.Fragment>
        )}
        <div className="smallControl"> 
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