<script setup>
import { ref } from "vue";
import { videos } from "../data/Videos.vue";
function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
var video_active_index = ref(0);

function increaseVideoActiveIndex() {
  video_active_index.value =
    (video_active_index.value + 1) % videos.value.length;
}

function decreaseVideoActiveIndex() {
  video_active_index.value = video_active_index.value - 1;
  if (video_active_index.value < 0) {
    video_active_index.value = videos.value.length - 1;
  }
}
</script>
<template>
  <section id="video" class="px-4 mt-20 scroll-mt-20">
    <h2 class="text-gray-500 font-bold mb-4 text-xl">Video</h2>
    <div class="items h-56 mb-4 overflow-hidden">
      <div
        class="video-container item w-full"
        v-for="(item, index) in videos"
        :key="item"
        :class="{ active: index === video_active_index }"
      >
        <iframe
          id="player"
          type="text/html"
          class="w-full h-56"
          marginwidth="0"
          marginheight="0"
          :src="item.link"
          scrolling="no"
          v-if="item.type === 'yotuube' || item.type === 'ta3'"
        ></iframe>
        <div class="image-container" v-if="item.type === 'redirect'">
          <a
            :href="item.link"
            target="_blank"
            class="w-full flex justify-center"
          >
            <img
              :src="getImageUrl(item.image)"
              :alt="item.title"
              class="h-60 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <p @click="decreaseVideoActiveIndex" class="text-sm text-gray-500">
        Predchádzajúca
      </p>
      <p @click="increaseVideoActiveIndex" class="text-sm text-gray-500">
        Nasledujúca
      </p>
    </div>
  </section>
</template>
<style scoped>
.items {
  position: relative;
}
.item {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(120%);
  transition: transform 0.5s;
}

.item.active {
  transform: translateX(0);
}
</style>
