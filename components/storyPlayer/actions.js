import * as type from './actionTypes';

export const goToNextScene = () => {
  return {
    type: type.NEXT_SCENE
  }
}
export const goToMadScene = () => {
  return {
    type: type.MAD_SCENE
  }
}
export const goToSadScene = () => {
  return {
    type: type.SAD_SCENE
  }
}
export const addToScenes = () => {
  return {
    type: type.ADD_TO_SCENES
  }
}
export const updateMood = value => {
  return {
    type: type.MOOD_COMPLETE,
    value: value
  }
}
export const goBackPreviousScene = () => {
  return {
    type: type.PREV_SCENE
  }
}
export const startStory = () => {
  return {
    type: type.START_STORY
  }
}
export const restartStory = () => {
  return {
    type: type.RESTART_STORY
  }
}
export const resetState = () => {
  return {
    type: type.RESET_STATE
  }
}