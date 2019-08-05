import Header from '../components/Header'
import Hero from '../components/Hero'
import TeaserSection from '../components/TeaserSection'
import {fetchYoutubeFeed, fetchSoundcloudFeed, fetchSanityFeed} from '../utils'

class Index extends React.Component{
  
  static async getInitialProps() {
      let youTubeData = await fetchYoutubeFeed();
      let soundCloudData = await fetchSoundcloudFeed();
      let sanityData = await fetchSanityFeed();
      return { youTubeData,soundCloudData,sanityData }
  }
  render(){
    return (
    <div>
      <Header />
      <Hero/>
      <TeaserSection data={this.props.youTubeData} color="rgb(222, 80, 80)" dataType="videos"  />
      <TeaserSection data={this.props.soundCloudData} color="rgb(101, 111, 86)" dataType="podcasts" />
      <TeaserSection data={this.props.sanityData} color="#d7cd92" dataType="posts" />
    </div>
    )
  }
}

export default Index