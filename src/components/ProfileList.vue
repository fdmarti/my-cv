<template>
  <div class="flex gap-2 my-3">
    <BadgeProfile :profile="profile" v-for="profile in profiles" :key="profile.username" />
  </div>
</template>

<script setup lang="ts">
import type { ProfileElement } from '@/interface/Profile';
import BadgeProfile from '@/components/BadgeProfile.vue';


const props = defineProps<{ profiles: ProfileElement[] }>();
const { profiles } = props;

</script>
