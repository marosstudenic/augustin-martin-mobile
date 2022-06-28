<script setup>
import ItemListing from "../components/ItemListing.vue";
import { seasons } from "../data/CasPlynie.vue";
</script>

<template>
  <section id="cas-plynie" class="mx-4 mt-20 scroll-mt-20">
    <ItemListing
      v-for="(season, index) in seasons"
      :headline="season.headline"
      :items="season.items"
      :description="season.description"
      :key="index"
    />
  </section>
</template>
