import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TeaserSection from '../components/TeaserSection'
import axios from 'axios';

class Index extends React.Component{
  static async fetchYoutubeFeed(){
    try {
      let response = await axios.get(`http://localhost:3002/fetchYoutube`)
      let ytData = response.data.items
      let filteredData = [];
      ytData.forEach(function(item){
        filteredData.push({
          id: item.id.videoId,
          title :item.snippet.title,
          publishedAt: item.snippet.publishedAt
        })
      })
      return await filteredData;
    } catch(e) {
      return "Oops! It looks like we dont have videos to show you."
    }

  }
  static async getInitialProps() {
      let youTubeData = await this.fetchYoutubeFeed();
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