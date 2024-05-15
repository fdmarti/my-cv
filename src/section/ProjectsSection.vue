<template>
  <Layout title="Proyectos">
    <div class="proyects grid md:grid-cols-2 grid-cols-1 gap-y-5">
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
