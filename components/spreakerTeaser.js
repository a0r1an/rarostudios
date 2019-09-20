import moment from 'moment';
import styled from 'styled-components'

const SpreakerComponent = styled.section`
  .iframeContainer {
    margin: 0 0 1rem;
  }
`

class SpreakerTeaser extends React.Component {
  render() {
    return (
      <SpreakerComponent>
        <div className="iframeContainer">
          <iframe src={`https://widget.spreaker.com/player?episode_id=${this.props.content.id}&theme=light&playlist=false&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true`} width="100%" height="200px" frameBorder="0"></iframe>
        </div>
        <h3>{this.props.content.title}</h3>
        <span className="date">{moment(this.props.content.publishedAt).format('MMMM Do YYYY')}</span>
      </SpreakerComponent>
    );
  }
}
export default SpreakerTeaser