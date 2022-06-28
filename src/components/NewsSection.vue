<script setup>
import { ref } from "vue";
var info = ref(false);
</script>

<template>
  <section id="novinky" class="w-full px-4 mt-20 scroll-mt-20">
    <div class="flex justify-between mb-2">
      <h2 class="text-lg text-gray-500 font-medium">Novinky</h2>
      <div class="wrapper flex justify-end flex-col cursor-pointer">
        <p class="text-sm text-gray-500" @click="info = !info">rozbaliť</p>
      </div>
    </div>

    <div class="wrapper w-full relative h-96">
      <img
        src="/src/assets/images/news/kamil-peteraj.jpg"
        alt="Novinky augustin martin"
        class="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div
        v-if="info"
        class="overlay absolute top-0 left-0 w-full h-full flex flex-col align-middle pt-16 px-10 bg-black bg-opacity-60"
      >
        <h2 class="text-center text-white font-bold text-2xl leading-6">
          Sen menom láska
        </h2>
        <h4 class="text-center text-white text-sm">
          Kamil Peteraj, Martin Augustín
        </h4>

        <p class="text-center text-white my-3 leading-5">
          Som veľmi rád, že moje ilustrácie sprevádzajú krásne a tak pravdivé
          básne Kamila Peteraja v edícii luxusnej knižnice.
        </p>

        <p class="text-center text-white text-sm">
          Ja verím, že jeden z najkrajších citov je láska. Robí z nás bytosti
          cítiace a súcitiace. A verím, že toto spojenie prispeje k tomu aby náš
          svet bol krajší.
        </p>

        <div class="flex justify-center">
          <a href="https://www.luxusnakniznica.sk/sen-menom-laska" class="text-white border-white border py-0.5 px-2 mt-5" target="_blank" rel="noopener nofollow"
            >viac
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
