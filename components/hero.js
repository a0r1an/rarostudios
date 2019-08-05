import Link from 'next/link'
import styled from 'styled-components'

const HeroArea = styled.section`
  padding: 3rem 0 8rem;
  text-align: center;
  .text_contain{
    font-family: 'Roboto';
    margin: 0 0 1rem;
    h2 {
      font-family: 'Roboto slab';
      margin: 1rem 0 0;
    }
    span {
      text-transform: lowercase;
      font-style: italic;
      font-size: .6em;
      display: block;
      margin: 0 0 1rem;
    }
    p {
      width: 50%;
      margin: 0 auto;
      font-size: .8em;
      line-height: 1.4;
    }
  }
  .hero_contain {
    margin:0 3rem;
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
  }
  iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
  @media (min-width: 600px) {
    .hero_contain {
      margin: 0rem 0;
      padding-bottom: 0;
      position: relative;
      text-align: center;
      height: 100%;
    }
    iframe {
      position:relative;
      width: 600px;
      height: 338px;
      margin: 0 auto;
    }
  }
  @media (min-width: 1200px) {
    padding: 8rem 0;
    display: grid;
    grid-template-columns: 40%  60%;
    grid-template-rows: 100%;
    .text_contain {
      grid-column-start: first;
      grid-column-end: second;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      h2 {
        font-size: 4em;
      }
    }
    .hero_contain {
      grid-column-start: 2;
      grid-column-end: 2;
    }
  }
`
class Hero extends React.Component{
  render() {
    return (
      <HeroArea>
        <div className="text_contain">
          <h2>Animo</h2>
          <span>A SHORT FILM</span>
          <p>Animo is a film about two pieces of cereal falling in love with each other.</p>
        </div>
        <div className="hero_contain">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/quaQRYTLSRM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        
      </HeroArea>
    )
  }
}

export default Hero