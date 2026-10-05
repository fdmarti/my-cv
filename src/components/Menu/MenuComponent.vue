<template>
  <div
    class="menu fixed top-5 right-5 flex items-center gap-1 rounded-xl border border-border-subtle bg-surface-elevated/90 px-2 py-1.5 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/90"
  >
    <button
      type="button"
      class="rounded-lg p-2 text-zinc-700 transition-colors hover:bg-zinc-200/80 dark:text-zinc-200 dark:hover:bg-zinc-700/80"
      @click="onHandleDownloadCV"
      aria-label="download-cv"
    >
      <DownloadIcon />
    </button>
    <div class="h-5 w-px bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
    <select
      v-model="locale"
      class="cursor-pointer appearance-none rounded-lg bg-transparent px-2 py-1.5 text-sm text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 dark:text-zinc-200"
      aria-label="language"
    >
      <option value="EN">EN</option>
      <option value="ES">ES</option>
    </select>
    <div class="h-5 w-px bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
    <button
      type="button"
      class="rounded-lg p-2 text-zinc-700 transition-colors hover:bg-zinc-200/80 dark:text-zinc-200 dark:hover:bg-zinc-700/80"
      @click="changeTheme"
      aria-label="change-dark-light-mode"
    >
      <span v-if="isDark"><SunIcon /></span>
      <span v-else><MoonIcon /></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import { useDark } from '@/composables/useDark';

import { DEFAULT_LANGUAGED } from '@/consts/defaultLanguage';

import { DownloadIcon, SunIcon, MoonIcon } from '@/components/Icons';

const { locale } = useI18n({ useScope: 'global' });
locale.value = DEFAULT_LANGUAGED;

const { changeTheme, isDark, loadCurrentTheme } = useDark();

const onHandleDownloadCV = () => {
	window.print();
};

onMounted(() => {
	loadCurrentTheme('portfolio-fdm-theme');
});
</script>
