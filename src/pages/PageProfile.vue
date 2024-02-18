<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard :user="authUser" />
        <p class="text-xsmall text-faded text-center">Member since whatever</p>
        <div class="text-center">
          <hr />
          <a href="#" class="btn-green btn-small">Edit profile</a>
        </div>
      </div>
      <div class="col-7 push-top">
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
        <PostList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import PostList from '@/components/PostList.vue'
import UserProfileCard from '@/components/UserProfileCard.vue'

const userStore = useUserStore()
const { authUser, userPosts } = storeToRefs(userStore)
</script>

<style scoped></style>
