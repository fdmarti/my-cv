<template>
  <Layout :title="templ('skillsTitle')">
    <div class="flex flex-wrap gap-3 pt-1">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="flex items-center gap-1.5 rounded-xl border border-border-subtle bg-surface-elevated px-2 py-1.5 transition-opacity hover:opacity-80 dark:border-zinc-700 dark:bg-zinc-800"
      >
        <component :is="icons[skill.name]"></component>
        <span class="text-mono-accent font-semibold text-zinc-800 dark:text-zinc-200">{{ skill.name }}</span>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { Layout } from '@/layout';
import { CSS, Git, GitHub, HTML, JavaScript, MySQL, Node, Nuxtjs, Tailwind, TypeScript, Vue } from '@/components/Icons';
import { useI18n } from 'vue-i18n';

const { t: templ } = useI18n();

import json from '../../cv.json';
const { skills } = json;

type IconDictionary = {
  [key: string]: Component
}
const icons: IconDictionary = { CSS, Git, GitHub, HTML, JavaScript, MySQL, Node, Nuxtjs, Tailwind, TypeScript, Vue };
</script>
