import anime from "animejs"

export const animateElement = (target,duration,propertyToAnimate,propertyValue,easing) => {
  
  if(propertyValue.includes(",")){
    propertyValue = propertyValue.split(',');
  }
  anime({
    targets: target,
    duration: duration,
    [propertyToAnimate]: propertyValue,
    easing: easing,
  });
    // anime({
    //   targets: target, 
    //   duration: 1500,
    //   width: '100%',
    //   easing: 'easeInOutQuint',
    // });
    // anime({
    //   targets: this.headline,
    //   duration: 1500,
    //   translateX: ['-50px','0px'],
    //   easing: 'easeInOutQuint'
    // });
    // anime({
    //   targets: this.border,
    //   duration: 1500,
    //   width: '50px',
    //   easing: 'easeInOutQuint'
    // });
}