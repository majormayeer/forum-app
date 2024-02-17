<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum?.name }}</h1>
        <p class="text-lead">{{ forum?.description }}</p>
      </div>
      <a href="#" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>
  <div class="col-full push-top">
    <ThreadList :threads="forumThreads" />
  </div>
</template>

<script setup lang="ts">
import ThreadList from '@/components/ThreadList.vue'
import { useForumStore } from '@/stores/forumStore'
import { useThreadStore } from '@/stores/threadStore'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const forumStore = useForumStore()

const { forums } = storeToRefs(forumStore)

const threadStore = useThreadStore()

const { threads } = storeToRefs(threadStore)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const forum = computed(() => {
  return forums.value.find((f) => f.id === props.id)
})

const forumThreads = computed(() => {
  return threads.value.filter((t) => t.forumId === props.id)
})
</script>

<style scoped></style>
