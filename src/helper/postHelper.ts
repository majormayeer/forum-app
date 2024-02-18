import type { Post } from '@/model/types'
import { usePostStore } from '@/stores/postStore'

const postById = (postId: string): Post => {
  return usePostStore().posts.find((p) => p.id === postId)
}

export { postById }
