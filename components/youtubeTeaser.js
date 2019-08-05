const Entities = require('html-entities').XmlEntities;
const entities = new Entities();
import moment from 'moment';

class YoutubeTeaser extends React.Component {
  render() {
    return (
      <div className="youtubeTeaser">
         <div className="videoContainer">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.content.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
         </div>
        <span>{moment(this.props.content.publishedAt).format('MMMM Do YYYY')}</span>
        <h3><a href={`https://www.youtube.com/watch?v=${this.props.content.id}`}>{entities.decode(this.props.content.title)}</a></h3>
      </div>
    );
  }
}
export default YoutubeTeaser