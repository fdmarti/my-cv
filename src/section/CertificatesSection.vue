<template>
  <Layout :title="templ('certificatesTitle')">
    <div v-for="(certificate, index) in certificates" :key="certificate.url" class="pb-3 dark:text-sky-50">
      <header class="flex justify-between items-center mb-3">
        <div>
          <h3 class="font-semibold text-lg flex flex-row items-center gap-2">
            <a
              :href="certificate.url"
              target="_blank"
              :aria-label="`Redirect to the ${templ(`certificates[${index}].name`)} certificate`"
              class="hover:underline"
            >{{ templ(`certificates[${index}].name`) }}</a>
          </h3>
          <span>{{ templ(`certificates[${index}].publisher`) }}</span>
        </div>
        <div>
          <span>{{ new Date(certificate.releaseDate).getFullYear() }}</span>
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
