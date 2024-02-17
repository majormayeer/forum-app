<template>
  <h1>{{ category?.name }}</h1>
  <ForumList :forums="forumsById(props.id)" :title="category?.name" :category-id="category?.id" />
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore'
import { useForumStore } from '@/stores/forumStore'
import { computed } from 'vue'
import ForumList from '@/components/ForumList.vue'
import { storeToRefs } from 'pinia'

const categoryStore = useCategoryStore()

const categories = computed(() => {
  return categoryStore.categories
})

const forumStore = useForumStore()

const { forums } = storeToRefs(forumStore)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const category = computed(() => {
  return categories.value.find((c) => c.id === props.id)
})

const forumsById = (categoryId: string) => {
  return forums.value.filter((f) => f.categoryId === categoryId)
}
</script>

<style scoped></style>
