<script setup>
import { ref } from "vue";
var openNews1 = ref(false);
var openNews2 = ref(false);
var openNews3 = ref(false);
</script>

<template>
  <section id="novinky" class="w-full px-4 mt-20 scroll-mt-20">
    <div class="flex justify-between mb-2">
      <h2 class="text-lg text-gray-500 font-medium">Novinky</h2>
      <div class="wrapper flex justify-end flex-col cursor-pointer">
        <p class="text-sm text-gray-500" @click="openNews1 = !openNews1">
          rozbaliť
        </p>
      </div>
    </div>

    <!--  SEN MENOM LÁSKA -->
    <div class="wrapper w-full relative h-96">
      <img
        src="/src/assets/images/news/kamil-peteraj.jpg"
        alt="Novinky augustin martin"
        class="absolute top-0 left-0 h-full w-full object-cover"
        @click="openNews1 = !openNews1"
      />
      <div
        v-if="openNews1"
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
          <a
            href="https://www.luxusnakniznica.sk/sen-menom-laska"
            class="text-white border-white border py-0.5 px-2 mt-5"
            target="_blank"
            rel="noopener nofollow"
            >viac
          </a>
        </div>
      </div>
    </div>

    <!--  MAJ -->
    <div class="wrapper flex justify-end cursor-pointer mt-10 pb-2">
      <p class="text-sm text-gray-500" @click="openNews2 = !openNews2">
        rozbaliť
      </p>
    </div>

    <div class="wrapper w-full relative h-96">
      <img
        src="/src/assets/images/produkty/obalka_knihy_maj.jpg"
        alt="Novinky augustin martin"
        class="absolute top-0 left-0 h-full w-full object-cover"
        @click="openNews2 = !openNews2"
      />

      <img
        src="/src/assets/images/produkty/maj_priloha.png"
        alt="Novinky augustin martin"
        class="absolute top-0 left-0 h-full w-full object-cover animation"
        @click="openNews2 = !openNews2"
      />

      <div
        v-if="openNews2"
        class="overlay absolute top-0 left-0 w-full h-full flex flex-col align-middle pt-16 px-10 bg-black bg-opacity-60"
      >
        <h2 class="text-center text-white font-bold text-2xl leading-6">MÁJ</h2>
        <h4 class="text-center text-white font-medium">Karel Hynek Mácha</h4>

        <p class="text-center text-white my-3">
          limitovaná edícia dostupná v Českej republike
        </p>

        <div class="flex justify-center">
          <a
            href="https://www.rosier.cz"
            class="text-white border-white border py-0.5 px-2 mt-5"
            target="_blank"
            rel="noopener nofollow"
            >viac
          </a>
        </div>
      </div>
    </div>

    <!-- KYTICE  -->
    <div class="wrapper flex justify-end cursor-pointer mt-10 pb-2">
      <p class="text-sm text-gray-500" @click="openNews3 = !openNews3">
        rozbaliť
      </p>
    </div>


    <div class="wrapper w-full relative h-96">
      <img
        src="/src/assets/images/produkty/kytice.jpg"
        alt="Novinky augustin martin"
        class="absolute top-0 left-0 h-full w-full object-cover"
        @click="openNews3 = !openNews3"
      />
      <div
        v-if="openNews3"
        class="overlay absolute top-0 left-0 w-full h-full flex flex-col align-middle pt-16 px-10 bg-black bg-opacity-60"
      >
        <h2 class="text-center text-white font-bold text-2xl leading-6">
          KYTICE
        </h2>
        <h4 class="text-center text-white text-sm">
          Karel Jaromír Erben
        </h4>

        <p class="text-center text-white my-3 leading-5">
          Jediná pôvodná básnická zbierka, ktorú Erben vydal
        </p>

        <p class="text-center text-white text-sm">
          Jedinečné limitované vydanie
        </p>

        <div class="flex justify-center">
          <a
            href="/produkt/publikacie/0"
            class="text-white border-white border py-0.5 px-2 mt-5"
            rel="noopener nofollow"
            >viac
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.animation {
  animation-name: widthAnimation;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes widthAnimation {
  0% {
    width: 0;
  }
  10% {
    width: 100%;
  }
  50% {
    width: 100%;
  }
  60% {
    width: 0;
  }
  100% {
    width: 0;
  }
}
</style>
