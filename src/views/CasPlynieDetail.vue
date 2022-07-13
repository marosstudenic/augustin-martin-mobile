<script setup>
import { seasons } from "@/data/CasPlynie.vue";
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

function getImageUrl(name) {
  return new URL(`../assets/images/cas_plynie/${name}`, import.meta.url).href;
}

const route = useRoute();

var filename = ref(route.params.filename);

watch(
  () => route.params.filename,
  () => (filename.value = route.params.filename)
);

console.log(filename.value);
let season_active_index = computed(() => {
  for (let i = 0; i < seasons.value.length; i++) {
    var filtered = seasons.value[i].items.filter((item) => {
      return item.filename.split(".")[0] === filename.value;
    });

    if (filtered.length > 0) {
      return i;
    }
  }
  return null;
});

let season = computed(() => {
  return seasons.value[season_active_index.value];
});

var dielo = computed(() => {
  let filtered = season.value.items.filter((item) => {
    return item.filename.split(".")[0] === filename.value;
  });

  console.log(filtered.value);

  if (filtered.length > 0) {
    return filtered[0];
  }
  return null;
});

var nextArtPiece = computed(() => {
  let indexOfItem = Array.from(season.value.items).indexOf(dielo.value);
  let indexOfSeason = Array.from(seasons.value).indexOf(season.value);
  console.log(indexOfItem);
  console.log(indexOfSeason);
  if (indexOfItem < season.value.items.length - 1) {
    return season.value.items[indexOfItem + 1];
  } else if (indexOfSeason < seasons.value.length - 1) {
    return seasons.value[indexOfSeason + 1].items[0];
  } else {
    return seasons.value[0].items[0];
  }
});

// var product = computed(() => {
//   console.log(productList.value, type.value);
//   if (productList.value === null) {
//     return null;
//   }
//   return productList.value.items[id.value % productList.value.items.length];
// });
//
// var next_link = computed(() => {
//   var new_id = id.value + 1;
//   if (new_id >= productList.value.items.length) {
//     new_id = 0;
//   }
//   return new_id;
// });
</script>

<template>
  <main class="h-full">
    <div class="container mx-auto px-4 flex flex-col pb-4">
      <div class="flex justify-between mt-2 mb-1">
        <router-link to="/#cas-plynie" class="flex align-middle">
          <svg
            class="h-8 py-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#6B7280"
          >
            <path
              d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
            />
          </svg>
          <div class="flex justify-center flex-col my-auto">
            <div class="flex my-auto">
              <h2
                class="text-gray-500 text-sm font-medium tracking-wider my-auto pt-0.5"
              >
                {{ season.headline }}
              </h2>
              <!--              <p class="ml-2 text-gray-500 text-sm my-auto">-->
              <!--                | produkt {{ parseInt(id) + 1 }} /-->
              <!--                {{ productList.items.length }}-->
              <!--              </p>-->
            </div>
          </div>
        </router-link>

        <!--        <router-link-->
        <!--          v-if="productList.items.length > 1"-->
        <!--          :to="'/produkt/' + type + '/' + next_link"-->
        <!--          class="text-sm text-gray-500 my-auto"-->
        <!--          >nasledujúci-->
        <!--        </router-link>-->
      </div>

      <div class="flex flex-wrap justify-between">
        <div class="w-full">
          <img
            class="w-full max-h-84 object-cover"
            :src="getImageUrl(dielo.filename)"
            :alt="dielo.title"
          />
        </div>
        <div class="w-full mt-4">
          <!--          <div class="flex justify-between">-->
          <!--            <router-link-->
          <!--                :to="'/gallery/' + prev_link"-->
          <!--                class="text-sm text-gray-500"-->
          <!--            >predchádzajúca-->
          <!--            </router-link>-->

          <!--          </div>-->

          <h1 class="text-lg font-medium text-gray-500 tracking-wider">
            {{ dielo.title.toUpperCase() }}
          </h1>
          <div class="flex justify-between">
            <p class="text-gray-500 text-sm">{{ dielo.description }}</p>
            <router-link
              :to="nextArtPiece.filename.split('.')[0]"
              class="text-sm text-gray-500"
            >
              ďalšie dielo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
