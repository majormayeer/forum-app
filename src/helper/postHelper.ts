import type { Post } from '@/model/types'
import { usePostStore } from '@/stores/postStore'

const postById = (postId: string): Post => {
  return usePostStore().posts.find((p) => p.id === postId)
}

const postsByUser = (userId: string): Array<Post> => {
  return usePostStore().posts.filter((p) => p.userId === userId)
}

export { postById, postsByUser }
