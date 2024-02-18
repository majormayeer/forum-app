<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in props.threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId)?.name }}</a
            >, <BaseDate :timestamp="thread.publishedAt"></BaseDate>.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img class="avatar-medium" :src="userById(thread.userId)?.avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId)?.name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <BaseDate :timestamp="thread.publishedAt"></BaseDate>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Thread } from '@/model/types'
import { useUserStore } from '@/stores/userStore'
import { computed, type PropType } from 'vue'

const userStore = useUserStore()

const users = computed(() => {
  return userStore.users
})

const props = defineProps({
  threads: {
    type: Array as PropType<Thread[]>,
    required: true
  }
})

const userById = (userId: string) => {
  return users.value.find((u) => u.id === userId)
}
</script>

<style></style>
