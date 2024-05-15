<template>
  <a :href="profile.url" target="_blank" class="bg-gray-300 p-1 shadow border-2 border-gray-400 rounded-lg text-gray-700 hover:scale-105 hover:opacity-80 transition-all duration-300 ease-in-out">
    <component :is="getComponent"></component>
  </a>
</template>

<script setup lang="ts">
import { computed, defineProps, type Component } from 'vue';
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
