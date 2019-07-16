
import qs from 'qs'
import dotenv from 'dotenv'
dotenv.config({ silent: true });
import axios from 'axios';

export default (req, res) => {
  let params = {
    part: 'snippet',
    order: 'date',
    maxResults: '2',
    channelId: process.env.YOUTUBE_CHANNEL_ID,
    key: process.env.YOUTUBE_API_KEY
  }
  const queryParams = qs.stringify(params);
  axios.get(`https://www.googleapis.com/youtube/v3/search?${queryParams}`).then(
    (response)=>{
      res.send(response.data);
      // res.status(200).json(filtered[0])
    }
  ).catch((error)=>{
    // console.log(error);
    res.send(error);
  })
  // res.setHeader('Content-Type', 'application/json');
  // res.statusCode = 200;
  // res.end(JSON.stringify({ name: 'Nextjs' }));
};