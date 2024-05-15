<template>
  <div class="menu fixed top-5 right-5 border-[1px] dark:border-slate-700 px-3 py-1 rounded-xl flex items-center gap-3 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100">
    <button @click="onHandleDownloadCV" aria-label="download-cv">
      <DownloadIcon />
    </button>
    <span>|</span>
    <button @click="changeTheme" aria-label="change-dark-light-mode">
      <span v-if="isDark"><SunIcon /> </span>
      <span v-else> <MoonIcon /> </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@/composables/useDark';
import { onMounted } from 'vue';

const { changeTheme, isDark, loadCurrentTheme } = useDark();

import { DownloadIcon, SunIcon, MoonIcon } from '@/components/Icons';

const onHandleDownloadCV = () => {
	window.print();
};

onMounted(() => {
	loadCurrentTheme('portfolio-fdm-theme');
});
</script>
