<template>
  <div
    class="w-full rounded-xl border border-border-subtle bg-surface-elevated p-5 transition-colors duration-300 hover:bg-zinc-200/60 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700/80"
  >
    <header class="mb-3 flex flex-col items-start gap-2">
      <h4 class="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
        <a
          :href="project.url"
          target="_blank"
          class="link-subtle decoration-transparent hover:decoration-current"
          :aria-label="`Redirect to ${project.name} project web page`"
        >
          {{ templ(`projects[${index}].name`) }}
        </a>
      </h4>
      <small v-if="!project.isActive" class="text-mono-accent rounded-lg border border-border-subtle bg-zinc-100 px-2 py-1 text-red-700 dark:border-zinc-600 dark:bg-zinc-700/80 dark:text-red-300">{{ templ('developing') }}</small>
    </header>

    <ParagraphComponent>
      {{ templ(`projects[${index}].description`) }}
    </ParagraphComponent>
    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="highlights in project.highlights"
        :key="highlights"
        class="text-mono-accent rounded-lg border border-border-subtle bg-zinc-100 px-2 py-1 dark:border-zinc-600 dark:bg-zinc-700/50"
      >
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
