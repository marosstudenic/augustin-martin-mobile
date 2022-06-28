<script setup>
import { spolupraca } from "../data/Spolupraca.vue";
function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}
</script>

<template>
  <section id="ikar" class="px-4 mt-20 scroll-mt-20">
    <h2 class="text-gray-500 text-xl font-medium mb-4">
      Spolupráca s vydavateľstvom IKAR
    </h2>
    <div class="w-full my-6 h-32" v-for="item in spolupraca" :key="item">
      <div class="flex">
        <img
          :src="getImageUrl(item.image)"
          :alt="item.title"
          class="w-24 object-contain mr-4 h-full"
        />
        <div class="">
          <h2 class="text-md font-medium">{{ item.title }}</h2>
          <p class="text-gray-500 text-sm my-1">{{ item.authors }}</p>
          <p class="text-gray-500 text-sm mb-2">{{ item.vydavatelstvo }}</p>
          <a
            :href="item.link"
            target="_blank"
            class="border border-gray-500 py-1 px-5"
          >
            <a href="https://www.luxusnakniznica.sk/sen-menom-laska" target="_blank" rel="nofollow noopener">
            <button class="btn">
              <span class="text-sm text-gray-500">viac</span>
            </button>
            </a>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
