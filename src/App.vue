<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

var menuOpen = ref(true);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

var menu_items = ref([
  {
    section: "/#novinky",
    title: "Novinky",
  },
  {
    section: "/#cas-plynie",
    title: "Čas plynie",
  },
  {
    section: "/#zivotopis",
    title: "Životopis",
  },
  {
    section: "/#samostatne-vystavy",
    title: "Výstavy",
  },
  {
    section: "/#tvorba",
    title: "Tvorba",
  },
  {
    section: "/#ikar",
    title: "IKAR",
  },
  {
    section: "/#video",
    title: "Video",
  },
  {
    section: "/#galeria",
    title: "Fotogaléria",
  },
  {
    section: "/#kontakt",
    title: "Kontakt",
  },
]);
</script>

<template>
  <header class="h-16 shadow px-4 sticky top-0 bg-white w-full z-40">
    <div class="flex justify-between h-full w-full">
      <div class="logo max-h-14 my-auto">
        <img
          alt="Augustin Martin logo"
          class="logo object-contain h-10 my-auto"
          src="/src/assets/logo/new_logotyp_augustin.png"
        />
      </div>
      <div class="flex">
        <a
          href="https://www.instagram.com/martin.augustin1968/"
          target="_blank"
          rel="noopener nofollow"
          class="flex-col flex justify-center"
        >
          <img
            alt="Instagram Icon"
            class="logo object-contain h-5 px-1 my-auto cursor-pointer"
            src="/src/assets/icons/instagram-50.png"
          />
        </a>
        <a
          href="https://www.facebook.com/martin.augustin.37"
          target="_blank"
          rel="noopener nofollow"
          class="flex-col flex justify-center"
        >
          <img
            alt="Facebook Icon"
            class="logo object-contain h-5 px-1 my-auto cursor-pointer"
            src="/src/assets/icons/facebook.svg"
          />
        </a>

        <div
          class="h-full flex flex-col justify-center pl-1"
          @click="toggleMenu"
        >
          <div class="menuicon" :class="{ closed: !menuOpen }">
            <!--            <input type="checkbox" id="check"/>-->
            <div class="line select-none"></div>
            <div class="line select-none"></div>
            <div class="line select-none"></div>
          </div>
        </div>

        <!--        <img-->
        <!--          alt="Menu Icon"-->
        <!--          class="logo object-contain h-6 my-auto"-->
        <!--          src="@/assets/icons/instagram-50.png"-->
        <!--          @click="toggleMenu"-->
        <!--        />-->

        <nav class="hidden">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <nav
    class="fixed top-16 left-0 bg-white z-50 h-screen w-screen"
    :class="{ closed: menuOpen }"
  >
    <ul class="w-full h-full flex flex-col justify-start pt-56">
      <li
        class="flex justify-center text-gray-500 py-1 text-lg"
        v-for="item in menu_items"
        :key="item.title"
        @click="toggleMenu"
      >
        <a :href="item.section"> {{ item.title }}</a>
      </li>
    </ul>
  </nav>

  <RouterView class="z-0" :class="{ fixedPosition: !menuOpen }" />
  <!--  <footer>-->
  <!--    <a target="_blank" href="https://icons8.com/icon/32292/instagram"-->
  <!--    >Instagram</a-->
  <!--    >-->
  <!--    icon by <a target="_blank" href="https://icons8.com">Icons8</a>-->
  <!--  </footer>-->
</template>

<style scoped>
.fixedPosition {
  /*position: fixed;*/
  touch-action: none;
}

nav {
  transform: translateY(0);
  transition: transform 0.5s ease-in-out;
}

nav.closed {
  transform: translateY(-120%);
}

.menuicon {
  display: flex;
  flex-direction: column;
  width: 25px;
  cursor: pointer;
  justify-items: flex-end;
}

.menuicon .line {
  background: #000;
  border-radius: 10px;
  height: 3px;
  margin: 2px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  align-self: flex-end;
}

.line:nth-of-type(1) {
  width: 100%;
}

.line:nth-of-type(2) {
  width: 100%;
}

.line:nth-of-type(3) {
  width: 80%;
}

.menuicon.closed .line:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotatez(45deg) translate(4px, 4px);
}

.menuicon.closed .line:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg);
}

.menuicon.closed .line:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(30px, -11px) rotatez(45deg);
}
</style>
