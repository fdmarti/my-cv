<template>
  <div class="cv-projects">
    <Layout :title="templ('projectsTitle')">
      <div class="proyects grid grid-cols-1 gap-5 md:grid-cols-2">
        <CardProject v-for="(project,index) in projects" :key="project.name" :project="project" :index="index" />
      </div>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';
import CardProject from '@/components/CardProject.vue';

import { useI18n } from 'vue-i18n';
const { t: templ } = useI18n();

import json from '../../cv.json';
const { projects } = json;
</script>
