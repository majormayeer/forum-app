<template>
  <span :title="humanFriendlyDate(props.timestamp)">
    {{ diffForHumans(props.timestamp) }}
  </span>
</template>

<script setup lang="ts">
import { humanFriendlyDate, diffForHumans } from '@/helpers/dateHelpers'
const props = defineProps({
  timestamp: {
    type: Number,
    required: true
  }
})
</script>

<style scoped></style>
