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
          :src="userById(postById(forum.lastPostId)?.userId)?.avatar"
          alt=""
          class="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Forum } from '@/model/types'
import { postById } from '@/helper/postHelper'
import { userById } from '@/helper/userHelper'
import type { PropType } from 'vue'

const props = defineProps({
  forums: {
    type: Array as PropType<Forum[]>,
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
</script>

<style scoped></style>
