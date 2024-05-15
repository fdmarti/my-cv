<template>
  <div class="max-w-3xl mx-auto flex flex-col px-4 md:px-0">
    <HeroSection />
    <AboutSection />
    <WorkExperienceSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />

    <Menu />
  </div>
</template>
<script setup lang="ts">
import HeroSection from '@/section/HeroSection.vue';
import AboutSection from '@/section/AboutSection.vue';
import WorkExperienceSection from '@/section/WorkExperienceSection.vue';
import EducationSection from '@/section/EducationSection.vue';
import SkillsSection from '@/section/SkillsSection.vue';
import ProjectsSection from '@/section/ProjectsSection.vue';

import { Menu } from './components/Menu';
</script>
