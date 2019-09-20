class SoundcloudTeaser extends React.Component {
  render() {
    return (
      <div className="soundcloudTeaser">
        <div className="iframeContainer">
          <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.content.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
        </div>
        <h3>{this.props.content.title}</h3>
        <span>{this.props.content.publishedAt}</span>
      </div>
    );
  }
}
export default SoundcloudTeaser