import Link from 'next/link'
import styled from 'styled-components'
import Anime from 'react-anime'
import anime from "animejs"
import { resizeSVGParent } from '../js/resizeSVGParent.js'

const HeroArea = styled.div`
  position: relative;
  font-size: 0.4rem;
  border-bottom: 5px solid #efefef;
  .alien {
    position: absolute;
    bottom:0;
    right: 6em;
    width: 80px;
  }
  .fullscreenWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1100px;
    height: 550px;
    margin: -275px 0 0 -550px;
  }
  .circleContainer {
    position: absolute;
    top: 50%;
    overflow: visible;
    margin-top: -140px;
    stroke: transparent;
    stroke-width: 1px;
    color: #acacac;
      width: 10px;
    circle {
      fill: pink;
      opacity: .5;
    }
  }
  h2 {
    margin: 0;
    padding: 7rem 2rem 14rem;
    color: black;
    font-family: 'Roboto slab';
    font-size: 3em;
    text-align: center;
    line-height: 1.7;
  }
  @media (min-width: 800px) {
    h2 {
      font-size: 5em;
    }
    .alien {
      width: 100px;
    }
  }
`
class Hero extends React.Component{
  componentDidMount() {
    this.animateEyeball();
    let circleElements = document.querySelectorAll('.circleContainer');
    // circleElements.
    for (var i = 0; i < circleElements.length; i++) {
      this.timelineAnimation(circleElements[i]);
    }
    resizeSVGParent(this.animWrapper);
    // this.circleAnimation();
    window.addEventListener('resize', resizeSVGParent(this.animWrapper));
  }

  

  createKeyframes = (value) => {
    var keyframes = [];
    for (var i = 0; i < 30; i++) keyframes.push({ value: value });
    return keyframes;
  }

  // circleAnimation = () => {
  timelineAnimation = (el) => {
    let easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];
    let animation = anime.timeline({
      targets: el,
      duration: function() { return anime.random(4000, 8000); },
      easing: function() { return easings[anime.random(0, easings.length - 1)]; }
      // complete: function(anim) { this.timelineAnimation(anim.animatables[0].target); },
    })
    .add({
      translateX: this.createKeyframes(function(el) { return anime.random(-520, 520);}),
      translateY: this.createKeyframes(function(el) { return anime.random(-280, 280);}),
      rotate: this.createKeyframes(function() { return anime.random(-180, 180); }),
    }, 0);
    animation.add({
      targets: el,
      r: this.createKeyframes(function() { return anime.random(32, 72); }),
      width: this.createKeyframes(function() { return anime.random(64, 120); }),
      height: this.createKeyframes(function() { return anime.random(5, 30); }),
    }, 0);
  }
  animateEyeball = () => {
    anime({
      targets: this.eyeBall,
      duration: 600,
      loop: true,
      keyframes: [
        {translateX: 150, translateY: 150, delay: 5000},
        {translateX: -250, translateY: 150, delay: 500},
        {translateX: -150, translateY: -150, delay: 500},
        {translateX: 0, translateY: 0, delay: 500}
      ],
      easing: 'linear',
    });
  };

  render() {
    let circles =[0,1,,2,3,4,5,6,7,8,9,10,11,12,13];
   
    return (
      <HeroArea>
        <div className="fullscreenWrapper"  ref={animWrapper => (this.animWrapper = animWrapper)}>
          {circles.map((key) =>
              <svg key={key} className="circleContainer" viewBox="0 0 96 96">
                <circle cx="48" cy="48" r="32" fillRule="evenodd" strokeLinecap="square" />
              </svg>
          )}
        </div>
        <h2>Hi, stranger!<br /> This is a place where we<br /> make stories for your pleasure.</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2700 3284.62" className="alien">
          <title>Kika</title>
          <g id="fcb5c842-9a57-4760-b68a-e3da4d38f581" data-name="antenna">
            <path d="M1746.17,1410.86s-84-278.81-25.1-441.22,109.74-293,107.7-461.74l-2-168.77,42.68,3.18s15.24,241.15-4.07,343.92c-5.85,31.15-128,350.28-117.86,461.74s36.58,245.2,36.58,245.2Z" fill="#2be383"/>
            <circle cx="620.08" cy="123" r="107.69" fill="#2be383"/>
            <circle cx="1835.46" cy="246.08" r="107.69" fill="#2be383"/>
            <path d="M737.17,1033s102-215.89,30.46-341.64S634.48,464.54,636.94,333.86l2.47-130.69-51.78,2.47s-18.5,186.73,4.93,266.3c7.1,24.12,155.34,271.23,143,357.53s-44.38,189.86-44.38,189.86Z" fill="#2be383"/>
          </g>
          <g id="f79174ad-e224-4532-ba3c-58f0d3502127" data-name="body">
            <path d="M245.83,3217.37,21.52,1444.27s395.21-603.5,886.55-405.9,1057.45,576.8,1682.31-90.79c16,256.36,21.36,304.42,21.36,304.42s42.73,667.58-37.38,865.19,74.77,945.3,106.81,1073.47S245.83,3217.37,245.83,3217.37Z" fill="#2be383"/>
          </g>
          <g id="f537c0bf-ffcb-4028-aed1-dea44d897acf" data-name="eye"  ref={eyeBall => (this.eyeBall = eyeBall)}>
            <Anime
              duration={500}
              delay={5000}
              loop={true}
              easing="easeInSine"
              direction={'alternate'}
              d={{value:
                  [
                    'M1163.16,2117.38a302.28,501.57 0 1,0 604.56,0a302.28,501.57 0 1,0 -604.56,0',
                    'M1163.16,2117.38a302.28,1 0 1,0 604.56,0a302.28,1 0 1,0 -604.56,0'
                  ]}}
            >
              <path className="eye" d="M1163.16,2117.38a302.28,501.57 0 1,0 604.56,0a302.28,501.57 0 1,0 -604.56,0" fill="#a9b7b1"/>
            </Anime>
            <Anime
              duration={500}
              delay={5000}
              loop={true}
              easing="easeOutExpo"
              direction={'alternate'}
              opacity={0}
              >
              <path d="M1381.38,1761.75c-2.69,17.4-17.68,27.06-28.07,35.72-41.94,35-53.62,90.83-59.27,117.84-9,43.3-16.06,76.82-10.26,110.65.92,5.31,3.8,20.27-4.39,28.58-7.45,7.55-22.92,8.44-31.51,1.46-7.27-5.9-7.76-15.93-8.06-25.65-1.3-41.21-2-61.81,2.2-88.66,2.59-16.85,5.08-33,11-55,4.79-17.86,24.8-87.83,78.4-144.36,12.78-13.47,22.76-21.21,32.1-18.89C1375.75,1726.51,1383.81,1746,1381.38,1761.75Z" fill="#fff"/>
            </Anime>
            <Anime
              duration={500}
              delay={5000}
              loop={true}
              easing="easeOutExpo"
              direction={'alternate'}
              opacity={0}
              >
              <path d="M1503.44,2525c4.77-15,21.21-21.45,32.83-27.68,46.91-25.13,65.36-72.77,74.27-95.8,14.3-36.93,25.37-65.51,23.38-96.1-.31-4.8-1.51-18.37,7.82-24.58,8.49-5.65,24.4-4.34,32.36,3,6.73,6.18,6.06,15.08,5.24,23.68-3.48,36.48-5.22,54.72-12.58,77.82-4.62,14.49-9,28.36-17.63,46.93-7,15.08-35.58,74-96.92,116.58-14.62,10.14-25.71,15.62-35,12.31C1505.08,2556.82,1499.12,2538.56,1503.44,2525Z" fill="#fff"/>
            </Anime>
          </g>
          <g id="f813e1e1-6a84-41a8-a5b6-4e920c066c60" data-name="mouth">
            <path d="M2469.22,4160.89c9.06-32.89,44.61-142.51,123.2-173.88a45.57,45.57,0,0,1,8.29-2.34c13.92-2.64,36.7-11.25,57.89-22.68,38.26-20.64,81.21-31.27,124.64-29.43,41.81,1.77,86.62,11.21,111,39.66,15.64,15.63,55.06,85.68,59,98.39,3.47,11.27,36.93,51.76,76.5,81.23a43.92,43.92,0,0,1,17.23,42.46c-6.62,39.1-44.35,66.8-62.45,71.78-23.3,6.41-131.23,33.86-189.86,7.61a44.36,44.36,0,0,1-7.23-4.09c-14.18-9.76-48.18-34.13-139.13,3.32-8.58,3.82-159.81,40.19-180.19-92.37A47.11,47.11,0,0,1,2469.22,4160.89Z"/>
            <path d="M2741.22,4253.05c-50.56-135.07-203.92-114.61-270.15-98.63-.71,2.39-1.33,4.57-1.85,6.47a47.11,47.11,0,0,0-1.14,19.66c20.38,132.56,171.61,96.19,180.19,92.37C2690.09,4255.7,2719.87,4251.56,2741.22,4253.05Z" fill="#ff81a7"/>
          </g>
          <g id="b3223681-1172-4a58-8a83-ecaf17be70ca" data-name="mouth">
            <path d="M1200,3068.59c9.06-32.9,44.6-142.52,123.2-173.88a44,44,0,0,1,8.29-2.34c13.91-2.65,36.69-11.25,57.89-22.69,38.26-20.64,81.21-31.27,124.64-29.43,41.81,1.77,86.62,11.21,111,39.66,15.64,15.64,55.06,85.68,59,98.39,3.47,11.27,36.93,51.76,76.5,81.23a43.92,43.92,0,0,1,17.23,42.46c-6.62,39.1-44.35,66.8-62.45,71.78-23.3,6.42-131.23,33.86-189.86,7.61a45.59,45.59,0,0,1-7.24-4.08c-14.17-9.76-48.17-34.13-139.12,3.31-8.58,3.82-159.81,40.19-180.19-92.37A47.05,47.05,0,0,1,1200,3068.59Z"/>
            <path d="M1472,3160.74c-50.55-135.07-203.91-114.6-270.14-98.63-.71,2.39-1.33,4.57-1.85,6.48a47.05,47.05,0,0,0-1.14,19.65c20.38,132.56,171.61,96.19,180.19,92.37C1420.86,3163.39,1450.64,3159.25,1472,3160.74Z" fill="#ff81a7"/>
          </g>
          <g id="fbe4f937-0afb-428e-9b48-a9790eebbee9" data-name="frecks">
            <ellipse cx="2070.58" cy="2431.56" rx="30.93" ry="34.37" fill="#ff81a7"/>
            <ellipse cx="2252.58" cy="2536.56" rx="30.93" ry="34.37" fill="#ff81a7"/>
            <ellipse cx="2044.58" cy="2686.56" rx="30.93" ry="34.37" fill="#ff81a7"/>
            <ellipse cx="865.03" cy="2531.31" rx="26.79" ry="31.59" fill="#ff81a7"/>
            <ellipse cx="612.35" cy="2534.92" rx="30.93" ry="40.4" fill="#ff81a7"/>
            <ellipse cx="761.02" cy="2783.52" rx="24.01" ry="23.86" fill="#ff81a7"/>
          </g>
          <g id="e8d5e721-a057-4687-bfca-a0e6288a2c74" data-name="SHADE">
            <path d="M2574.36,2117.19c80.11-197.61,37.38-865.19,37.38-865.19s-5.34-48.06-21.36-304.42a1641.86,1641.86,0,0,1-121.58,117.66c-32.87,395.78-104.39,1406.35,8,1557,20.82,67.58,90.94,298.23,76.9,610.63,84.65-9.93,132.14-23.65,127.51-42.16C2649.13,3062.49,2494.25,2314.79,2574.36,2117.19Z" fill="#2bd087"/>
          </g>
        </svg>
      </HeroArea>
    )
  }
}

export default Hero