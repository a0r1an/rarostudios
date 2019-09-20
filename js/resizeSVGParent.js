import anime from "animejs"

export const resizeSVGParent = (element) => {
    var timeout = null;
    if (timeout) clearTimeout(timeout);
    anime.set(element, {scale: 1});
    var pad = 0;
    if(element != null){
      var parentEl = element.parentNode;
      var elOffsetWidth = element.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(element, {scale: ratio}), 10);
    }
  }