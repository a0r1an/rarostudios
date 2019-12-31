import styled from 'styled-components'
import {animateElement,animateElementTillComplete} from '../js/animation'

const SVGButton = styled.div `
  .innerControl{
    opacity:0;
  }
  span{
    margin: 5px 0 0;
  }
`
const BackButtonContainer = styled.div`
`
const NextButtonContainer = styled.div`
`
export class MadButton extends React.Component {
  componentWillLeave (callback) {
    const svgButton = this.svgButton;
    animateElement(svgButton,'1500','translateY',["0","-20px"],'easeInOutQuint');
    animateElementTillComplete(svgButton,'1500','opacity',[1,0],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  componentWillEnter (callback) {
    const svgButton = this.svgButton;
    animateElement(svgButton,'1500','translateY',["-20px", "0"],'easeInOutQuint');
    animateElementTillComplete(svgButton,'1500','opacity',[0,1],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  render(){
    return (
      <SVGButton ref={svgButton => this.svgButton = svgButton}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 544 544">
          <defs>
            <radialGradient
              id="radial-gradient"
              cx="272"
              cy="272"
              r="272"
              gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ff942a"/>
              <stop offset="0.27" stopColor="#ff912a"/>
              <stop offset="0.47" stopColor="#ff882a"/>
              <stop offset="0.65" stopColor="#ff782a"/>
              <stop offset="0.81" stopColor="#ff612a"/>
              <stop offset="0.96" stopColor="#ff452a"/>
              <stop offset="1" stopColor="#ff3c2a"/>
            </radialGradient>
          </defs>
          <title>mad</title>
          <g id="face"><circle cx="272" cy="272" r="272" fill="url(#radial-gradient)"/></g>
          <path
            id="mouth"
            d="M538,711.17c37.48,0,69-.51,100.27.21,10.59.24,19.42-3.41,13.51-12.21-23.83-35.46-67.09-32.64-113-32.64-46.6,0-84.81-2.14-108.49,34.18-5.79,8.88,3.09,12.25,13.69,12C480.7,711.87,499.69,711.17,538,711.17Z"
            transform="translate(-268.45 -297.47)"
            fill="#2c210b"/>
          <path
            id="eyeLeft"
            d="M409.16,579.42c0,28.08,21.49,40.9,48,40.9s48-12.82,48-40.9-21.49-50.84-48-50.84S409.16,551.34,409.16,579.42Z"
            transform="translate(-268.45 -297.47)"/>
          <ellipse
            id="shimmerLeft"
            cx="185.34"
            cy="254.32"
            rx="14.1"
            ry="17.15"
            fill="#fff"
            fillOpacity="0.2"/>
          <path
            id="eyebrowLeft"
            d="M398.75,512.46c-2.9-3.08-7.25-9.19-2.08-14.15a5.77,5.77,0,0,1,3-1.46c.56-.15,1.24-.29,2-.41a17.83,17.83,0,0,1,6.94.25,552.83,552.83,0,0,1,82.94,25.69l1.94.16c.15.07.13-.62.17-.76.44-2.48-.66-15.37-.36-26,.42-14.89,26.86-5.84,26.94,2.14.34,32.45-.06,51.68-1,55.64"
            transform="translate(-268.45 -297.47)"
            fill="#971c24"/>
          <path
            id="eyeRight"
            d="M669,579c0,28.07-21.49,40.9-48,40.9S573,607,573,579s21.49-50.84,48-50.84S669,550.87,669,579Z"
            transform="translate(-268.45 -297.47)"/>
          <ellipse
            id="shimmerRight"
            cx="335.89"
            cy="253.85"
            rx="14.1"
            ry="17.15"
            fill="#fff"
            fillOpacity="0.2"/>
          <path
            id="eyebrowRight"
            d="M687,515.14c3.13-3.34,7.85-10,2.25-15.35A6.27,6.27,0,0,0,686,498.2c-.61-.16-1.34-.31-2.12-.44a19.29,19.29,0,0,0-7.53.27,600.05,600.05,0,0,0-90,27.88l-2.11.17c-.16.08-.14-.67-.18-.82-.48-2.69.71-16.68.39-28.17-.46-16.16-29.14-6.34-29.23,2.31-.37,35.21.06,56.08,1,60.38"
            transform="translate(-268.45 -297.47)"
            fill="#971c24"/>
        </svg>
        <span>GET MAD</span>
      </SVGButton>
    );
  }
}

export class SadButton extends React.Component {
  componentWillLeave (callback) {
    const svgButton = this.svgButton;
    animateElement(svgButton,'1500','translateY',["0","-20px"],'easeInOutQuint');
    animateElementTillComplete(svgButton,'1500','opacity',[1,0],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  componentWillEnter (callback) {
    const svgButton = this.svgButton;
    animateElement(svgButton,'1500','translateY',["-20px", "0"],'easeInOutQuint');
    animateElementTillComplete(svgButton,'1500','opacity',[0,1],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  render(){
    return (
      <SVGButton ref={svgButton => this.svgButton = svgButton}>
        <svg id="sad" data-name="Sad" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 544 544">
          <defs>
            <linearGradient id="linear-gradientsad" x1="135.98" y1="36.4" x2="408.02" y2="507.6" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ffdc2a"/>
              <stop offset="0.27" stopColor="#ffd32e"/>
              <stop offset="0.71" stopColor="#ffb93a"/>
              <stop offset="0.87" stopColor="#ffaf3f"/>
              <stop offset="0.99" stopColor="#ff9a00"/>
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="1187.92" y1="696.57" x2="1187.92" y2="528.93" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#1ebdd7"/>
              <stop offset="0.71" stopColor="#0075be"/>
              <stop offset="0.99" stopColor="#005b97"/>
            </linearGradient>
          </defs>
          <title>sad</title>
          <g id="face">
            <circle cx="272" cy="272" r="272" fill="url(#linear-gradientsad)"/>
          </g>
          <ellipse id="leftEye" cx="199" cy="205" rx="48" ry="61"/>
          <ellipse id="rightEye" cx="353" cy="205" rx="48" ry="61"/>
          <path id="mouth" d="M1010.78,671.06c37.48,0,71.47,12.42,96.35,32.59,8.23,6.67,19.42-3.41,13.51-12.2A132.76,132.76,0,0,0,899.12,693c-5.79,8.88,5.57,18.81,13.69,12C937.83,684,972.49,671.06,1010.78,671.06Z" transform="translate(-735 -305)" fill="#2c210b"/>
          <path id="leftBrow" d="M928.6,401.86h0a10.14,10.14,0,0,1,1.71-.46c8.48-1.78,36.53,5.94,19.37,20l-.76.39-.63.24c-33.35,13.9-73.58,31.19-86.54,37.28a21.74,21.74,0,0,1-5.45,1.71,13.55,13.55,0,0,1-8.33-1c-3.12-1.51-6.25-4.65-3.89-11a5.74,5.74,0,0,1,1.81-2.46l4.45-3.16C867,432.33,900.57,413.8,928.6,401.86Z" transform="translate(-735 -305)" fill="#71583d"/>
          <path id="rightBrow" d="M1092.76,400.61h0a8.8,8.8,0,0,0-1.7-.46c-8.48-1.79-36.53,5.94-19.37,20l.75.39.63.24c33.36,13.9,73.59,31.19,86.55,37.28a21.74,21.74,0,0,0,5.45,1.71,13.62,13.62,0,0,0,8.33-1c3.12-1.52,6.25-4.65,3.89-11a5.71,5.71,0,0,0-1.81-2.45L1171,442.1C1154.32,431.08,1120.8,412.54,1092.76,400.61Z" transform="translate(-735 -305)" fill="#71583d"/>
          <path id="bigTear" d="M1188.3,696.57c-.55-.39-10.33.28-19.12-1s-16.55-4.61-17-5c-20.89-18.26-10.87-52.84-9-58.71.17-.5.35-1,.56-1.48l44.2-101.37h0l44.2,101.37c.21.49.39,1,.56,1.48,1.93,6,12.32,41.84-10.25,59.78-7.69,4-16.35,3.75-17.6,4.23Z" transform="translate(-735 -305)" fill="url(#linear-gradient-2)"/>
          <path id="smallTear" d="M1190.11,578.92l14.42,27.81a5.1,5.1,0,0,1,.19.55c.66,2.24,4.16,15.63-3.46,22.33-2.59,1.49-5.52,1.4-5.94,1.58l-5.58.29c-.19-.14-3.5.11-6.46-.38a19.8,19.8,0,0,1-5.76-1.89c-7-6.82-3.67-19.74-3-21.93.06-.19.12-.37.19-.56" transform="translate(-735 -305)" fill="#29abe2"/>
        </svg>
        <span>GET SAD</span>
      </SVGButton>   
    );
  }
}

export class BackButton extends React.Component {
  render(){
    return (
      <BackButtonContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="4 5 16 16"><path d="M14 7l-5 5 5 5V7z"/><path fill="none" d="M24 0v24H0V0h24z"/></svg>
        <span>BACK</span>
      </BackButtonContainer>   
    );
  }
}

export class NextButton extends React.Component {
  componentWillLeave (callback) {
    const nextButton = this.nextButton;
    animateElement(nextButton,'1500','translateY',["0","-20px"],'easeInOutQuint');
    animateElementTillComplete(nextButton,'1500','opacity',[1,0],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  componentWillEnter (callback) {
    const nextButton = this.nextButton;
    animateElement(nextButton,'1500','translateY',["-20px", "0"],'easeInOutQuint');
    animateElementTillComplete(nextButton,'1500','opacity',[0,1],'easeInOutQuint').then(()=>{
      callback();
    });
  }
  render(){
    return (
      <NextButtonContainer ref={nextButton => this.nextButton = nextButton}>
        <span>NEXT</span> 
        <svg xmlns = "http://www.w3.org/2000/svg" width="18" height="18" viewBox="4 5 16 16"> <path d="M10 17l5-5-5-5v10z"/> 
          <path fill = "none" d = "M0 24V0h24v24H0z" />
        </svg>
      </NextButtonContainer>   
    );
  }
}