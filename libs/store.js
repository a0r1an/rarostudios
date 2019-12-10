import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  "chosenPath": 0,
  "storyStart": true,
  "currentScene": 0,
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
        "src": 'here that goes',
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
export const startStory = () => {
  return {
    type: 'START_STORY',
    action: true
  }
}
export const actionTypes = {
  START_STORY: 'START_STORY',
  NEXT_SCENE: 'NEXT_SCENE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

// ACTIONS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_STORY':
      return {
        ...state,
        storyStart: action.storyStart,
      }
    case 'NEXT_SCENE':
      return {
        ...state,
        currentScene: state.currentScene + 1,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
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