<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"> </textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const emit = defineEmits(['save'])

const save = () => {
  const post = {
    publishedAt: Math.floor(Date.now() / 1000),
    text: text.value,
    userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
  }
  emit('save', { post })
  text.value = ''
}
</script>

<style scoped></style>
