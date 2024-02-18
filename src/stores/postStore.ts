import { defineStore } from 'pinia'
import { useThreadStore } from '@/stores/threadStore'
import data from '../data.json'
import type { Post } from '@/model/types'

export const usePostStore = defineStore('postStore', {
  state: () => {
    return {
      posts: data.posts as Post[]
    }
  },
  actions: {
    addPost(post: Post) {
      const threadStore = useThreadStore()
      const thread = threadStore.threads.find((t) => t.id === post.threadId)
      const postId = 'id' + Math.random()
      const newPost = {
        postId: postId,
        ...post
      }
      this.posts.push(newPost)
      thread?.posts.push(postId)
    }
  },
  getters: {}
})
