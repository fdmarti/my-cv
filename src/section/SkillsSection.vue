<template>
  <Layout :title="templ('skillsTitle')">
    <div class="flex flex-wrap gap-4 pt-2">
      <div v-for="skill in skills" :key="skill.name" class="flex items-center gap-1 bg-slate-100 border-[1px] border-slate-300 rounded-lg p-1 hover:opacity-60">
        <component :is="icons[skill.name]"></component>
        <span class="font-semibold">{{ skill.name }}</span>
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
