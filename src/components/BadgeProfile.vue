<template>
  <a
    :href="profile.url"
    :aria-label="`redirect to my ${profile.username} webpage`"
    target="_blank"
    class="inline-flex rounded-xl border border-border-subtle bg-surface-elevated p-2 text-zinc-700 transition-colors hover:bg-zinc-200/80 hover:ring-1 hover:ring-zinc-300/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700/80 dark:hover:ring-zinc-600"
  >
    <component :is="getComponent"></component>
  </a>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue';
import type { ProfileElement } from '@/interface/Profile';

import { Frontendmentor, GitHub, Linkedin, Mail } from '@/components/Icons';

const props = defineProps<{ profile: ProfileElement }>();
const { profile } = props;

type IconDictionary = {
  [key: string]: Component;
};

const icons: IconDictionary = {
	Frontendmentor,
	GitHub,
	Linkedin,
	Mail
};

const getComponent = computed(() => {
	return icons[profile.network];
});
</script>
