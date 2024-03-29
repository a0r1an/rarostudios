import Header from '../components/header'
import Hero from '../components/hero'
import TeaserSection from '../components/teaserSection'
import {fetchYoutubeFeed, fetchSpreakerFeed, fetchSanityFeed} from '../libs/utils'

const sanityQuery = `*[_type == "post"]{
  _id,
  "mainImage": mainImage.asset->url,
  _createdAt,
  title,
  body
}`

class Index extends React.Component{
  
  static async getInitialProps() {
      let youTubeData = await fetchYoutubeFeed();
      let spreakerData = await fetchSpreakerFeed();
      let sanityData = await fetchSanityFeed(sanityQuery);
      return { youTubeData,spreakerData,sanityData }
  }
  render(){
    return (
    <div>
      <Header />
      <Hero/>
      <TeaserSection data={this.props.sanityData} dataType="stories" />
      <TeaserSection data={this.props.spreakerData} dataType="podcasts" />
      <TeaserSection data={this.props.youTubeData} dataType="videos"  />
    </div>
    )
  }
}

export default Index