<script setup>
import WelcomeImage from "../components/WelcomeImage.vue";
import WelcomeText from "../components/WelcomeText.vue";
import NewSection from "../components/NewsSection.vue";
import Products from "../components/Products.vue";
import CasPlynie from "../components/CasPlynie.vue";
import Zivotopis from "../components/Zivotopis.vue";
import Vystavy from "../components/Vystavy.vue";
import Tvorba from "../components/Tvorba.vue";
import SpolupracaSVydavatelstvami from "../components/SpolupracaSVydavatelstvami.vue";
import VideoSection from "../components/VideoSection.vue";
import Gallery from "../components/Gallery.vue";
import Kontakt from "../components/Kontakt.vue";
</script>

<template>
  <main class="font-neue">
    <WelcomeImage />
    <WelcomeText />
    <NewSection />
    <Products />
    <CasPlynie />
    <Zivotopis />
    <Vystavy />
    <Tvorba />
    <SpolupracaSVydavatelstvami />
    <VideoSection />
    <Gallery />
    <Kontakt />
  </main>
</template>
