import anime from "animejs"

export const animateElement = (target,duration,propertyToAnimate,propertyValue,easing,delay=0) => {
  anime({
    targets: target,
    duration: duration,
    [propertyToAnimate]: propertyValue,
    easing: easing,
    delay: delay
  });
}

export const animateElementTillComplete = async (target,duration,propertyToAnimate,propertyValue,easing) => {
  var a = anime({
    targets: target,
    duration: duration,
    [propertyToAnimate]: propertyValue,
    easing: easing,
  });
  await a.finished.then(() => {
    return;
  })
}

export const animateElements = (targets,duration,propertyToAnimate,propertyValue,easing) => {
  if(propertyValue.includes(",")){
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