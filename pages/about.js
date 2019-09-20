import Header from '../components/header'
import styled from 'styled-components'
const AboutPage = styled.section`
  .aboutContainer {
    background: #f9f9f9;
    padding: 3rem;
  }
  h2{
    color:#bdbdbd;
    font-size: .875em;
    margin: 0 0 1rem;
  }
  h3{
    color: #5a5a5a;
    margin: 0 0 1rem;
    font-size: 1.25em;
  }
  p{
    font-size: 1.25em;
    line-height: 1.75;
    margin: 0 0 1rem;
  }
  img {
    width: 100%;
    max-width: 200px;
  }
`
class About extends React.Component{
  
  render(){
    return (
    <AboutPage>
      <Header />
      <div className="container">
        <div className="aboutContainer">
          <h2>About</h2>
          <h3>Welcome to Raro Studios!</h3>
          <p>For as long as I can remember I have loved stories. Stories told in movies I grew up with like Aladdin and Pee Wee’s Big Adventure to the stories I read in books like Harry Potter. The worlds they created, transported me without having to travel to distant and make believe lands. From the barren lands of Tatooine to the neon laced streets of Neo Tokyo, no place was off limits. The characters these stories introduced gave me a broader spectrum of how people actually are. Not everybody acts the same or has the same motivations. Woody’s sole desire in life is to be there for Andy while The Bride’s entire life revolves around getting revenge on those who wronged her.</p>

          <p>The ability to create these characters and places has been something I have admired for a long time and the past couple of years I have realized that I have always longed for the ability to do the same. To create worlds and to tell stories that have been percolating in mind since I was a kid. These ideas can’t just stay in my head anymore. I have to let them out into the world for my sanity and hopefully for your enjoyment.</p>

          <p>Raro studios is essentially a place where ideas can take some form of reality. I hope it can immerse you into a world and introduce you to characters you haven't seen or met before.</p>
          <p>Sincerly,</p>
          <img src="/static/img/ae-signature.png" alt="my name" width="200" />
        </div>
      </div>
    </AboutPage>
    )
  }
}

export default About