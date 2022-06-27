<script setup>
import { studium, ocenenia } from "../data/Zivotopis.vue";
</script>
<template>
  <section id="zivotopis" class="px-4 pt-20 -mt-10">
    <h2 class="text-gray-500 font-semibold text-xl mt-4">Životopis</h2>
    <img
      src="@/assets/images/augustin-portret.jpg"
      alt=""
      class="w-full object-contain h-auto my-4"
    />

    <h3 class="text-gray-500">
      Martin Augustín sa narodil 25. 11. 1968 v Bratislave
    </h3>
    <h2 class="text-gray-500 font-semibold text-xl mt-4">Štúdium</h2>
    <div class="item my-2" v-for="(item, index) in studium" :key="index">
      <h3 class="text-gray-500 font-bold">{{ item.date }}</h3>
      <p class="text-gray-500 text-sm">{{ item.text }}</p>
    </div>
    <h2 class="text-gray-500 font-semibold text-xl mt-4">Ocenenia</h2>
    <div class="item my-2" v-for="(item, index) in ocenenia" :key="index">
      <h3 class="text-gray-500 font-bold">{{ item.date }}</h3>
      <p class="text-gray-500 text-sm">{{ item.text }}</p>
    </div>
  </section>
</template>
