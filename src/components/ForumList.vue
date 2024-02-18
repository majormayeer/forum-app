<template>
  <div class="forum-list col-full">
    <h2 class="list-title">
      <router-link :to="{ name: 'Category', params: { id: props.categoryId } }">{{
        props.title
      }}</router-link>
    </h2>

    <div class="forum-listing" v-for="forum in props.forums" :key="forum.id">
      <div class="forum-details">
        <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="text-large">
          {{ forum.name }}
        </router-link>
        <p>{{ forum.description }}</p>
      </div>
      <div class="threads count">
        <p>
          <span class="count">{{ forum.threads?.length }}</span>
          {{ threadCountWord(forum) }}
        </p>
      </div>
      <div class="last-thread">
        <img
          v-if="forum.threads?.length > 0"
          :src="userById(getLastPost(forum.lastPostId)?.userId)?.avatar"
          alt=""
          class="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Forum, Post, User } from '@/model/types'
import { usePostStore } from '@/stores/postStore'
import { useUserStore } from '@/stores/userStore'
import type { PropType } from 'vue'

const props = defineProps({
  forums: {
    type: [] as PropType<Forum[]>,
    required: true
  },
  title: {
    type: String,
    default: 'Forums'
  },
  categoryId: {
    type: String
  }
})

const threadCountWord = (forum: Forum) => {
  if (forum.threads?.length) {
    return forum.threads.length > 1 ? 'threads' : 'thread'
  } else {
    return 'no threads'
  }
}

const postStore = usePostStore()
const userStore = useUserStore()

const getLastPost = (postId: string): Post | undefined => {
  return postStore.posts.find((p) => p.id === postId)
}

const userById = (userId: string | undefined): User | undefined => {
  return userStore.users.find((u) => u.id === userId)
}
</script>

<style scoped></style>
