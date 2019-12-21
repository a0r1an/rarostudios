import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  "chosenPath": 0,
  "storyStart": true,
  "currentScene": 0,
  "currentSceneChoiceGiven": false,
  "scenes": [  
    [
      {
        "src": '1.jpg',
        // either stops here, goes to next view, choose to next view
        "choiceGiven": false,
      }
    ],
    [
      {
        "src": '2.jpg',
        // either stops here, goes to next view, choose to next view
        "choiceGiven": true,
      }
    ],
    [
      {
        "src": 'choice1',
        // either stops here, goes to next view, choose to next view
        "choiceGiven": false,
      },
      {
        "src": 'choice2',
        // either stops here, goes to next view, choose to next view
        "choiceGiven": false,
      }
    ]
    
  ]
}
export const goToNextScene = () => {
  return {
    type: 'NEXT_SCENE'
  }
}
export const goBackPreviousScene = () => {
  return {
    type: 'PREV_SCENE'
  }
}
export const startStory = () => {
  return {
    type: 'START_STORY'
  }
}
export const restartStory = () => {
  return {
    type: 'RESTART_STORY'
  }
}
export const actionTypes = {
  START_STORY: 'START_STORY',
  RESTART_STORY: 'RESTART_STORY',
  NEXT_SCENE: 'NEXT_SCENE',
  PREV_SCENE: 'PREV_SCENE',
}

// ACTIONS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_STORY':
      return {
        ...state,
        storyStart: false,
      }
    case 'RESTART_STORY':
      return {
        ...state,
        currentSceneChoiceGiven: false,
        storyStart: true,
      }  
    case 'NEXT_SCENE':
      console.log(state.scenes[state.currentScene + 1][state.chosenPath].choiceGiven);
      return {
        ...state,
        currentSceneChoiceGiven: state.scenes[state.currentScene + 1][state.chosenPath].choiceGiven,
        currentScene: state.currentScene + 1,
      }
    case 'PREV_SCENE':
      return {
        ...state,
        currentScene: state.currentScene - 1,
        currentSceneChoiceGiven: state.scenes[state.currentScene -1][state.chosenPath].choiceGiven,
      }
    default:
      return state
  }
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}