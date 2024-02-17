import { defineStore } from 'pinia'
import data from '../data.json'

export const useThreadStore = defineStore('threadStore', {
  state: () => {
    return {
      threads: data.threads
    }
  },
  actions: {}
})
