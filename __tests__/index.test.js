/* eslint-env jest */
import {fetchYoutubeFeed} from '../../utils.js'

describe('fetchYoutubeFeed', () => {
  it('returns an object', async () => {
    expect(typeof await fetchYoutubeFeed()).toBe('object');
  })
})