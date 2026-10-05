<template>
  <Layout :title="templ('workTitle')">
    <div v-for="(work, index) in works" :key="work.name" class="pb-6 last:pb-0">
      <header class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 class="flex flex-row flex-wrap items-center gap-2 text-base font-medium text-zinc-900 dark:text-zinc-50">
            <a
              :href="work.url"
              target="_blank"
              :aria-label="`Redirect to the ${work.name} main web page`"
              class="link-subtle decoration-transparent hover:decoration-current"
            >{{ work.name }}</a>
            <small
              v-if="work.highlights.length > 0"
              class="text-mono-accent rounded-lg border border-border-subtle bg-zinc-100 px-2 py-0.5 text-zinc-700 dark:border-zinc-600 dark:bg-zinc-700/50 dark:text-zinc-300"
            >{{ templ(`work[${index}].highlights[0]`) }}</small>
          </h3>
          <span class="text-sm text-muted dark:text-muted-foreground">{{ templ(`work[${index}].position`) }}</span>
        </div>
        <div class="shrink-0">
          <span class="text-mono-accent text-sm text-muted dark:text-muted-foreground">{{ new Date(work.startDate).getFullYear() }} - {{ work.endDate ? new Date(work.endDate).getFullYear() : templ('current') }}</span>
        </div>
      </header>

      <ParagraphComponent>
        <div v-html="templ(`work[${index}].summary`)"></div>
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
