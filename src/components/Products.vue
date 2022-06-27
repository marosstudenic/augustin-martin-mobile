<script></script>
<template>
  <section
    id="products"
    class="flex w-full overflow-x-scroll px-4 pt-20 -mt-20 no-scrollbar"
  >
    <router-link to="/produkt/publikacie/0" class="mr-2">
      <div class="item mx-2 first-of-type:ml-0 last-of-type:mr-0">
        <h3 class="text-gray-500 mb-2 font-bold tracking-wide">Publikácie</h3>
        <img
          src="@/assets/images/spoluprace/brozovanaPublikacia_obrazyTextySentencie.jpg"
          alt="Publikacie"
          class="h-40 min-w-[130px] object-contain"
        />
      </div>
    </router-link>

    <router-link to="/produkt/textilie/0" class="mx-2">
      <div class="item mx-2 first-of-type:ml-0 last-of-type:mr-0">
        <h3 class="text-gray-500 mb-2 font-bold tracking-wide">Textílie</h3>
        <img
          src="@/assets/images/produkty/hodvabnaSatka.jpg"
          alt="Textilie vzacne"
          class="h-40 min-w-[115px] object-contain"
        />
      </div>
    </router-link>

    <router-link to="/produkt/listy/0" class="mx-2">
      <div class="item mx-2 first-of-type:ml-0 last-of-type:mr-0">
        <h3 class="text-gray-500 mb-2 font-bold tracking-wide">
          Grafické listy
        </h3>
        <img
          src="@/assets/images/produkty/grafList_razUvidis.jpg"
          alt="graficke Listy"
          class="h-40 min-w-[120px] object-contain"
        />
      </div>
    </router-link>

    <router-link to="/produkt/limitovane/0" class="ml-2">
      <div class="item mx-2 first-of-type:ml-0 last-of-type:mr-0">
        <h3 class="text-gray-500 mb-2 font-bold tracking-wide">
          Limitované edície
        </h3>
        <img
          src="@/assets/images/produkty/limitovane_senMenomLaska.jpg"
          alt="Textilie vzacne"
          class="h-40 min-w-[170px] object-contain"
        />
      </div>
    </router-link>
  </section>
</template>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
