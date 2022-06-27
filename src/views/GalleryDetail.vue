<script setup>
import { photos } from "../data/Gallery.vue";
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
var photo = ref(photos.value[route.params.id % photos.value.length]);

watch(
  () => route.params.id,
  () => (photo.value = photos.value[route.params.id % photos.value.length])
);

var prev_link = computed(() => {
  var prev = (route.params.id - 1) % photos.value.length;
  if (prev < 0) {
    prev = photos.value.length - 1;
  }
  return prev;
});

var next_link = computed(() => {
  return (parseInt(route.params.id) + 1) % photos.value.length;
});

function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
</script>

<template>
  <main class="font-pragmatica h-full">
    <div
      class="container mx-auto px-4 flex flex-col justify-center h-[calc(100vh-4rem)] relative"
    >
      <router-link to="/#galeria" class="absolute top-1 left-1">
        <svg
          class="h-10 p-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#6B7280"
        >
          <path
            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
          />
        </svg>
      </router-link>
      <div class="flex flex-wrap justify-between">
        <div class="w-full">
          <img
            class="w-full max-h-96 object-contain"
            :src="getImageUrl(photo.image)"
            :alt="photo.title"
          />
        </div>
        <div class="w-full mt-4">
          <h1 class="text-gray-500 font-bold text-sm">
            {{ photo.title }}
          </h1>
          <div class="flex justify-between">
            <router-link
              :to="'/gallery/' + prev_link"
              class="text-sm text-gray-500"
              >predchádzajúca
            </router-link>
            <router-link
              :to="'/gallery/' + next_link"
              class="text-sm text-gray-500"
              >ďalšia
            </router-link>
          </div>
          <p class="text-gray-500 text-sm">{{ photo.date }}</p>
          <p class="text-gray-500 text-sm">{{ photo.location }}</p>
          <p class="text-gray-500 text-sm">{{ photo.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
