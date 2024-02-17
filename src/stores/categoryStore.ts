import { defineStore } from 'pinia'
import data from '../data.json'
import type { Category } from '@/model/types'

export const useCategoryStore = defineStore('categoryStore', {
  state: () => {
    return {
      categories: data.categories as Category[]
    }
  },
  actions: {}
})
