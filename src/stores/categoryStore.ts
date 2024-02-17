import { defineStore } from 'pinia'
import data from '../data.json'

export const useCategoryStore = defineStore('categoryStore', {
  state: () => {
    return {
      categories: data.categories
    }
  },
  actions: {}
})
