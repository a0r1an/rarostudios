class SoundcloudTeaser extends React.Component {
  render() {
    return (
      <div className="soundcloudTeaser">
        <div className="imgContainer">
          
        </div>
        <h3>{this.props.content.title}</h3>
        <span>{this.props.content.publishedAt}</span>
      </div>
    );
  }
}
export default SoundcloudTeaser