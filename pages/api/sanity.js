import qs from 'qs'
import dotenv from 'dotenv'
dotenv.config({silent: true});
import sanityClient from '@sanity/client'

export default async(req, res) => {
  const query = '*[_type == "post"]'
  const client = sanityClient({
    projectId: 'cjvkp0ha',
    dataset: 'development'
    // token: 'sanity-auth-token', // or leave blank to be anonymous user
    // useCdn: true // `false` if you want to ensure fresh data
  })

  var response = await client.fetch(query)
  res.send(JSON.stringify(response));
};