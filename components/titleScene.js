import React from 'react'
import styled from 'styled-components'
import anime from "animejs"

const TitleScreenWrapper = styled.div `

  .titleBackground {
    position:absolute;
    z-index: 0;
    width: 332px;
    top: 8px;
  }
  .elbow{
    z-index: 1;
    position: relative;
    width: 200px;
    display: block;
    margin: 100px auto 0;
    opacity: 0;
  }
  .drop{
    z-index: 1;
    position: relative;
    width: 150px;
    display: block;
    margin: 0 auto;
    opacity: 0;
  }
  .startButton {
    position: absolute;
    top: 300px;
    left: 50%;
    margin-left: -40px;
    background-color: #2ae382;
    padding: 12px 0;
    width: 80px;
    color: black;
    border: none;
    text-align: center;
    border-radius: 10px;
    font-size: .75rem;
    cursor: pointer;
    box-shadow: #000000 5px 5px;
    opacity: 0;
    &:hover{
      background-color: #82eba9;
    }
    &:focus {
      background-color: #b7f3cb;
      outline: none;
    }
  }
  .startArrow {
    vertical-align: top;
  }
`
class titleScreen extends React.Component{
  componentDidMount() {
    this.animateElementsTimeline()
  }
  animateElementsTimeline() {
    var tl = anime.timeline({duration: 1500, easing: 'easeOutBounce'});
    tl.add({
      targets: this.dropSvg,
      translateY: [
        -170, 0
      ],
      opacity: {
        easing: 'easeInOutSine',
        duration: 500,
        value: [0, 1]
      }
    }).add({
      targets: this.elbowSvg,
      duration: 500,
      scale: [
        .1, 1
      ],
      opacity: {
        easing: 'easeInOutSine',
        duration: 300,
        value: [0, 1]
      }
    }).add({
      easing: 'easeInOutSine',
      targets: this.startButton,
      duration: 500,
      translateX: [
        -150, 0
      ],
      opacity: {
        easing: 'easeInOutSine',
        duration: 500,
        value: [0, 1]
      }
    })
  }
  beginStory = () => {
    this.props.onStartButton();
  }
  render(){
    return(
      <TitleScreenWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="elbow"
          ref={elbowSvg => (this.elbowSvg = elbowSvg)}
          viewBox="0 0 1275.81 455.56">
          <title>2Asset 4</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Draw_Layer" data-name="Draw Layer"><path
              d="M72.13,158.24c-23,4.92-62.71,11.12-68.18,55.29,3.67,28.8-32.42,214.33,60,237.27,3.71-3.52,72.77,14.86,109.7-6.52,1.16,3.26,50.45-65.24-65-74.31-24.14-49,56.6-1.28,55.51-61.09,0,.23,0,.46-.05.68-1.63-11.4,1.63-25.08-37.38-22.27l.22,0c-32.21,6.89-73.42-33.5,27.38-53.17,12.42-2.18,39.86-87.54-82.22-75.91Z"
              fill="#497dea"/><path
              d="M246.45,159.61c-7.42,5.3-36,8.77-38.15,50.76,8,46.73-7.1,173.25,57.2,237.87,37.57,29.43,195.35-36.1,103.45-86.47-16.2-6.14-37,16.66-57.65,3.91C294.7,343.83,336,150.81,246.45,159.61Z"
              fill="#497dea"/><path
              d="M481.93,118.09c-74.66,24.6-40.39,66.8-43.69,165.64C416.7,584,769.38,388.05,578.55,273.7c31.83-58.49,10.17-167.29-96.62-155.61Zm29.27,122c-27.34-2.14-47.29-77.63,16.65-53.1,18.48,9.51,15.84,55.59-16.65,53.1Zm-2.36,96.29c57.49-50.15,112.72,66.22,23.49,65.29-7,1.17-38.15-27.45-23.49-65.29Z"
              fill="#497dea"/><path
              d="M869.9,199.85l.15.62c-1.2-2.6,1.15-.22-5.33-12.55l.18.34c-17-33-32.92-91.83-86.35-89.89l2.25.07c-53.63.27-87,14.12-86.32,136.48-.12,2.46-.36,5.75-.55,19.2C668.75,525.45,956.8,475.42,869.9,199.85ZM694.49,234.67l.06-1.88C694.54,233.49,694.52,234.06,694.49,234.67ZM789.81,333c-24.86,0-45-32.24-45-72s20.14-72,45-72,45,32.24,45,72S814.66,333,789.81,333Z"
              fill="#497dea"/><path
              d="M1054.32,226.63c-17.5-65-18.47-188.76-76-193C938.55,28.65,907,89.81,922.9,107.24c-2.37,17.14,7,54.3,17.3,93.76,85,310.6,172.43,172.32,184.34,125,3,2.47,6.55,5.22,10.72,8.27l-.08-.05c2.13,1.38-.61-.36,8.66,6.07l-.33-.21c38.07,39,125.82-.05,127.61-47.38a203.68,203.68,0,0,1,2.94-26.53c5.39-31.52-.1-100.56-39.23-229.95l.21.87c-3.43-13.38-16.18-41.82-40.71-36.44-28.11,19.11-65.56,31.23-31.65,126-.17-.71-.33-1.42-.5-2.12,3.1,8.58,65.89,235.46-10.23,117.3-.53-2.83-.46,1.72-8.34-30.62-.54-2.81-.1.64-4.21-15,.18.71.34,1.41.51,2.11C1131.81,81,1113.81-27,1070.55,81.15c-6.16,52.82,17.48,143,16.26,197.85-.12,5.25-9,9-18,0"
              fill="#497dea"/></g>
            <g id="Draw_Layer-2" data-name="Draw Layer" opacity="0.51"><path
              d="M22.37,272.42c-.21,3.08-.4,6.16-.51,9.26s0,6,0,9c.09,5.6.39,11.19.7,16.77.66,11.76,1.56,23.53,3,35.21.55,4.39,1.32,8.76,2,13.13.61,4,1.08,8,1.51,12.07.27,3,.56,6,.89,9a5.37,5.37,0,0,0,2.47,3.43,5.62,5.62,0,0,0,7.73-1.78l.6-1.32a5.55,5.55,0,0,0,.09-3c-.08-.78-.17-1.56-.25-2.35-.64-6.76-1.35-13.49-2.38-20.2-.89-5.92-1.83-11.83-2.49-17.78-.93-9.93-1.64-19.87-2.21-29.82-.28-5-.44-10-.52-15-.05-2.51-.09-5,0-7.51.11-2.91.29-5.82.49-8.73A5.63,5.63,0,0,0,28.13,267H28a5.66,5.66,0,0,0-5.58,5.42Zm13.32,60.45c0,.16,0,.32.05.48,0-.16,0-.32-.05-.48Z"
              fill="#fff"/><path
              d="M160.29,425.37a38.11,38.11,0,0,1-5.86,5.64,36.12,36.12,0,0,1-6.13,3c-2.71,1-5.41,1.91-8.2,2.67a5.59,5.59,0,0,0,2.64,10.87,89.78,89.78,0,0,0,12.64-4.44c1-.42,1.9-.87,2.85-1.33a23.66,23.66,0,0,0,4.76-3.3,39.08,39.08,0,0,0,5-4.91l.91-1.11a5.58,5.58,0,0,0,.86-2.8,5.62,5.62,0,0,0-5.43-5.78h-.15a5.32,5.32,0,0,0-3.86,1.52Z"
              fill="#fff"/><path
              d="M361.91,371.29a40.13,40.13,0,0,0-5,.52c-1.41.24-2.8.6-4.21.92s-2.7.75-4.05,1.12l-5.24,1.39A5.59,5.59,0,0,0,346,386.11c2.63-.7,5.28-1.34,7.88-2.14a40.82,40.82,0,0,1,6.58-1.43,35.1,35.1,0,0,1,6.95.16,34.67,34.67,0,0,1,6.05,1.86c.76.38,1.51.78,2.26,1.19a5.68,5.68,0,0,0,7.7-1.77,5.61,5.61,0,0,0-1.77-7.7,40.4,40.4,0,0,0-9.36-3.91,35.41,35.41,0,0,0-8.81-1.12c-.53,0-1.07,0-1.6,0Z"
              fill="#fff"/><path
              d="M281.77,239.6a5.37,5.37,0,0,0-1.76,3.9c.86,12.76,1.3,25.54,2.57,38.27,0-.12,0-.24,0-.37.6,6.18,1.13,12.37,1.76,18.56.77,7.38,1.73,14.74,2.56,22.13s1.84,15,2.89,22.52a5.38,5.38,0,0,0,2.47,3.43,5.6,5.6,0,0,0,7.72-1.77,6,6,0,0,0,.69-4.3c-1-6.91-1.84-13.83-2.68-20.75-.4-3.29-.71-6.59-1.14-9.88q-.69-5.4-1.29-10.82l-.33-3.16c-.53-5.9-1.06-11.81-1.67-17.71,0,.25.06.5.08.74-1.22-12.15-1.59-24.36-2.41-36.54a6,6,0,0,0-1.51-4,5.68,5.68,0,0,0-3.9-1.76h-.17a5.59,5.59,0,0,0-3.84,1.52ZM295.05,296l.12,1.17-.12-1.17Zm.48,4.64.12,1.2-.12-1.2Zm-11.15.1c0-.14,0-.28-.05-.42,0,.14,0,.28.05.42Zm-.05-.42,0-.34c0-.25-.05-.49-.08-.73,0,.35.08.71.11,1.07Z"
              fill="#fff"/><path
              d="M610.88,368.38a5.94,5.94,0,0,0-2.67,3.26c-1.18,2.87-2.35,5.72-3.61,8.55a103.15,103.15,0,0,1-13.34,21.63c-.86,1-1.73,2.05-2.68,3a32.48,32.48,0,0,1-3.32,2.77c-2.32,1.61-4.86,2.91-7.32,4.29a5.59,5.59,0,0,0,5.34,9.83c4.55-2.55,9.2-5.05,13-8.73a61,61,0,0,0,5-5.86c1.4-1.76,2.74-3.58,4-5.43,5.76-8.23,9.83-17.47,13.61-26.73a5.39,5.39,0,0,0-.43-4.33,5.64,5.64,0,0,0-3.27-2.67,5.39,5.39,0,0,0-1.64-.25,5.63,5.63,0,0,0-2.69.68Z"
              fill="#fff"/><path
              d="M508.76,129.46a5.6,5.6,0,0,0-1.76,3.9,5.66,5.66,0,0,0,1.51,4,6,6,0,0,0,3.91,1.76l2.08.28a25.06,25.06,0,0,1,4.64,1.48c2.55,1.24,5.1,2.5,7.66,3.73a36.54,36.54,0,0,1,6.29,3.8c1.88,1.67,3.65,3.47,5.43,5.26q1.77,1.77,3.5,3.62c1.22,1.3,2.5,2.58,3.63,4,1.92,2.37,5.8,2.23,7.91.25a5.6,5.6,0,0,0,1.76-3.91,5.87,5.87,0,0,0-1.51-4c-1.33-1.63-2.84-3.14-4.3-4.66s-2.69-2.81-4.09-4.16c-2.79-2.71-5.48-5.46-8.82-7.53a97.39,97.39,0,0,0-9.32-4.78,53.15,53.15,0,0,0-7-3.11,43.63,43.63,0,0,0-7.53-1.4l-.42,0a5.59,5.59,0,0,0-3.58,1.54Z"
              fill="#fff"/><path
              d="M737.46,121.9a152.38,152.38,0,0,0-14.28,12.58c-2.42,2.52-4.68,5.18-6.86,7.91a25.07,25.07,0,0,0-3.31,6.19c-.62,1.49-1.22,3-1.84,4.49a5.39,5.39,0,0,0,.43,4.32,5.59,5.59,0,0,0,7.59,2.25,6,6,0,0,0,2.67-3.27c.72-1.74,1.41-3.5,2.15-5.23a23.94,23.94,0,0,1,2.18-3.28,99,99,0,0,1,8.18-8.71c3.44-3.19,7.11-6.13,10.76-9.09,2.37-1.92,2.22-5.81.24-7.92a5.66,5.66,0,0,0-3.9-1.76h-.16a5.91,5.91,0,0,0-3.85,1.52Z"
              fill="#fff"/><path
              d="M840.47,375.67c-1.56,2.37-3.12,4.76-4.78,7.07-1.37,1.92-2.85,3.76-4.35,5.58-3.21,3.75-6.59,7.36-9.86,11.06-1.67,1.9-3.37,3.77-5.2,5.51-.84.79-1.76,1.5-2.65,2.23s-2,1.72-2.93,2.59a5.59,5.59,0,0,0,7.66,8.15c1.37-1.23,2.76-2.45,4.19-3.62a45.19,45.19,0,0,0,4.06-3.89c2.67-2.82,5.18-5.8,7.81-8.67,3-3.27,5.83-6.64,8.59-10.1,2.53-3.17,4.73-6.58,7-10a5.65,5.65,0,0,0-1.78-7.72,5.4,5.4,0,0,0-2.92-.85,5.76,5.76,0,0,0-4.8,2.62Z"
              fill="#fff"/><path
              d="M963.93,58.11a113,113,0,0,0-11.4,8.27c-1.5,1.28-2.93,2.63-4.37,4a52.4,52.4,0,0,0-5,5.79c-1.37,1.74-2.67,3.53-4,5.34a37.06,37.06,0,0,0-4.79,9.4,27.55,27.55,0,0,0-1.24,6.56q-.27,3.58-.56,7.17a5.61,5.61,0,0,0,5.41,5.76,5.67,5.67,0,0,0,5.76-5.42c.23-2.8.36-5.63.72-8.42A28.46,28.46,0,0,1,945.93,92a62.44,62.44,0,0,1,6.81-10c1.65-1.9,3.37-3.67,5.2-5.4s3.56-3.11,5.42-4.56,3.92-2.72,5.92-4A6,6,0,0,0,972,64.68a5.61,5.61,0,0,0-3.7-7,6.1,6.1,0,0,0-1.74-.25,4.77,4.77,0,0,0-2.59.69Z"
              fill="#fff"/><path
              d="M1095.85,336.14a5.39,5.39,0,0,0-3.43,2.47,89.68,89.68,0,0,1-4.83,9,85.13,85.13,0,0,1-5.28,7.33c-1.58,1.85-3.22,3.63-4.87,5.42s-3.34,3.79-4.94,5.73c-1.09,1.31-2.18,2.61-3.29,3.9a6,6,0,0,0-1.76,3.9,5.62,5.62,0,0,0,5.42,5.77,5.35,5.35,0,0,0,4-1.52c1.52-1.78,3-3.57,4.52-5.38,1.72-2,3.47-4,5.3-5.95,2.21-2.33,4.24-4.81,6.24-7.33a78.41,78.41,0,0,0,9-14.94c.2-.44.4-.88.61-1.32a5.61,5.61,0,0,0-5.37-7.26,5.28,5.28,0,0,0-1.31.16Z"
              fill="#fff"/><path
              d="M1164.37,335.15a5.64,5.64,0,0,0,3.69,7,97.75,97.75,0,0,0,10.16,2.2c2.8.44,5.62.69,8.44.9s5.57.33,8.36.36a67.73,67.73,0,0,0,10.45-.91,5.41,5.41,0,0,0,3.43-2.47,5.61,5.61,0,0,0-1.77-7.73,6,6,0,0,0-4.3-.69l-2.81.37a79.29,79.29,0,0,1-10.79,0c-3.6-.21-7.19-.53-10.76-1.05-2.39-.47-4.74-1-7.1-1.69a6.2,6.2,0,0,0-1.59-.21,5.57,5.57,0,0,0-5.41,3.9Z"
              fill="#fff"/><path
              d="M1195.77,13.4a5.62,5.62,0,0,0-1.75,3.91,5.37,5.37,0,0,0,1.51,4c2.12,1.89,4.24,3.76,6.43,5.56a51.39,51.39,0,0,1,7.81,7.58,31.67,31.67,0,0,1,2.86,5.24,93.63,93.63,0,0,1,3.22,14.93c.5,3,4,4.81,6.77,4.13a5.62,5.62,0,0,0,3.42-2.47,5.89,5.89,0,0,0,.7-4.3c-1.13-6.81-2.15-13.78-5.37-20a35.24,35.24,0,0,0-6.22-8.38,76.48,76.48,0,0,0-6.81-5.89c-1.58-1.33-3.12-2.71-4.66-4.09a5.84,5.84,0,0,0-3.9-1.76h-.18a5.6,5.6,0,0,0-3.83,1.51Z"
              fill="#fff"/></g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="drop"
          ref={dropSvg => (this.dropSvg = dropSvg)}
          viewBox="0 0 952.65 497.7">
          <title>2Asset 3</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Draw_Layer" data-name="Draw Layer"><path
              d="M45.84,167.66C36.07,175.51-3,182.9.19,220.8,9.37,298-1.32,387.16,38.8,464.2l-.68-1.3c55.05,95.53,174-18.94,145.09-181.43l0,.2c-.11-.51.11.32-1.71-7.31v.15C177.31,250.78,135,145.32,45.84,167.66ZM81,279.93c104.26-14.86,4.59,247.76-9.7,30,.36-7.28-9.75-31.15,9.7-30Z"
              fill="#497dea"/><path
              d="M310,114.15c-.1,5-69.07-23.38-69.6,106.76,0-.27,0-.52,0-.79-.46,1.73.75,23.81,4,36.34l0-.25c8,37.09-.19,74.27,22.18,151h0c.89,2.45.22.69,1.65,4.79l-.07-.2c.26,42.29,110.82,100.71,84-98.64l.15,0c5.67,4.82-1.07-3.56,15.86,20.78l-.47-.95c1.54,3.23-.57-1.82,16.31,27h0c14.55,19.21,14.78,56.07,43.71,69.36,3.58,2.53,58.91,5.07,39.93-51.59h0c-.11-.21,0,.07-.42-.79l.17.39c-38.42-64.67-83.13-41.19-52.55-178-1.58-1.15,5.69-1.15-4.89-30.24l0,.06c-7.41-8.79.88-15.17-32.17-40.58l.45.31c-3.74-.05-11.54-15.54-68.31-14.82Zm3.3,116c-72.38-34.37,52.76-103.35,65.26-34.56-7.93,22.29-34.52,40-65.26,34.56ZM257,220.74l0-.44c0,.22,0,.43,0,.65v-.21Z"
              fill="#497dea"/><path
              d="M696.38,176.37c-.34-1.48-.66-3-1-4.44.09.4.19.81.29,1.22-.3-1.43,0-1.4-3.88-15.83l.24,1c-18.5-37.46-35.36-116.83-97.29-112.41-.3,3-26-5.91-57.4,49.43.23-.38.47-.75.71-1.12-2.7,5-2.6,3.14-5.24,16v0c.05,4.43-9.47.39,17.12,197.24C589.58,464.8,749.31,357.22,696.38,176.37Zm-110,82.15v0a1.33,1.33,0,0,0,0-.19.83.83,0,0,1,0,.15c-12.56-93-8.06-91.13-8.08-93.22v0c1.25-6.1,1.2-5.21,2.47-7.59l-.33.53c14.87-26.15,27-21.94,27.13-23.36,29.28-2.09,37.25,35.43,46,53.13,0-.16-.07-.31-.11-.47a76.1,76.1,0,0,1,1.83,7.49c0,.14.07.28.1.42,0-.18-.07-.31-.1-.42s-.09-.39-.14-.59c.17.71.33,1.41.49,2.12C680.64,282.06,605.14,332.9,586.4,258.52Z"
              fill="#497dea"/><path
              d="M802.6.08c-16.25,5.1-13.6-5.16-45.43,18l.8-.7C724.14,47,731.5,39.12,774.63,287.19c8.92,33.9,113.14,99.69,77.63-101.91,2.52-16.81,46.68-29.48,85-60.39,13-9,63.62-128.42-134.67-124.81Zm17.06,126.48C705.37,60.41,963.21-9.21,869.87,113.1c-12.28,7.52-8.58,13.62-50.21,13.46Z"
              fill="#497dea"/></g>
            <g id="Draw_Layer-2" data-name="Draw Layer" opacity="0.51"><path
              d="M790.14,262.44a5.64,5.64,0,0,0-4.11,6.75c.71,2.69,1.4,5.37,2.36,8a41.7,41.7,0,0,0,3.61,7.57,43.69,43.69,0,0,0,13.1,13.08,5.6,5.6,0,1,0,5.95-9.49c-1-.69-2-1.41-3-2.16a42.74,42.74,0,0,1-5.46-5.63,39.52,39.52,0,0,1-3.61-6.76c-.83-2.37-1.46-4.79-2.1-7.23a5.7,5.7,0,0,0-5.46-4.27,5.32,5.32,0,0,0-1.3.16Z"
              fill="#fff"/><path
              d="M904,34.24a5.68,5.68,0,0,0-1.76,3.9,5.36,5.36,0,0,0,1.52,4c1.65,1.36,3.27,2.75,4.89,4.13s3.61,2.94,5.41,4.41L913,49.78q1.71,1.41,3.44,2.8a41.69,41.69,0,0,1,5.91,5.82,19.64,19.64,0,0,1,1.43,2.82,60.9,60.9,0,0,1,2.07,7.8,5.6,5.6,0,0,0,10.89-2.65,58.33,58.33,0,0,0-2.22-8.22,40.34,40.34,0,0,0-1.6-3.84,22.3,22.3,0,0,0-2.27-3.42,24.34,24.34,0,0,0-2.38-2.69,64.54,64.54,0,0,0-5.93-5.15c-1.74-1.39-3.48-2.81-5.23-4.21s-3.42-2.92-5.15-4.35l-1.11-.91a5.6,5.6,0,0,0-2.79-.85h-.17A5.64,5.64,0,0,0,904,34.24Z"
              fill="#fff"/><path
              d="M614.28,62.76a40,40,0,0,0-10.22,1.89,5.59,5.59,0,1,0,2.64,10.87c1.44-.4,2.88-.81,4.34-1.14a21.65,21.65,0,0,1,2.41-.41,17.48,17.48,0,0,1,2.61.09,29.78,29.78,0,0,1,4.3,1.45A33.83,33.83,0,0,1,626.21,79a69.76,69.76,0,0,1,7.66,7.62,5.6,5.6,0,0,0,9.68-3.67,5.79,5.79,0,0,0-1.52-4,57.82,57.82,0,0,0-6.58-6.7,44.28,44.28,0,0,0-6.27-4.74A42.61,42.61,0,0,0,624,64.93a24.52,24.52,0,0,0-9.45-2.17Z"
              fill="#fff"/><path
              d="M578.94,330.47a5.62,5.62,0,0,0-3.42,2.47,5.39,5.39,0,0,0-.7,4.28A59.94,59.94,0,0,0,579,347.67a47.62,47.62,0,0,0,5.17,7.21,38,38,0,0,0,7.23,6.59,28.7,28.7,0,0,0,6.86,3.23,26.5,26.5,0,0,0,4.79,1.22l1.47.25a5.51,5.51,0,0,0,2.85-.68,5.6,5.6,0,0,0,2.25-7.6,5.34,5.34,0,0,0-3.27-2.67,33.25,33.25,0,0,1-7-2.07,23.9,23.9,0,0,1-3-1.93,54.4,54.4,0,0,1-5.47-5.78,36.19,36.19,0,0,1-3.47-6.05q-.86-2.38-1.65-4.81a5.88,5.88,0,0,0-2.47-3.41,5.53,5.53,0,0,0-3-.86,5.26,5.26,0,0,0-1.3.16Z"
              fill="#fff"/><path
              d="M278.07,376.34a5.66,5.66,0,0,0-3.42,2.47c-.2.44-.41.88-.61,1.33a5.55,5.55,0,0,0-.09,3c.39,3.3.76,6.58,1.27,9.86.44,2.9,1.11,5.79,1.76,8.65,1.3,5.77,2.76,11.51,4.34,17.21a5.6,5.6,0,0,0,10.88-2.64c-1.59-5.66-2.95-11.37-4.31-17.09-.68-2.86-1.23-5.76-1.76-8.65-.6-3.29-.9-6.66-1.29-10a5.32,5.32,0,0,0-2.47-3.43,5.66,5.66,0,0,0-3-.85,5.87,5.87,0,0,0-1.32.15Z"
              fill="#fff"/><path
              d="M351.39,131.1a5.6,5.6,0,0,0-2.24,7.59,5.39,5.39,0,0,0,3.26,2.67,48.76,48.76,0,0,1,8,2.48q2.52,1.28,4.92,2.77a63.48,63.48,0,0,1,5.2,3.9,5.44,5.44,0,0,0,4.29.7,5.59,5.59,0,0,0,4.12-6.77A5.94,5.94,0,0,0,376.5,141c-1.5-1.18-3-2.38-4.58-3.47a46.24,46.24,0,0,0-16.21-6.88,8.27,8.27,0,0,0-1.75-.21,5.21,5.21,0,0,0-2.57.64Z"
              fill="#fff"/><path
              d="M50.54,187.12a66.6,66.6,0,0,0-11.43,9.35,132.8,132.8,0,0,0-9.25,9.88c-1.7,2-3.42,4.05-5,6.21-1.37,1.93-2.6,3.93-3.8,6A32.25,32.25,0,0,0,18.24,225a71.27,71.27,0,0,0-1.64,7.51,6.12,6.12,0,0,0,.43,4.33,5.6,5.6,0,0,0,7.59,2.24,5.32,5.32,0,0,0,2.67-3.26,49.44,49.44,0,0,1,2.56-9.93,59.93,59.93,0,0,1,6.87-10.39c2.61-3.11,5.27-6.15,8.16-9A105.66,105.66,0,0,1,54.33,198c.51-.34,1-.68,1.56-1a5.69,5.69,0,0,0,2.25-7.6,5.88,5.88,0,0,0-5-3,4.81,4.81,0,0,0-2.56.71Z"
              fill="#fff"/><path
              d="M118.22,445.3a5.48,5.48,0,0,0-3.43,2.47,57,57,0,0,1-5.47,8.64c-1.78,2-3.63,4-5.6,5.8-2.21,2.06-4.55,4-6.85,5.93a5.59,5.59,0,0,0,3.65,9.67,5.77,5.77,0,0,0,4-1.52,122.44,122.44,0,0,0,11-10,52.79,52.79,0,0,0,4.9-6,63,63,0,0,0,3.91-6.56,5.89,5.89,0,0,0,.7-4.3,5.59,5.59,0,0,0-5.46-4.28,5.79,5.79,0,0,0-1.31.15Z"
              fill="#fff"/></g>
          </g>
        </svg>
        <img src="/static/img/elbowDrop/titleBackground.jpg" alt="Title Screen" className="titleBackground"/>
        <button className="startButton" ref={startButton => (this.startButton = startButton)} onClick={this.beginStory}>START
          <svg
            className="startArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>
      </TitleScreenWrapper>
    )
  }
}

export default titleScreen;