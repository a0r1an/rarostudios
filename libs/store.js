import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  "storyStart": false,
  "chosenPath": 0,
  "currentScene": 0,
  "scenes": [  
    [
      {
        "content": 'here that goes',
        // either stops here, goes to next view, choose to next view
        "choiceGiven": true,
        "choices": []
      }
    ],
    {
      2: [
        {
          0: {
            "content": 'here that goes',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": true,
            "choices": []
          }
        }
      ]
    }
  ]
}
export const goToNextScene = () => {
  return {
    type: 'NEXT_SCENE'
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