import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment';

const StoryTeaser = styled.div`
  margin: 0 0 3rem;
  .imgContainer {
    margin: 0 0 2em;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: [abc] 3fr [bca] 1  fr [end];
    grid-column-gap: 3rem;
    grid-template-rows: [first] 1fr [second] auto;
    grid-template-areas: "column-2 column-1";
    .imgContainer { grid-area: column-2; }
    .contentContainer { 
      padding: 2rem 0 0;
      grid-area: column-1; 
    }

  }
`
class StoriesTeaser extends React.Component {
  render() {
    return (
      <StoryTeaser>
        <div className="imgContainer">
          <Link href="/elbow-drop">
            <a>
              <img src="/static/img/elbowDrop/teaser.jpg" />
            </a>
          </Link>
        </div>
        <div className="contentContainer">
          <h3>
            <Link href="/elbow-drop" >
              <a>Elbow Drop</a>
            </Link>
          </h3>
          <span className="date">January 23rd 2020</span>
        </div>
      </StoryTeaser>
    );
  }
}
export default StoriesTeaser