<script setup>
import { ref, computed } from "vue";
import { spolocne_vystavy, samostatne_vystavy } from "../data/Vystavy.vue";

var samostatne_vystavy_toggle = ref(false);

function samostatne_toggle() {
  samostatne_vystavy_toggle.value = !samostatne_vystavy_toggle.value;
}

var spolocne_vystavy_toggle = ref(false);

function spolocne_toggle() {
  spolocne_vystavy_toggle.value = !spolocne_vystavy_toggle.value;
}

const accordeon_text_samostatne = computed(() => {
  return !samostatne_vystavy_toggle.value ? "rozbaliť" : "skryť";
});

const accordeon_text_spolocne = computed(() => {
  return !spolocne_vystavy_toggle.value ? "rozbaliť" : "skryť";
});
</script>
<template>
  <section
    id="samostatne-vystavy"
    class="px-4 accordion accordion-flush pt-20 -mt-10"
  >
    <div class="flex justify-between">
      <h2 class="text-gray-500 font-medium text-xl mt-4">Samostatné výstavy</h2>
      <div class="flex justify-end flex-col">
        <h3
          class="text-gray-500 text-sm align-bottom"
          data-bs-toggle="collapse"
          data-bs-target="#hidden-samostatne"
          aria-expanded="false"
          aria-controls="show-samostatne"
          @click="samostatne_toggle"
        >
          {{ accordeon_text_samostatne }}
        </h3>
      </div>
    </div>
    <!--    first 4 elements-->
    <div
      class="item my-2"
      v-for="(item, index) in samostatne_vystavy.slice(0, 4)"
      :key="index"
    >
      <h3 class="text-gray-500 font-medium">{{ item.date }}</h3>
      <p
        class="text-gray-500 text-sm py-2"
        v-for="location in item.locations"
        :key="location"
      >
        {{ location }}
      </p>
    </div>
    <!--    tail -->
    <div
      class="accordion-collapse border-0 collapse"
      id="hidden-samostatne"
      data-bs-parent="#samostatne-vystavy"
    >
      <div
        class="item my-2"
        v-for="(item, index) in samostatne_vystavy.slice(4)"
        :key="index"
      >
        <h3 class="text-gray-500 font-mediium">{{ item.date }}</h3>
        <p
          class="text-gray-500 text-sm py-2"
          v-for="location in item.locations"
          :key="location"
        >
          {{ location }}
        </p>
      </div>
    </div>
  </section>
  <section
    id="spolocne-vystavy"
    class="px-4 accordion accordion-flush mt-10 scroll-mt-20"
  >
    <div class="flex justify-between">
      <h2 class="text-gray-500 font-medium text-xl mt-4">Spoločné výstavy</h2>
      <div class="flex justify-end flex-col">
        <h3
          class="text-gray-500 text-sm align-bottom"
          data-bs-toggle="collapse"
          data-bs-target="#hidden-spolocne"
          @click="spolocne_toggle"
          aria-expanded="false"
          aria-controls="show-spolocne"
        >
          {{ accordeon_text_spolocne }}
        </h3>
      </div>
    </div>
    <div
      class="item my-2"
      v-for="(item, index) in spolocne_vystavy.slice(0, 4)"
      :key="index"
    >
      <h3 class="text-gray-500 font-medium">{{ item.date }}</h3>
      <p
        class="text-gray-500 text-sm"
        v-for="location in item.locations"
        :key="location"
      >
        {{ location }}
      </p>
    </div>
    <div
      class="accordion-collapse border-0 collapse"
      id="hidden-spolocne"
      data-bs-parent="#spolocne-vystavy"
    >
      <div
        class="item my-2"
        v-for="(item, index) in spolocne_vystavy.slice(4)"
        :key="index"
      >
        <h3 class="text-gray-500 font-medium">{{ item.date }}</h3>
        <p
          class="text-gray-500 text-sm"
          v-for="location in item.locations"
          :key="location"
        >
          {{ location }}
        </p>
      </div>
    </div>
  </section>
</template>
