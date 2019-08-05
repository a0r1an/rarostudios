import YoutubeTeaser from '../components/YoutubeTeaser'
import SoundcloudTeaser from '../components/soundcloudTeaser'
import PostsTeaser from '../components/postsTeaser'
import styled from 'styled-components'

const TeaserArea = styled.section`
  padding: 3rem 0;
  font-family: 'roboto', serif;
  h2 {
    font-size: 1em;
    text-transform: uppercase;
    font-family: 'Roboto slab', serif;
    letter-spacing: 1px;
    text-align: center;
    margin: 0 0 2rem;
  }
  span {
    margin: .25rem 0 0;
    display: block;
    font-size: .875em;
  }
  h3 {
    margin: .5rem 0 0;
    font-size: 1.5em;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .sectionoff {
    margin: 0 4rem;
    display: grid;
    grid-template-rows: [first] 1fr [second] 1fr [third] auto [end];
    grid-row-gap: 6rem;
  }
  .videoContainer {
    justify-self: start;
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
  }
  .videoContainer iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
  .button {
    display: block;
    background: #000;
    color: #fff;
    text-decoration: none;
    max-width: 200px;
    width: 100%;
    text-align:center;
    padding: 10px 0;
  }
  @media (min-width: 1024px) {
    .sectionoff {
      display: grid;
      grid-template-columns: [abc] 1fr [bca] 1fr [end];
      grid-column-gap: 3rem;
      grid-template-rows: [first] 1fr [second] auto;
    }
    .button {
      grid-column-start: abc;
      margin: 0 auto;
      grid-column-end: end;
    }
  }
`

class TeaserSection extends React.Component {
  render() {
    const { data, dataType,color } = this.props;
    if (data.length < 1) {
      return <div>
        <h2>Latest {dataType}</h2>
        <p>Sorry, No {dataType} to show...</p>
      </div>;
    }
    return (
      <TeaserArea style={{background: color}}>
        <div className="container">
          <h2>Latest {dataType}</h2>
          {dataType == 'videos' &&
            <div className="sectionoff">
              {data.map(item =>
                <YoutubeTeaser key={item.id} content={item} />
              )}
              <a className="button" target="_blank" href={`https://www.youtube.com/channel/${process.env.YOUTUBE_CHANNEL_ID}`}>See all {dataType}</a>
            </div>
          }
          {dataType == 'podcasts' &&
            <div className="sectionoff">
              {data.map(item =>
                <SoundcloudTeaser key={item.id} content={item} />
              )}
              <a className="button" target="_blank" href={`https://soundcloud.com/${process.env.PODCAST_CHANNEL}`}>See all {dataType}</a>
            </div>
          }
          {dataType == 'posts' &&
            <div className="sectionoff">
              {data.map(item =>
                <PostsTeaser key={item.id} content={item} />
              )}
              <a className="button" target="_blank" href={`${process.env.URL}/posts`}>See all {dataType}</a>
            </div>
          }
        </div>
      </TeaserArea>
    );
  }
}
export default TeaserSection