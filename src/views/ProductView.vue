<script setup>
import {products} from "@/data/Products.vue";
import {ref, computed, watch} from "vue";
import {useRoute} from "vue-router";

function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

const route = useRoute();

var type = ref(route.params.type);
var id = ref(route.params.id);

watch(
    () => route.params.type,
    () => (type.value = route.params.type)
);

watch(
    () => route.params.id,
    () => (id.value = route.params.id)
);

var productList = computed(() => {
  switch (type.value) {
    case "limitovane":
      return products.value.limitovaneEdicie;
    case "listy":
      return products.value.grafickeListy;
    case "textilie":
      return products.value.textilie;
    case "publikacie":
      return products.value.publikacie;
    default:
      return null;
  }
});

var product = computed(() => {
  console.log(productList.value, type.value);
  if (productList.value === null) {
    return null;
  }
  return productList.value.items[id.value % productList.value.items.length];
});


var next_link = computed(() => {
  var new_id = id.value + 1;
  if (new_id >= productList.value.items.length) {
    new_id = 0;
  }
  return new_id
});
</script>

<template>
  <main class="font-pragmatica h-full">
    <div class="container mx-auto px-4 flex flex-col pb-4">
      <div class="flex justify-between mt-2 mb-1">
        <router-link to="/#products" class="flex align-middle">
          <svg
              class="h-10 py-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#6B7280"
          >
            <path
                d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
            />
          </svg>
          <div class="flex justify-center flex-col">
            <div class="flex">
              <h2 class="text-gray-500 font-bold text-xl">
                {{ productList.title }}
              </h2>
              <p class="ml-2 text-gray-500 text-sm my-auto">
                | produkt {{ parseInt(id) + 1 }} /
                {{ productList.items.length }}
              </p>
            </div>
          </div>
        </router-link>

        <router-link
            v-if="productList.items.length > 1"
            :to="'/produkt/' + type + '/' + next_link"
            class="text-sm text-gray-500 my-auto"
        >nasledujúci
        </router-link>
      </div>

      <div class="flex flex-wrap justify-between">
        <div class="w-full">
          <img
              class="w-full max-h-84 object-cover"
              :src="getImageUrl(product.image)"
              :alt="product.title"
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

          <h1 class="text-xl font-medium">{{ product.title.toUpperCase() }}</h1>
          <p class="text-gray-500" v-if="product.author">
            Autori: {{ product.author }}
          </p>

          <div class="description">
            <p
                class="text-gray-500 my-1"
                v-for="(description, index) in product.descriptions"
                :key="index"
            >
              {{ description }}
            </p>
          </div>

          <p class="text-gray-500 my-2">
            Objednávku pošlite mailom na
            <a href="mailto:vena@nextra.sk" class="font-bold">vena@nextra.sk</a>
          </p>

          <a
              href="mailto:vena@nextra.sk"
              class="border py-1 px-3 border-gray-500 text-gray-500"
          >kontaktovať</a
          >
          <!--          <p class="text-gray-500 text-sm">{{ photo.date }}</p>-->
          <!--          <p class="text-gray-500 text-sm">{{ photo.location }}</p>-->
          <!--          <p class="text-gray-500 text-sm">{{ photo.description }}</p>-->
        </div>
      </div>
    </div>
  </main>
</template>
