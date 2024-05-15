<template>
  <section class="flex py-5 justify-start items-center">
    <div class="w-full">
      <h1 class="font-semibold text-3xl dark:text-sky-50 mb-2">{{ title }}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
}
const { title } = defineProps<Props>();
</script>
