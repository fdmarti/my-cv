<template>
  <Layout :title="templ('workTitle')">
    <div v-for="(work, index) in works" :key="work.name" class="pb-5 dark:text-sky-50">
      <header class="flex justify-between items-center mb-3">
        <div>
          <h3 class="font-semibold text-lg flex flex-row items-center gap-2">
            <a :href="work.url" target="_blank" :aria-label="`Redirect to the ${work.name} main web page`" class="hover:underline">{{ work.name }}</a>
            <small v-if="work.highlights.length > 0" class="bg-gray-200 dark:bg-gray-700 px-1 rounded">{{ templ(`work[${index}].highlights[0]`) }}</small>
          </h3>
          <span>
            {{ templ(`work[${index}].position`) }}
          </span>
        </div>
        <div>
          <span>{{ new Date(work.startDate).getFullYear() }} - {{ work.endDate ? new Date(work.endDate).getFullYear() : templ('current') }}</span>
        </div>
      </header>

      <ParagraphComponent>
        {{ templ(`work[${index}].summary`) }}
      </ParagraphComponent>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';
import { ParagraphComponent } from '@/components/Text';

import { useI18n } from 'vue-i18n';
const { t: templ } = useI18n();

import json from '../../cv.json';
const { work: works } = json;
</script>
