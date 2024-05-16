<template>
  <Layout :title="templ('projectsTitle')">
    <div class="proyects grid md:grid-cols-2 grid-cols-1 gap-y-5">
      <CardProject v-for="(project,index) in projects" :key="project.name" :project="project" :index="index" />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';
import CardProject from '@/components/CardProject.vue';

import { useI18n } from 'vue-i18n';
const { t: templ } = useI18n();

import json from '../../cv.json';
const { projects } = json;
</script>
