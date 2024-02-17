import { defineStore } from 'pinia'
import { useThreadStore } from '@/stores/threadStore'
import data from '../data.json'

export const usePostStore = defineStore('postStore', {
  state: () => {
    return {
      posts: data.posts
    }
  },
  actions: {
    addPost(post) {
      const threadStore = useThreadStore()
      const thread = threadStore.threads.find((t) => t.id === post.threadId)
      const postId = 'id' + Math.random()
      const newPost = {
        postId: postId,
        ...post
      }
      this.posts.push(newPost)
      thread.posts.push(postId)
    }
  },
  getters: {}
})
