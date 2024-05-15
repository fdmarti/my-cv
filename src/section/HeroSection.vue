<template>
  <section class="flex py-5 items-center justify-between">
    <div class="flex flex-col gap-3">
      <h1 class="font-semibold text-3xl">{{ name }}</h1>
      <ParagraphComponent>
        {{ label }}
      </ParagraphComponent>
      <ParagraphComponent>
        <a href="https://maps.app.goo.gl/XCVJPWXtzoEztfpo8" target="_blank" class="flex items-center gap-1 !text-sm"> <GlobeIcon /> {{ city }}, {{ region }} </a>
      </ParagraphComponent>

      <ProfileList :profiles="profiles"/>

    </div>
    <ProfileImage :image="image" :name="name" />
  </section>
</template>

<script setup lang="ts">
import json from '../../cv.json';
import { GlobeIcon } from '@/components/Icons';
import { ParagraphComponent } from '@/components/Text';
import { ProfileImage } from '@/components/Images';
import ProfileList from '@/components/ProfileList.vue';

const { basics } = json;
const { name, image, label, location, profiles } = basics;
const { city, region } = location;
</script>
