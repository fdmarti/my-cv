<template>
  <section
    class="flex py-8 justify-start items-center"
    :class="withDivider ? 'border-t border-zinc-200/80 dark:border-zinc-700/80' : ''"
  >
    <div class="w-full">
      <h2 class="font-semibold text-2xl tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  withDivider?: boolean
}
const { title, withDivider = true } = defineProps<Props>();
</script>
