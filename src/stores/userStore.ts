import { defineStore } from 'pinia'
import data from '../data.json'
import type { Post, Thread, User } from '@/model/types'
import { usePostStore } from './postStore'
import { useThreadStore } from './threadStore'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      users: data.users as User[],
      authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
    }
  },
  actions: {},
  getters: {
    authUser(state): User {
      return state.users.find((u) => u.id === state.authId)!
    },
    userPosts(state): Post[] {
      const posts = usePostStore().posts
      return posts.filter((p) => p.userId === state.authId)
    },
    userPostCount(): number {
      return this.userPosts.length
    },
    userThreads(): Thread[] {
      const threads = useThreadStore().threads
      return threads.filter((t) => t.userId === this.authUser?.id)
    },
    userThreadCount(): number {
      return this.userThreads.length
    }
  }
})
