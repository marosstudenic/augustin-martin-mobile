<script setup>
import { photos } from "../data/Gallery.vue";
function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
</script>
<template>
  <section id="galeria" class="px-4 mt-20 scroll-mt-20">
    <h2 class="font-bold text-xl text-gray-500 mb-4">Fotogaléria</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(item, index) in photos" :key="item">
        <router-link :to="'/gallery/' + index" class="text-sm text-gray-500">
          <img
            :src="getImageUrl(item.image)"
            :alt="item.title"
            class="h-28 object-cover w-full"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>
