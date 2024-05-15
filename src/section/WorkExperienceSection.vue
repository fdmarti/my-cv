<template>
  <Layout title="Experiencia laboral">
    <div v-for="work in works" :key="work.name" class="pb-5 dark:text-sky-50">
      <header class="flex justify-between items-center mb-3">
        <div>
          <h3 class="font-semibold text-lg flex flex-row items-center gap-2">
            <a :href="work.url" target="_blank" :aria-label="`Redirect to the ${work.name} main web page`"  class="hover:underline">{{ work.name }}</a>
            <small v-if="work.highlights.length > 0" class="bg-gray-200 dark:bg-gray-700 px-1 rounded">{{ work.highlights[0] }}</small>
          </h3>
          <span>{{ work.position }}</span>
        </div>
        <div>
          <span>{{ new Date(work.startDate).getFullYear() }} - {{ work.endDate ? new Date(work.endDate).getFullYear() : 'Actual' }}</span>
        </div>
      </header>

      <ParagraphComponent>
        {{ work.summary }}
      </ParagraphComponent>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';
import { ParagraphComponent } from '@/components/Text';

import json from '../../cv.json';
const { work: works } = json;
</script>
