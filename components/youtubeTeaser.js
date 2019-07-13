class YoutubeTeaser extends React.Component {
  render() {
    return (
      <div className="youtubeTeaser">
         <div className="videoContainer">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.content.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
         </div>
        <h3><a href={`https://www.youtube.com/watch?v=${this.props.content.id}`}>{this.props.content.title}</a></h3>
        <span>{this.props.content.publishedAt}</span>
      </div>
    );
  }
}
export default YoutubeTeaser