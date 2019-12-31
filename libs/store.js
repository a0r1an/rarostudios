import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  "chosenPath": 0,
  "storyStart": true,
  "currentScene": 0,
  "translateValue": 0,
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
        "mad": {
          "src": '3.2.jpg',
          // either stops here, goes to next view, choose to next view
          "choiceGiven": false,
        },
        "sad": {
          "src": '3.jpg',
          // either stops here, goes to next view, choose to next view
          "choiceGiven": false,
        }
      }
    ]
  ],
  "storyScenes": []
}
export const goToNextScene = () => {
  return {
    type: 'NEXT_SCENE'
  }
}
export const goToMadScene = () => {
  return {
    type: 'MAD_SCENE'
  }
}
export const goToSadScene = () => {
  return {
    type: 'SAD_SCENE'
  }
}
export const addToScenes = () => {
  return {
    type: 'ADD_TO_SCENES'
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
  SAD_SCENE: 'SAD_SCENE',
  MAD_SCENE: 'MAD_SCENE',
  ADD_TO_SCENES: 'ADD_TO_SCENES',
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
      return {
        ...state,
        currentSceneChoiceGiven: state.scenes[state.currentScene + 1][state.chosenPath].choiceGiven,
        currentScene: state.currentScene + 1,
        translateValue: state.translateValue + -(340),
        storyScenes: [...state.storyScenes,state.scenes[state.currentScene + 1][state.chosenPath].src],
      }
    case 'PREV_SCENE':
      return {
        ...state,
        currentScene: state.currentScene - 1,
        translateValue: state.translateValue + 340,
        currentSceneChoiceGiven: state.scenes[state.currentScene -1][state.chosenPath].choiceGiven,
      }
    case 'MAD_SCENE':
      return {
        ...state,
        currentScene: state.currentScene + 1,
        translateValue: state.translateValue + -(340),
        currentSceneChoiceGiven: state.scenes[state.currentScene +1][state.chosenPath].choiceGiven,
        storyScenes: [...state.storyScenes,state.scenes[state.currentScene + 1][0]['mad'].src],
      }
      case 'SAD_SCENE':
        return {
          ...state,
          currentScene: state.currentScene + 1,
          translateValue: state.translateValue + -(340),
          currentSceneChoiceGiven: state.scenes[state.currentScene +1][state.chosenPath].choiceGiven,
          storyScenes: [...state.storyScenes,state.scenes[state.currentScene + 1][0]['sad'].src],
        }
      case 'ADD_TO_SCENES':
        return {
          ...state,
          storyScenes: [...state.storyScenes,state.scenes[state.currentScene][state.chosenPath].src],
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