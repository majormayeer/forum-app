import type { Thread } from '@/model/types'
import { useThreadStore } from '@/stores/threadStore'

const threadsByUser = (userId: string): Array<Thread> => {
  return useThreadStore().threads.filter((t) => t.userId === userId)
}

export { threadsByUser }
