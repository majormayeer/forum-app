export type User = {
  avatar: string
  email: string
  lastVisitAt: number
  name: string
  isModerator: boolean
  registeredAt: number
  username: string
  usernameLower: string
  id: string
  bio?: string
  website?: string
  location?: string
}

export type Thread = {
  contributors: string[]
  firstPostId: string
  forumId: string
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
  publishedAt: number
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
