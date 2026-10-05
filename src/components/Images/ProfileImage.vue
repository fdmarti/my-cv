<template>
  <div class="profile-image relative flex size-40 shrink-0 overflow-hidden rounded-xl shadow-md ring-2 ring-zinc-200 dark:ring-zinc-600">
    <img class="aspect-square h-full w-full object-cover" :src="image" :alt="`${name}`" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string
  name: string
}

const { image, name } = defineProps<Props>();
</script>
