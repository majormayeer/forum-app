import { defineStore } from 'pinia'
import data from '../data.json'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      users: data.users,
      authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
    }
  },
  actions: {},
  getters: {
    authUser: (state) => state.users.find((u) => u.id === state.authId)
  }
})
