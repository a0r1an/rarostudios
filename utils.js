import axios from 'axios';

const fetchYoutubeFeed = async() => {
  try {
    let response = await axios('http://localhost:3000/api/apis')
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

export { fetchYoutubeFeed }