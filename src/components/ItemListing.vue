<script setup>
import { defineProps } from "vue";

defineProps(["headline", "items", "description"]);
function getImageUrl(name) {
  return new URL(`../assets/images/cas_plynie/${name}`, import.meta.url).href;
}
</script>

<template>
  <div class="wrapper my-8">
    <h1 class="headline text-gray-500 mb-2 font-bold">{{ headline }}</h1>
    <div class="slider flex overflow-x-scroll no-scrollbar">
      <img
        class="h-40 object-contain mx-2 first-of-type:ml-0 last-of-type:mr-0"
        v-for="(item, index) in items"
        :src="getImageUrl(item.filename)"
        :key="index"
        :alt="item.filename"
      />
    </div>
    <p class="description text-gray-500 text-sm mt-2">{{ description }}</p>
  </div>
</template>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
