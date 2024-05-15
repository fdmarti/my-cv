<template>
  <Layout title="Educación">
    <div v-for="edu in education" :key="edu.institution" class="pb-5 w-full dark:text-sky-50">
      <header class="flex justify-between items-center mb-3">
        <div>
          <h3 class="font-semibold text-lg flex flex-row items-center gap-2">
            <a :href="edu.url" target="_blank" :aria-label="`Redirect to the university web page`" class="hover:underline">{{ edu.institution }}</a>
          </h3>
          <span>{{ edu.area }}</span>
        </div>
        <div>
          <span>{{ new Date(edu.startDate).getFullYear() }} - {{ edu.endDate ? new Date(edu.endDate).getFullYear() : 'Actual' }}</span>
        </div>
      </header>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';

import json from '../../cv.json';
const { education } = json;
</script>
