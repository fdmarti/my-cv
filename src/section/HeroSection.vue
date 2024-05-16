<template>
  <section class="flex py-5 items-center justify-between md:flex-row flex-col-reverse md:text-left text-center gap-y-5 md:gap-0">
    <div class="flex flex-col gap-3 max-w-lg md:items-start  items-center">
      <h1 class="font-semibold text-3xl dark:text-sky-50">{{ templ('basics.name') }}</h1>
      <ParagraphComponent>
        {{ templ('basics.label') }}
      </ParagraphComponent>
      <ParagraphComponent>
        <a href="https://maps.app.goo.gl/XCVJPWXtzoEztfpo8" :aria-label="`Redirect to the city located in google maps`" target="_blank" class="flex items-center gap-1 !text-sm"> <GlobeIcon /> {{ templ('basics.location.city') }}, {{ templ('basics.location.region') }} </a>
      </ParagraphComponent>

      <ProfileList :profiles="profiles"/>

    </div>
    <ProfileImage :image="image" :name="name" />
  </section>
</template>

<script setup lang="ts">
import json from '../../cv.json';
import { useI18n } from 'vue-i18n';

const { t: templ } = useI18n();

import { GlobeIcon } from '@/components/Icons';
import { ParagraphComponent } from '@/components/Text';
import { ProfileImage } from '@/components/Images';
import ProfileList from '@/components/ProfileList.vue';

const { basics } = json;
const { name, image, profiles } = basics;

</script>
