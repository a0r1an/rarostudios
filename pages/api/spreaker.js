import dotenv from 'dotenv'
dotenv.config({silent: true})
import Parser from 'rss-parser'

let parser = new Parser();

export default async (req, res) => {
  let feed = await parser.parseURL('https://www.spreaker.com/show/3672057/episodes/feed');
  let data = []
  feed.items.forEach(item => {
    data.push(item);
  });
  res.end({data});
};