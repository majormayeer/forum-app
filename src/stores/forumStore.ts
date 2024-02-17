import { defineStore } from 'pinia'
import data from '../data.json'
import type { Forum } from '@/model/types'

export const useForumStore = defineStore('forumStore', {
  state: () => {
    return {
      forums: data.forums as Forum[]
    }
  },
  actions: {}
})
