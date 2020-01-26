import * as type from './actionTypes';

export const initialState = {
  "chosenPath": '',
  "storyStart": true,
  "currentScene": 0,
  "translateValue": 0,
  "currentSceneChoiceGiven": false,
  "traverseCurrentScene": false,
  "traversedCurrentSceneIndex": 0,
  "moodComplete": true,
  "lastScene": false,
  "scenes": [  
    [
      {
        "src": '1.jpg',
        // either stops here, goes to next view, choose to next view
        "choiceGiven": false,
        "willTraverseNextScene": false,
        "lastScene": false
      }
    ],
    [
      {
        "src": '2.jpg',
        // either stops here, goes to next view, choose to next view
        "choiceGiven": true,
        "willTraverseNextScene": true,
        "lastScene": false
      }
    ],
    [
      {
        "mad": [
          {
            "src": '3.2.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '4.2.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '5.2.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '6.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '7.2.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '8.2.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '8.3.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '8.4.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '8.5.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '15.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": true
          }
        ],
        "sad": [
          {
            "src": '3.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '4.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '5.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '6.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '7.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '8.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '9.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '10.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '11.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '12.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '13.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '14.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": false
          },
          {
            "src": '15.jpg',
            // either stops here, goes to next view, choose to next view
            "choiceGiven": false,
            "lastScene": true
          }
        ]
      }
    ]
  ],
  "storyScenes": []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.RESET_STATE:
      return initialState
    case type.START_STORY:
      return {
        ...state,
        storyStart: false,
      }
    case type.RESTART_STORY:
      return {
        ...state,
        currentSceneChoiceGiven: false,
        storyStart: true,
      }  
    case type.MOOD_COMPLETE:
      return {
        ...state,
        moodComplete: action.value
      }  
    case type.NEXT_SCENE:
      // if last scene reached
      // set lastScene to true
      if(state.traverseCurrentScene){
        return {
          ...state,
          currentSceneChoiceGiven: state.scenes[state.currentScene][0][state.chosenPath][state.traversedCurrentSceneIndex + 1].choiceGiven,
          traversedCurrentSceneIndex: state.traversedCurrentSceneIndex + 1,
          translateValue: state.translateValue + -(340),
          storyScenes: (state.storyScenes.includes(state.scenes[state.currentScene][0][state.chosenPath][state.traversedCurrentSceneIndex + 1].src)) ? state.storyScenes : [...state.storyScenes,state.scenes[state.currentScene][0][state.chosenPath][state.traversedCurrentSceneIndex + 1].src],
          lastScene: state.scenes[state.currentScene][0][state.chosenPath][state.traversedCurrentSceneIndex + 1].lastScene
        }
      }
      return {
        ...state,
        currentSceneChoiceGiven: state.scenes[state.currentScene + 1][0].choiceGiven,
        currentScene: state.currentScene + 1,
        translateValue: state.translateValue + -(340),
        storyScenes: (state.storyScenes.includes(state.scenes[state.currentScene + 1][0].src)) ? state.storyScenes : [...state.storyScenes,state.scenes[state.currentScene + 1][0].src],
        lastScene: state.scenes[state.currentScene + 1][0].lastScene
      }
    case type.PREV_SCENE:
      if(state.traverseCurrentScene && state.traversedCurrentSceneIndex > 0){
        return {
          ...state,
          traversedCurrentSceneIndex: state.traversedCurrentSceneIndex - 1,
          translateValue: state.translateValue + 340,
          currentSceneChoiceGiven: state.scenes[state.currentScene][0][state.chosenPath][state.traversedCurrentSceneIndex - 1].choiceGiven,
          traverseCurrentScene: state.scenes[state.currentScene -1][0].willTraverseNextScene,
          lastScene: state.scenes[state.currentScene -1][0].lastScene
        }
      }
      return {
        ...state,
        currentScene: state.currentScene - 1,
        translateValue: state.translateValue + 340,
        currentSceneChoiceGiven: state.scenes[state.currentScene -1][0].choiceGiven,
        lastScene: state.scenes[state.currentScene -1][0].lastScene,
        traverseCurrentScene: false
      }
    case type.MAD_SCENE:
      if(state.traverseCurrentScene){
        return {
          ...state,
          chosenPath: 'mad',
          currentScene: state.currentScene + 1,
          translateValue: state.translateValue + -(340),
          currentSceneChoiceGiven: state.scenes[state.currentScene][0]['mad'][state.traversedCurrentSceneIndex].choiceGiven,
          storyScenes: [...state.storyScenes.slice(0,state.currentScene+1),state.scenes[state.currentScene][0]['mad'][state.traversedCurrentSceneIndex].src],
          lastScene: state.scenes[state.currentScene][0]['mad'][state.traversedCurrentSceneIndex].lastScene
        }
      }
      return {
        ...state,
        chosenPath: 'mad',
        currentScene: state.currentScene + 1,
        translateValue: state.translateValue + -(340),
        currentSceneChoiceGiven: state.scenes[state.currentScene + 1][0]['mad'][state.traversedCurrentSceneIndex].choiceGiven,
        storyScenes: [...state.storyScenes.slice(0,state.currentScene+1),state.scenes[state.currentScene + 1][0]['mad'][state.traversedCurrentSceneIndex].src],
        traverseCurrentScene: state.scenes[state.currentScene][0].willTraverseNextScene,
        lastScene: state.scenes[state.currentScene + 1][0]['mad'][state.traversedCurrentSceneIndex].lastScene
      }
    case type.SAD_SCENE:
      if(state.traverseCurrentScene){
        return {
          ...state,
          chosenPath: 'sad',
          currentScene: state.currentScene + 1,
          translateValue: state.translateValue + -(340),
          currentSceneChoiceGiven: state.scenes[state.currentScene][0]['sad'][state.traversedCurrentSceneIndex].choiceGiven,
          storyScenes: [...state.storyScenes.slice(0,state.currentScene+1),state.scenes[state.currentScene][0]['sad'][state.traversedCurrentSceneIndex].src],
          lastScene: state.scenes[state.currentScene][0]['sad'][state.traversedCurrentSceneIndex].lastScene
        }
      }
      return {
        ...state,
        chosenPath: 'sad',
        currentScene: state.currentScene + 1,
        translateValue: state.translateValue + -(340),
        currentSceneChoiceGiven: state.scenes[state.currentScene + 1][0]['sad'][state.traversedCurrentSceneIndex].choiceGiven,
        storyScenes: [...state.storyScenes.slice(0,state.currentScene+1),state.scenes[state.currentScene + 1][0]['sad'][state.traversedCurrentSceneIndex].src],
        traverseCurrentScene: state.scenes[state.currentScene][0].willTraverseNextScene,
        lastScene: state.scenes[state.currentScene + 1][0]['sad'][state.traversedCurrentSceneIndex].lastScene
      }
    case type.ADD_TO_SCENES:
      return {
        ...state,
        storyScenes: [...state.storyScenes,state.scenes[state.currentScene][0].src],
      }
    default:
      return state
  }
}

export default reducer