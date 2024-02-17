<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId)?.name }}</a>

        <a href="#">
          <img class="avatar-large" :src="userById(post.userId)?.avatar" alt="" />
        </a>

        <p class="desktop-only text-small">107 posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{ post.text }}
          </p>
        </div>
      </div>

      <div class="post-date text-faded">
        <BaseDate :timestamp="post.publishedAt"></BaseDate>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'

const userStore = useUserStore()
const users = computed(() => {
  return userStore.users
})

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const userById = (userId: string) => {
  return users.value.find((u) => u.id === userId)
}
</script>
<style scoped></style>
