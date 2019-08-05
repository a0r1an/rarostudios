import dotenv from 'dotenv'
dotenv.config({silent: true})
import Parser from 'rss-parser'

let parser = new Parser();

export default async (req, res) => {
  let feed = await parser.parseURL('http://feeds.soundcloud.com/users/soundcloud:users:199370466/sounds.rss');
  let data = []
  feed.items.forEach(item => {
    data.push(item);
  });
  res.send({data});
};