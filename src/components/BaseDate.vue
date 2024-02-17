<template>
  <span :title="humanFriendlyDate(props.timestamp)">
    {{ diffForHumans(props.timestamp) }}
  </span>
</template>

<script setup lang="ts">
import { humanFriendlyDate, diffForHumans } from '@/helper/dateHelper'
const props = defineProps({
  timestamp: {
    type: Number,
    required: true
  }
})
</script>
s

<style scoped></style>
