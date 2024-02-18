<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <div class="profile-card">
          <p class="text-center">
            <img :src="authUser?.avatar" :alt="authUser?.name" />
          </p>
          <hi class="title">{{ authUser?.username }}</hi>
          <p class="text-lead">{{ authUser?.name }}</p>
          <p class="text-justify">No bio specified</p>
          <span class="online">{{ authUser?.name }} is online</span>
          <div class="stats">
            <span>{{ userPostsCount }} posts</span>
            <span>{{ userThreadsCount }} threads</span>
          </div>
          <hr />
          <p class="text-large text-center">
            <i class="fa fa-globe"><a href="#">batman.com</a></i>
          </p>
        </div>
        <p class="text-xsmall text-faded text-center">Member since whatever</p>
        <div class="text-center">
          <hr />
          <a href="#" class="btn-green btn-small">Edit profile</a>
        </div>
      </div>
      <div class="7-col push-top">
        <div class="profile-header">
          <span class="text-lead">Jokers recent activity</span
          ><a href="#">See only started threads?</a>
        </div>
        <hr />
        <!-- <div class="activity-list">
          <div class="activity">
            <div class="activity-header">
              <img src="" alt="" />
              <p class="title">
                How can I chop onions without crying?
                <span>Joker started a topic in Cooking</span>
              </p>
            </div>
          </div>
        </div> -->
        <PostList :posts="postsByUser(authUser?.id)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import PostList from '@/components/PostList.vue'
import { postsByUser } from '@/helper/postHelper'
import { threadsByUser } from '@/helper/threadHelper'

const userStore = useUserStore()
const { authUser } = storeToRefs(userStore)

const userPostsCount = computed(() => {
  return postsByUser(authUser.value?.id).length
})

const userThreadsCount = computed(() => {
  return threadsByUser(authUser.value?.id).length
})
</script>

<style scoped></style>
