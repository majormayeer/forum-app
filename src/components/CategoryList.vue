<template>
  <ForumList
    v-for="category in props.categories"
    :key="category.id"
    :forums="forumsById(category.id)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script setup lang="ts">
import { useForumStore } from '@/stores/forumStore'
import ForumList from '@/components/ForumList.vue'
import { computed } from 'vue'

const forumStore = useForumStore()

const forums = computed(() => {
  return forumStore.forums
})

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const forumsById = (categoryId: string) => {
  return forums.value.filter((f) => f.categoryId === categoryId)
}
</script>

<style scoped></style>
