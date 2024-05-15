<template>
  <div class="relative flex shrink-0 overflow-hidden shadow rounded-xl size-40">
    <img class="aspect-square h-full w-full" :src="image" :alt="`${name}`" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string
  name: string
}

const { image, name } = defineProps<Props>();
</script>
