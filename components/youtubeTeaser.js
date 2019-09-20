const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
import moment from 'moment';
import styled from 'styled-components'

const YoutubeComponent = styled.section`
  .videoContainer {
    justify-self: start;
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
    margin: 0 0 1rem;
  }
  .videoContainer iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
`
class YoutubeTeaser extends React.Component {
  render() {
    return (
      <YoutubeComponent>
         <div className="videoContainer">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.content.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
         </div>
        <h3><a href={`https://www.youtube.com/watch?v=${this.props.content.id}`}>{entities.decode(this.props.content.title)}</a></h3>
        <span className="date">{moment(this.props.content.publishedAt).format('MMMM Do YYYY')}</span>
      </YoutubeComponent>
    );
  }
}
export default YoutubeTeaser