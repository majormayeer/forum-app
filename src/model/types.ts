export type User = {
  avatar: string
  email: string
  name: string
  isModerator: boolean
  registeredAt: number
  username: string
  userNameLower: string
  id: string
}

export type Thread = {
  contributers: string[]
  firstPostId: string
  lastPostAt: number
  lastPostId: string
  posts: string[]
  publishedAt: number
  slug: string
  title: string
  userId: string
  id: string
}

export type Post = {
  edited: {
    at: number
    by: string
    moderated: boolean
  }
  published: number
  text: string
  threadId: string
  userId: string
  id: string
}

export type Forum = {
  categoryId: string
  description: string
  lastPostId: string
  name: string
  slug: string
  threads: string[]
  id: string
}

export type Category = {
  forums: string[]
  name: string
  slug: string
  id: string
}
