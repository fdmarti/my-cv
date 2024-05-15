<template>
  <Layout title="Sobre mí">

    <ParagraphComponent>
        {{ summary }}
    </ParagraphComponent>

  </Layout>
</template>

<script setup lang="ts">
import { Layout } from '@/layout';
import { ParagraphComponent } from '@/components/Text';

import json from '../../cv.json';
const { basics } = json;
const { summary } = basics;

</script>
