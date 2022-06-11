export type PostProps = {
  user: {
    name: string
    avatar: string
    bio: string
  }
  post: {
    content: string
    likes: number
    shares: number
  }
}
