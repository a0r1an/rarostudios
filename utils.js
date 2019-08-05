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

const fetchSanityFeed = async() => {
  try {
    let response = await axios(`${process.env.URL}/api/sanity`)
    let sanityData = response.data;
    let filteredData = [];
    for (let item of sanityData) {
      filteredData.push({
        title: item.title,
        id: item['_id'],
        publishedAt: item['_createdAt']
      });
    }
    return await filteredData;
  } catch(e) {
    return []
  }
}

export { fetchYoutubeFeed, fetchSoundcloudFeed, fetchSanityFeed }