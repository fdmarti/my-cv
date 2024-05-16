<template>
  <div class="bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-200 transition-all duration-300 border-[1px] rounded p-5 max-w-xs">
    <header class="flex flex-col items-start gap-2 mb-3">
      <h4 class="text-sm font-semibold">
        <a :href="project.url" target="_blank" class="hover:underline dark:text-sky-50" :aria-label="`Redirect to ${project.name} project web page`">
          {{ templ(`projects[${index}].name`) }}
        </a>
      </h4>
      <small v-if="!project.isActive" class="text-xs rounded-lg bg-red-100 p-1">{{ templ('developing') }}</small>
    </header>

    <ParagraphComponent>
      {{ templ(`projects[${index}].description`) }}
    </ParagraphComponent>
    <div class="mt-3 flex flex-wrap gap-2">
      <span v-for="highlights in project.highlights" :key="highlights" class="bg-gray-200 py-1 px-2 rounded-lg text-xs">
        {{ highlights }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Project } from '@/interface/Profile';
import { ParagraphComponent } from '@/components/Text';

const { t: templ } = useI18n();

const props = defineProps<{ project: Project; index: number }>();
const { project, index } = props;
</script>
