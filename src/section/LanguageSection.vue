<template>
  <Layout :title="templ('languageTitle')">
    <div v-for="(_, index) in languages" :key="templ(`languages[${index}].language`)" class="pb-4 last:pb-0">
      <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 class="min-w-[6rem] text-base font-medium text-zinc-900 dark:text-zinc-50">
          {{ templ(`languages[${index}].language`) }}
        </h3>
        <span class="text-sm text-muted dark:text-muted-foreground">{{ templ(`languages[${index}].fluency`) }}</span>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';

import { useI18n } from 'vue-i18n';
const { t: templ } = useI18n();

import json from '../../cv.json';
const { languages } = json;
</script>
