import { defineStore } from 'pinia'
import data from '../data.json'

export const useForumStore = defineStore('forumStore', {
  state: () => {
    return {
      forums: data.forums
    }
  },
  actions: {}
})
