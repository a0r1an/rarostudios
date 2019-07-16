import Header from '../components/Header'
import Hero from '../components/Hero'
import TeaserSection from '../components/TeaserSection'
import {fetchYoutubeFeed} from '../utils'

class Index extends React.Component{
  
  static async getInitialProps() {
      let youTubeData = await fetchYoutubeFeed();
      // console.log(youTubeData);
      return { youTubeData }
  }
  render(){
    return (
    <div>
      <Header />
      <Hero/>
      <TeaserSection data={this.props.youTubeData} dataType="videos" />
    </div>
    )
  }
}

export default Index