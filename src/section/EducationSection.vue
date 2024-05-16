<template>
  <Layout :title="templ('educationTitle')">
    <div v-for="(edu,index) in education" :key="templ(`education[${index}].area`)" class="pb-1 w-full dark:text-sky-50">
      <header class="flex justify-between items-center mb-3">
        <div>
          <h3 class="font-semibold text-lg flex flex-row items-center gap-2">
            <a
              :href="templ(`education[${index}].url`)"
              target="_blank"
              :aria-label="`Redirect to the university web page`"
              class="hover:underline">{{ templ(`education[${index}].institution`) }}</a>
          </h3>
          <span>{{ templ(`education[${index}].area`) }}</span>
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

import { useI18n } from 'vue-i18n';
const { t: templ } = useI18n();

import json from '../../cv.json';
const { education } = json;
</script>
