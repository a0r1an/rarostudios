const axios = require('axios');
const qs = require('qs')
const express = require('express')
const CircularJSON = require('circular-json')
require('dotenv').config()
const app = express()
const port = 3002


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/fetchYoutube', (req, res, next) => {
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
    }
  ).catch((error)=>{
    // console.log(error);
    res.send(error);
  })
  
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))