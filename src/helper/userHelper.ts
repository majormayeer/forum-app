import type { User } from '@/model/types'
import { useUserStore } from '@/stores/userStore'

const userById = (userId: string): User => {
  return useUserStore().users.find((u) => u.id === userId)
}

export { userById }
