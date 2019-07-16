import YoutubeTeaser from '../components/YoutubeTeaser'

class TeaserSection extends React.Component {
  render() {
    const { data, dataType } = this.props;
    if (data.length < 1) {
      return <div>
        <h2>Latest {dataType}</h2>
        <p>Sorry, No {dataType} to show...</p>
      </div>;
    }
    return (
      <div>
        <h2>Latest {dataType}</h2>
        {dataType == 'videos' &&
          <div className="sectionoff">
            {data.map(item =>
              <YoutubeTeaser key={item.id} content={item} />
            )}
            <a className="button" target="_blank" href={`https://www.youtube.com/channel/${process.env.YOUTUBE_CHANNEL_ID}`}>See all videos</a>
          </div>
        }
      </div>
    );
  }
}
export default TeaserSection