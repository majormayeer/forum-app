<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup lang="ts">
import CategoryList from '@/components/CategoryList.vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { storeToRefs } from 'pinia'

const categoryStore = useCategoryStore()
const { categories } = storeToRefs(categoryStore)
</script>

<style></style>
