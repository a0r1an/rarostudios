import React from 'react'
import styled from 'styled-components'
import {animateElementTillComplete, animateElement} from '../../../libs/animation'

const SceneWrapper = styled.li `
  position: relative;
  z-index: 1;
  opacity: 0;
  display: inline-block;
  margin: 0 8px 0 0;
  width: 100%;
  height: 100%;
`
class Scene extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillLeave (callback) {
    animateElementTillComplete(this.sceneWrapper,'500','opacity',[1,0],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  componentWillEnter (callback) {
    animateElementTillComplete(this.sceneWrapper,'1500','opacity',[0,1],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  componentDidMount(){
    animateElement(this.sceneWrapper,'1500','opacity',[0,1],'easeInOutQuint');
  }
  render(){
    const scene = this.props.scene;
    return(
      <SceneWrapper ref={sceneWrapper => (this.sceneWrapper = sceneWrapper)}>
        <img src={`/static/img/elbowDrop/scenes/${scene}`}/>
      </SceneWrapper>
    )
  }
}

export default Scene;