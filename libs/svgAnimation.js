import anime from "animejs"

export const madFaceAnimation = (el) => {
  var madFace = anime.timeline({
    easing: 'easeInExpo',
    loop: true,
    direction: 'alternate',
  });
  madFace.add({
    targets: el,
    translateX: ["0","30px","0","-30px","0","30px","0","-30px","0","-30px", 0],
    duration: 2050,
    delay: 1000,
    endDelay: 1000
  })
}

export const sadFaceAnimation = (faceInside,rightEye,leftEye,leftBrow,rightBrow,bigTear) => {
  var sadE = anime.timeline({
    easing: 'easeOutQuint',
    loop: true,
    direction: 'alternate',
    targets: faceInside,
  });
  sadE.add({
    translateY: ["0","80px"],
    duration: 1050,
    translateX: ["0","30px"],
    delay: 1000
  })
  sadE.add({
    translateX: ["30px","-30px"],
  })

  var re = anime.timeline({
    easing: 'easeOutQuint',
    loop: true,
    direction: 'alternate',
    targets: rightEye,
  });
  re.add({
    translateY: 20,
    ry: "40",
    duration: 1050,
    delay: 1000,
    endDelay: 1000
  })
  var le = anime.timeline({
    easing: 'easeOutQuint',
    loop: true,
    direction: 'alternate',
    targets: leftEye,
  });
  le.add({
    translateY: 20,
    ry: "40",
    duration: 1050,
    delay: 1000,
    endDelay: 1000
  })

  var lb = anime.timeline({
    easing: 'easeOutQuint',
    loop: true,
    direction: 'alternate',
    targets: leftBrow,
  });
  lb.add({
    translateY: ["-305","-270"],
    translateX: ["-735","-735"],
    duration: 1050,
    delay: 1000,
    endDelay: 1000
  })

  var rb = anime.timeline({
    easing: 'easeOutQuint',
    loop: true,
    direction: 'alternate',
    targets: rightBrow,
  });
  rb.add({
    translateY: ["-305","-270"],
    translateX: ["-735","-735"],
    duration: 1050,
    delay: 1000,
    endDelay: 1000
  })

  var sadT = anime.timeline({
    easing: 'easeInOutQuint',
    duration: 750,
    targets: bigTear,
    loop: true,
  });
  sadT.add({
    duration: 50,
    opacity: 0
  })
  sadT.add({
    duration: 50,
    translateX: "-735px",
    translateY: "-305px"
  })
  sadT.add({
    opacity: 1
  })
  sadT.add({
    translateY: "-205px"
  })
  sadT.add({
    opacity: 0
  },'-=600')
  sadT.add({
    translateX: "-1080px",
    translateY: "-305px",
  })
  sadT.add({
    opacity: 1
  })
  sadT.add({
    translateY: "-205px",
  })
  sadT.add({
    opacity: 0
  },'-=600')
}