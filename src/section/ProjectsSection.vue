<template>
  <Layout title="Proyectos">
    <div class="grid grid-cols-2 gap-y-5">
      <CardProject v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';
import CardProject from '@/components/CardProject.vue';

import json from '../../cv.json';
const { projects } = json;
</script>
