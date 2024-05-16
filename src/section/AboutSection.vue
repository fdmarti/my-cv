<template>
  <Layout :title="templ('basics.summaryTitle')">

    <ParagraphComponent>
    {{ templ('basics.summary')  }}
    </ParagraphComponent>

  </Layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Layout } from '@/layout';
import { ParagraphComponent } from '@/components/Text';

const { t: templ } = useI18n();

</script>
