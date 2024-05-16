<template>
  <Layout :title="templ('languageTitle')">
    <div v-for="(_, index) in languages" :key="templ(`languages[${index}].language`)" class="pb-2 w-full dark:text-sky-50">
      <div class="flex justify-start items-center mb-1">
        <h3 class="font-semibold text-lg min-w-[100px]">
          {{ templ(`languages[${index}].language`) }}
        </h3>
        <span>{{ templ(`languages[${index}].fluency`) }}</span>
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
