<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img :src="user.avatar" :alt="user.name" class="avatar-xlarge img-update" />
      </p>
      <div class="form-group">
        <input
          v-model="activeUser.username"
          type="text"
          class="form-input text-lead text-bold"
          placeholder="Username"
        />
      </div>
      <div class="form-group">
        <input
          v-model="activeUser.name"
          type="text"
          class="form-input text-lead"
          placeholder="Full Name"
        />
      </div>
      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea v-model="activeUser.bio" name="" id="user_bio" class="form-input"></textarea>
      </div>
      <div class="stats">
        <span>x Posts</span>
        <span>y Threads</span>
      </div>
      <hr />
      <div class="form-group">
        <label for="user_website" class="form-label">Website</label>
        <input
          v-model="activeUser.website"
          id="user_website"
          type="text"
          class="form-input"
          autocomplete="off"
        />
      </div>
      <div class="form-group">
        <label for="user_email" class="form-label">Email</label>
        <input
          v-model="activeUser.email"
          id="user_email"
          type="text"
          class="form-input"
          autocomplete="off"
        />
      </div>
      <div class="form-group">
        <label for="user_location" class="form-label">Location</label>
        <input
          v-model="activeUser.location"
          id="user_location"
          type="text"
          class="form-input"
          autocomplete="off"
        />
      </div>
      <div class="btn-group space-between">
        <button class="btn-ghost" @click="cancel">Cancel</button>
        <button class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/model/types'
import { useUserStore } from '@/stores/userStore'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true
  }
})

const activeUser = { ...props.user }

const router = useRouter()

const userStore = useUserStore()

const save = () => {
  userStore.setUser(props.user.id, { ...activeUser })
  router.push({ name: 'Profile', params: { id: props.user.id } })
}

const cancel = () => {
  router.push({ name: 'Profile', params: { id: props.user.id } })
}
</script>
<style scoped></style>
