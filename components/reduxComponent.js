import React from 'react'
import TitleScene from '../components/titleScene'
import StoryControl from '../components/storyControl'
import styled from 'styled-components'

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
    height: 457px;
    padding: 8px;
    flex-wrap: wrap;
    margin: 0 auto;
    z-index: 2;
  }
`
class reduxComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentScene = this.props.currentScene
    return (
      <ReduxWrapper>
        <div className="sceneContainer">
          {currentScene == 0 &&
            <TitleScene dispatch={this.props.dispatch}/>
          }
        </div>
        {currentScene >= 1 &&
          <StoryControl dispatch={this.props.dispatch}/>
        }
      </ReduxWrapper>
    )
  }
}
export default reduxComponent