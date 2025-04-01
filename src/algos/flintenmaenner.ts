export const shortname = 'flintenmaenner'

export const handler = async () => {
  const posts = [
    {
      post: 'at://did:example:1234/app.bsky.feed.post/1',
    },
    {
      post: 'at://did:example:1234/app.bsky.feed.post/2',
    },
  ]

    const filtered = posts.filter((p) => p.post.includes('flintenmaenner'))

  return filtered
}
