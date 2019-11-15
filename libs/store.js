import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  "chosenPath": 0,
  "currentScene": "scene-1",
  "scenes": [
    {
      "scene-1": [
        {
          0: {
            "content": 'here that goes',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": true,
            "choices": []
          }
        }
      ]
    },
    {
      "scene-2": [
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_SCENE':
      return {
        ...state,
        currentScene: action.currentScene,
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

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}