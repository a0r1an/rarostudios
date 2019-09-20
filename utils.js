import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config({silent: true})

const fetchYoutubeFeed = async() => {
  try {
    let response = await axios(`${process.env.URL}/api/youtube`)
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
    return []
  }
}

const fetchSoundcloudFeed = async() => {
  try {
    let response = await axios(`${process.env.URL}/api/soundcloud`)
    let scData = response.data.data;
    let filteredData = [];
    
    for (let item of scData) {
      if(filteredData.length < 2){
        filteredData.push({
          title: item.title,
          id: item.guid.split('tracks/')[1],
          publishedAt: item.isoDate
        });
      }
      
    }
    
    return await filteredData;
  } catch(e) {
    return []
  }
}

const fetchSpreakerFeed = async() => {
  try {
    let response = await axios(`${process.env.URL}/api/spreaker`)
    let spData = response.data.data;
    let filteredData = [];
    
    for (let item of spData) {
      if(filteredData.length < 2){
        filteredData.push({
          title: item.title,
          id: item.guid.split('episode/')[1],
          publishedAt: item.pubDate
        });
      }
      
    }
    
    return await filteredData;
  } catch(e) {
    return []
  }
}

const fetchSanityFeed = async(query) => {
  try {
    let response = await axios.post(`${process.env.URL}/api/sanity`, {query})
    let sanityData = response.data;
    let filteredData = [];
    for (let item of sanityData) {
      filteredData.push({
        title: item.title,
        id: item['_id'],
        publishedAt: item['_createdAt'],
        coverImage: item['mainImage'],
        body: item['body']
      });
    }
    return await filteredData;
  } catch(e) {
    return []
  }
}

const isInViewport = (elem) => {
  try{
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  } catch(error){}
};

export { fetchYoutubeFeed, fetchSoundcloudFeed, fetchSpreakerFeed, fetchSanityFeed, isInViewport }