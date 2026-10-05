<template>
  <Layout :title="templ('certificatesTitle')">
    <div v-for="(certificate, index) in certificates" :key="certificate.url" class="pb-6 last:pb-0">
      <header class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-50">
            <a
              :href="certificate.url"
              target="_blank"
              :aria-label="`Redirect to the ${templ(`certificates[${index}].name`)} certificate`"
              class="link-subtle decoration-transparent hover:decoration-current"
            >{{ templ(`certificates[${index}].name`) }}</a>
          </h3>
          <span class="text-sm text-muted dark:text-muted-foreground">{{ templ(`certificates[${index}].publisher`) }}</span>
        </div>
        <div class="shrink-0">
          <span class="text-mono-accent text-sm text-muted dark:text-muted-foreground">{{ new Date(certificate.releaseDate).getFullYear() }}</span>
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
const { certificates } = json;
</script>
