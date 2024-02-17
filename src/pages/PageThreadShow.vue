<template>
  <div class="col-large push-top">
    <h1>{{ thread?.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost"></PostEditor>
  </div>
</template>

<script setup lang="ts">
import { useThreadStore } from '@/stores/threadStore'
import { usePostStore } from '@/stores/postStore'
import PostList from '@/components/PostList.vue'
import { computed } from 'vue'
import PostEditor from '../components/PostEditor.vue'
import { storeToRefs } from 'pinia'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const postStore = usePostStore()

const threadStore = useThreadStore()

const { threads } = storeToRefs(threadStore)

const { posts } = storeToRefs(postStore)

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === props.id)
})

const threadPosts = computed(() => {
  return posts.value.filter((p) => p.threadId === thread.value?.id)
})

const addPost = (eventData) => {
  const post = {
    ...eventData.post,
    threadId: thread.value.id
  }
  postStore.addPost(post)
}
</script>
