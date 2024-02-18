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
import { computed, type PropType } from 'vue'
import type { Category, Forum } from '@/model/types'

const forumStore = useForumStore()

const forums = computed((): Forum[] => {
  return forumStore.forums
})

const props = defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true
  }
})

const forumsById = (categoryId: string): Forum[] => {
  return forums.value.filter((f) => f.categoryId === categoryId)
}
</script>

<style scoped></style>
