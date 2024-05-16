<template>
  <div class="menu fixed top-5 right-5 border-[1px] dark:border-slate-700 px-3 py-1 rounded-xl flex items-center bg-slate-100 gap-3 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100">
    <button @click="onHandleDownloadCV" aria-label="download-cv">
      <DownloadIcon />
    </button>
    <span>|</span>
    <select v-model="locale" class="p-1 dark:bg-slate-800 rounded-lg border-none">
      <option value="EN">EN</option>
      <option value="ES">ES</option>
    </select>
    <span>|</span>
    <button @click="changeTheme" aria-label="change-dark-light-mode">
      <span v-if="isDark"><SunIcon /> </span>
      <span v-else> <MoonIcon /> </span>
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
