<template>
  <div class="profile-card">
    <p class="text-center">
      <img :src="props.user?.avatar" :alt="props.user?.name" />
    </p>
    <hi class="title">{{ props.user?.username }}</hi>
    <p class="text-lead">{{ props.user?.name }}</p>
    <p class="text-justify">No bio specified</p>
    <span class="online">{{ props.user?.name }} is online</span>
    <div class="stats">
      <span>{{ userPostCount }} posts</span>
      <span>{{ userThreadCount }} threads</span>
    </div>
    <hr />
    <p class="text-large text-center">
      <i class="fa fa-globe"><a href="#">batman.com</a></i>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/model/types'
import { type PropType } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { userPostCount, userThreadCount } = storeToRefs(userStore)

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true
  }
})
</script>

<style scoped></style>
