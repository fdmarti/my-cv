<template>
  <Layout :title="templ('educationTitle')">
    <div v-for="(edu, index) in education" :key="templ(`education[${index}].area`)" class="pb-6 last:pb-0">
      <header class="mb-1 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-50">
            <a
              :href="templ(`education[${index}].url`)"
              target="_blank"
              :aria-label="`Redirect to the university web page`"
              class="link-subtle decoration-transparent hover:decoration-current"
            >{{ templ(`education[${index}].institution`) }}</a>
          </h3>
          <span class="text-sm text-muted dark:text-muted-foreground">{{ templ(`education[${index}].area`) }}</span>
        </div>
        <div class="shrink-0">
          <span class="text-mono-accent text-sm text-muted dark:text-muted-foreground">{{ new Date(edu.startDate).getFullYear() }} - {{ edu.endDate ? new Date(edu.endDate).getFullYear() : 'Actual' }}</span>
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
