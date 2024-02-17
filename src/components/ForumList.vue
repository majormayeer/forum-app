<template>
  <div class="forum-list col-full">
    <h2 class="list-title">
      <router-link :to="{ name: 'Category', params: { id: props.categoryId } }">{{
        props.title
      }}</router-link>
    </h2>

    <div class="forum-listing" v-for="forum in props.forums" :key="forum.id">
      <div class="forum-details">
        <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="text-large">
          {{ forum.name }}
        </router-link>
        <p>{{ forum.description }}</p>
      </div>
      <div class="threads count">
        <p>
          <span class="count">{{ forum.threads?.length }}</span>
          {{ threadCountWord(forum) }}
        </p>
      </div>
      <div class="last-thread">
        <img
          src="https://pbs.twimg.com/profile_images/71924284259869908/Nu43rQz1_400x400.jpg"
          alt=""
          class="avatar"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  forums: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Forums'
  },
  categoryId: {
    type: String
  }
})

const threadCountWord = (forum) => {
  if (forum.threads?.length) {
    return forum.threads.length > 1 ? 'threads' : 'thread'
  } else {
    return 'no threads'
  }
}
</script>

<style scoped></style>
