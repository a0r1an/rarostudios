import qs from 'qs'
import dotenv from 'dotenv'
dotenv.config({silent: true});
import axios from 'axios';

export default async(req, res) => {
  let params = {
    part: 'snippet',
    order: 'date',
    maxResults: '2',
    channelId: process.env.YOUTUBE_CHANNEL_ID,
    key: process.env.YOUTUBE_API_KEY
  }
  const queryParams = qs.stringify(params);
  axios
    .get(`https://www.googleapis.com/youtube/v3/search?${queryParams}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log('error'); console.log(error);
      
    })
};