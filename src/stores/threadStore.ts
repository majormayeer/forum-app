import { defineStore } from 'pinia'
import data from '../data.json'
import type { Thread } from '@/model/types'

export const useThreadStore = defineStore('threadStore', {
  state: () => {
    return {
      threads: data.threads as Thread[]
    }
  },
  actions: {}
})
