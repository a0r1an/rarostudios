import * as actions from '../../../components/storyPlayer/actions.js'
import * as types from '../../../components/storyPlayer/actionTypes.js'

describe('actions', () => {
  it('should create an action to go to the next scene', () => {
    const expectedAction = {
      type: types.NEXT_SCENE,
    }
    expect(actions.goToNextScene()).toEqual(expectedAction)
  })

  it('should create an action to go to the mad scene', () => {
    const expectedAction = {
      type: types.MAD_SCENE,
    }
    expect(actions.goToMadScene()).toEqual(expectedAction)
  })

  it('should create an action to go to the sad scene', () => {
    const expectedAction = {
      type: types.SAD_SCENE,
    }
    expect(actions.goToSadScene()).toEqual(expectedAction)
  })

  it('should create an action to add to scenes', () => {
    const expectedAction = {
      type: types.ADD_TO_SCENES,
    }
    expect(actions.addToScenes()).toEqual(expectedAction)
  })

  it('should create an action to update mood', () => {
    const expectedAction = {
      type: types.MOOD_COMPLETE,
    }
    expect(actions.updateMood()).toEqual(expectedAction)
  })

  it('should create an action to go back to a previous scene', () => {
    const expectedAction = {
      type: types.PREV_SCENE,
    }
    expect(actions.goBackPreviousScene()).toEqual(expectedAction)
  })

  it('should create an action to start the story', () => {
    const expectedAction = {
      type: types.START_STORY,
    }
    expect(actions.startStory()).toEqual(expectedAction)
  })

  it('should create an action to restart the story', () => {
    const expectedAction = {
      type: types.RESTART_STORY,
    }
    expect(actions.restartStory()).toEqual(expectedAction)
  })
})