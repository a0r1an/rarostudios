import anime from "animejs"

export const animateElement = (target,duration,propertyToAnimate,propertyValue,easing) => {
  anime({
    targets: target,
    duration: duration,
    [propertyToAnimate]: propertyValue,
    easing: easing,
  });
}

export const animateElements = (targets,duration,propertyToAnimate,propertyValue,easing) => {
  if(propertyValue.includes(",")){
    console.log('here');
    propertyValue = propertyValue.split(',');
  }
  if(Array.isArray(propertyValue)){
    var updatedPropertyValue = function() {
      return anime.random(propertyValue[0], propertyValue[1]);
    }
  }
  anime({
    targets: targets,
    duration: duration,
    [propertyToAnimate]: updatedPropertyValue,
    easing: easing,
  });
}

export const animateElementsKeyFrame = (targets,duration,propertyToAnimate,propertyValue,easing) => {
  anime({
    targets: targets,
    duration: duration,
    direction: 'normal',
    keyframes: [
      {[propertyToAnimate]: '-170px'},
      {[propertyToAnimate]: propertyValue},
    ],
    easing: easing,
  });
}