<script setup>
import { ref } from "vue";
import { kresba, malba } from "../data/Tvorba.vue";
function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

var kresba_active_index = ref(0);
var malba_active_index = ref(0);

function increaseKresbaActiveIndex() {
  kresba_active_index.value++;
  if (kresba_active_index.value >= kresba.value.length) {
    kresba_active_index.value = 0;
  }
  console.log(kresba_active_index.value);
}

function increaseMalbaActiveIndex() {
  malba_active_index.value++;
  if (malba_active_index.value >= malba.value.length) {
    malba_active_index.value = 0;
  }
  console.log(malba_active_index.value);
}
</script>

<template>
  <section id="tvorba" class="px-4 pt-20">
    <div class="kresba">
      <h2 class="text-gray-500 text-xl font-medium mb-4">Kresba</h2>
      <div class="items w-full overflow-hidden">
        <div
          class="item"
          v-for="(item, index) in kresba"
          :key="index"
          :class="{ active: index === kresba_active_index }"
        >
          <img :src="getImageUrl(item.image)" :alt="item.title" />
          <h3 class="text-gray-500 font-medium mt-2">{{ item.title }}</h3>

          <div class="flex justify-between items-center">
            <p class="text-gray-500 text-sm">
              {{ item.description }} | {{ item.date }}
            </p>
            <button
              class="text-gray-500 text-sm"
              @click="increaseKresbaActiveIndex"
            >
              nasledujúca
            </button>
          </div>
        </div>
        <div class="placeholder">
          <img :src="getImageUrl(kresba[0].image)" :alt="kresba[0].title" />
          <h3 class="text-gray-500 font-medium mt-2">{{ kresba[0].title }}</h3>

          <div class="flex justify-between items-center mt-2">
            <p class="text-gray-500 text-sm">
              {{ kresba[0].description }} | {{ kresba[0].date }}
            </p>
            <button
              class="text-gray-500 text-sm"
              @click="increaseKresbaActiveIndex"
            >
              nasledujúca
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="malba mt-10">
      <h2 class="text-gray-500 text-xl font-medium mb-2">Maľba</h2>
      <div class="items overflow-hidden">
        <div
          class="item"
          v-for="(item, index) in malba"
          :key="item"
          :class="{ active: index === malba_active_index }"
        >
          <img :src="getImageUrl(item.image)" :alt="item.title" />
          <h3 class="text-gray-500 font-medium mt-2">{{ item.title }}</h3>

          <div class="flex justify-between items-center">
            <p class="text-gray-500 text-sm">
              {{ item.description }} | {{ item.date }}
            </p>
            <button
              class="text-gray-500 text-sm"
              @click="increaseMalbaActiveIndex"
            >
              nasledujúca
            </button>
          </div>
        </div>
        <div class="placeholder">
          <img :src="getImageUrl(malba[0].image)" :alt="malba[0].title" />
          <h3 class="text-gray-500 font-medium mt-2">{{ malba[0].title }}</h3>

          <div class="flex justify-between items-center mt-2">
            <p class="text-gray-500 text-sm">
              {{ malba[0].description }} | {{ malba[0].date }}
            </p>
            <button
              class="text-gray-500 text-sm"
              @click="increaseKresbaActiveIndex"
            >
              nasledujúca
            </button>
          </div>
        </div>
      </div>
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

.placeholder {
  z-index: -1;
  visibility: hidden;
  width: 1 !important;
}
</style>
