import YoutubeTeaser from '../components/YoutubeTeaser'

class TeaserSection extends React.Component {
  render() {
    const { data, dataType } = this.props;
    // let button;
    // if(error) {
    //   return <div>
    //     < h3>{error}</h3>
    //   </div>;
    // }
    // if (isLoading) {
    //   return <div>
    //     <h2>Latest {topic}</h2>
    //     <p>Loading ...</p>
    //   </div>;
    // }
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