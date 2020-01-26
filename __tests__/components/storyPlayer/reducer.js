import reducer from '../../../components/storyPlayer/reducer.js'
import * as type from '../../../components/storyPlayer/actionTypes.js'
import {initialState} from '../../../components/storyPlayer/reducer.js'
import { mockState } from '../../../mocks/mockState.js'

describe('storyPlayer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer([], {})).toEqual(
      []
    )
  })
  it('should handle START_STORY', () => {
    expect(
      reducer([], {
        type: type.START_STORY,
      })
    ).toEqual(
      {
        storyStart: false
      }
    )
    expect(
      reducer(
        initialState,
        {
          type: type.START_STORY,
        }
      )
    ).toEqual(
      {
        ...initialState,
        storyStart: false,
      }
    )
  })
  it('should handle RESTART_STORY', () => {
    expect(
      reducer([], {
        type: type.RESTART_STORY,
      })
    ).toEqual(
      {
        currentSceneChoiceGiven: false,
        storyStart: true
      }
    )
    expect(
      reducer(
        initialState,
        {
          type: type.RESTART_STORY,
        }
      )
    ).toEqual(
      {
        ...initialState,
        currentSceneChoiceGiven: false,
        storyStart: true,
      }
    )
  })
  it('should handle MOOD_COMPLETE', () => {
    expect(
      reducer([], {
        type: type.MOOD_COMPLETE,
        value: true
      })
    ).toEqual(
      {
        moodComplete: true
      }
    )
    expect(
      reducer(
        initialState,
        {
          type: type.MOOD_COMPLETE,
          value: true
        }
      )
    ).toEqual(
      {
        ...initialState,
        moodComplete: true
      }
    )
  })
  it('should handle ADD_TO_SCENES', () => {
    expect(
      reducer(
        initialState,
        {
          type: type.ADD_TO_SCENES
        }
      )
    ).toEqual(
      {
        ...initialState,
        storyScenes: ['1.jpg']
      }
    )
  })
  it('should handle SAD_SCENE', () => {
    expect(
      reducer(
        mockState,
        {
          type: type.SAD_SCENE
        }
      )
    ).toEqual(
      {
        ...mockState,
          chosenPath: 'sad',
          currentScene: mockState.currentScene + 1,
          translateValue: mockState.translateValue + -(340),
          currentSceneChoiceGiven: mockState.scenes[mockState.currentScene + 1][0]['sad'][mockState.traversedCurrentSceneIndex].choiceGiven,
          storyScenes: [...mockState.storyScenes.slice(0,mockState.currentScene+1),mockState.scenes[mockState.currentScene + 1][0]['sad'][mockState.traversedCurrentSceneIndex].src],
          traverseCurrentScene: mockState.scenes[mockState.currentScene][0].willTraverseNextScene,
          lastScene: mockState.scenes[mockState.currentScene + 1][0]['sad'][mockState.traversedCurrentSceneIndex].lastScene
      }
    )
  })
  it('should handle MAD_SCENE', () => {
    expect(
      reducer(
        mockState,
        {
          type: type.MAD_SCENE
        }
      )
    ).toEqual(
      {
        ...mockState,
          chosenPath: 'mad',
          currentScene: mockState.currentScene + 1,
          translateValue: mockState.translateValue + -(340),
          currentSceneChoiceGiven: mockState.scenes[mockState.currentScene + 1][0]['mad'][mockState.traversedCurrentSceneIndex].choiceGiven,
          storyScenes: [...mockState.storyScenes.slice(0,mockState.currentScene+1),mockState.scenes[mockState.currentScene + 1][0]['mad'][mockState.traversedCurrentSceneIndex].src],
          traverseCurrentScene: mockState.scenes[mockState.currentScene][0].willTraverseNextScene,
          lastScene: mockState.scenes[mockState.currentScene + 1][0]['mad'][mockState.traversedCurrentSceneIndex].lastScene
      }
    )
  })
  it('should handle PREV_SCENE', () => {
    expect(
      reducer(
        mockState,
        {
          type: type.PREV_SCENE
        }
      )
    ).toEqual(
      {
        ...mockState,
        currentScene: mockState.currentScene - 1,
        translateValue: mockState.translateValue + 340,
        currentSceneChoiceGiven: mockState.scenes[mockState.currentScene -1][0].choiceGiven,
        lastScene: mockState.scenes[mockState.currentScene -1][0].lastScene,
        traverseCurrentScene: false
      }
    )
  })
  it('should handle NEXT_SCENE', () => {
    expect(
      reducer(
        mockState,
        {
          type: type.NEXT_SCENE
        }
      )
    ).toEqual(
      {
        ...mockState,
        currentSceneChoiceGiven: mockState.scenes[mockState.currentScene + 1][0].choiceGiven,
        currentScene: mockState.currentScene + 1,
        translateValue: mockState.translateValue + -(340),
        storyScenes: (mockState.storyScenes.includes(mockState.scenes[mockState.currentScene + 1][0].src)) ? mockState.storyScenes : [...mockState.storyScenes,mockState.scenes[mockState.currentScene + 1][0].src],
        lastScene: mockState.scenes[mockState.currentScene + 1][0].lastScene
      }
    )
  })
})