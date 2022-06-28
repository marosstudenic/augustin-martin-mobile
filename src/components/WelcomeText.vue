<script></script>

<template>
  <section id="welcome-text" class="w-full p-4 pt-20 -mt-10">
    <iframe
      id="player"
      type="text/html"
      class="w-full h-60"
      src="https://www.youtube.com/embed/jjzlpjNv6FI?controls=0&rel=0&autoplay=0"
    ></iframe>

    <div class="w-full pt-4">
      <h1 class="text-lg text-gray-500 my-2">Maľovať je vášeň</h1>
      <p class="text-sm text-gray-500">
        „Tvoriť a&nbsp;maľovať je vášeň. Vášeň najsilnejšia a&nbsp;nepremožiteľná, ktorá,
        aj keď všetky túžby v&nbsp;tebe pohasli, nesmie pominúť. Všetkého sa môžeš
        zriecť, vo&nbsp;všetkom rezignovať, ale v&nbsp;umení nikdy.“ Slová Jana Zrzavého
        rezonujú aj po mnohých rokoch. Nielen v obrazoch českého maliara, ale aj
        v&nbsp;obrazoch, či myslení jeho duchovných nasledovníkov. Patrí k nim aj
        Martin, pre ktorého je maľovanie vášňou. Každodennou, vytrvalou,
        spaľujúcou. Ale aj intímnou spoveďou s&nbsp;tichým vyznaním. A&nbsp;keď prídu
        pochybnosti, nikdy nevidieť rezignáciu. Naopak, jeho ženské tváre
        odzrkadľujú galériu našich vznešených predstáv i&nbsp;najtajnejších túžob. Sú
        blízke i&nbsp;vzdialené, rozmaľované i&nbsp;tajuplne sa vynárajúce z&nbsp;monochrómnej
        hmly. Majú veľa chutí i&nbsp;vôní. Sú tam Madame de Pompadour aj Levočská
        biela pani.
      </p>
      <p class="text-sm text-gray-500 my-4">
        Martin často pripomína, že je šťastný, že môže robiť to, čo ho aj baví.
        Ale zároveň zdôrazňuje, že by to nešlo bez ľudí, ktorých stretol a&nbsp;ktorí
        ho posúvali v&nbsp;jeho živote i&nbsp;tvorbe. Či už to bola mama Božka,
        vydavateľka Gabika, galeristka Carmen, básnik Kamil, brat Andrej&nbsp;-&nbsp;a,&nbsp;samozrejme, jeho tri ženy doma&nbsp;-&nbsp;Daniela, Dorotka a&nbsp;Barborka, ktorým
        nežné hovorí „chodiace emócie“. To sú tie dôležité súčasti, ktoré
        talentu dávajú zmysel a&nbsp;jeho obrazom zase schopnosť oživiť slová, ktoré
        povedala líška v&nbsp;Malom princovi: „Dobre vidíme iba srdcom. To hlavné je
        očiam neviditeľné.“
      </p>
      <p class="text-sm text-gray-500">
        Ako je to teda s&nbsp;Martinom? Nie je to nič zložité. Vidí so srdcom, myslí
        s&nbsp;vášňou a&nbsp;žije, či stretáva sa s&nbsp;ľuďmi, ktorých prítomnosť mu prináša
        ten správny vietor do plachiet. Čo viac si možno priať? Azda už len to,
        aby to pokračovalo...
      </p>
    </div>
  </section>
</template>

<!-- <script>-->
<!--      // 2. This code loads the IFrame Player API code asynchronously.-->
<!--      var tag = document.createElement('script');-->

<!--      tag.src = "https://www.youtube.com/iframe_api";-->
<!--      var firstScriptTag = document.getElementsByTagName('script')[0];-->
<!--      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);-->

<!--      // 3. This function creates an <iframe> (and YouTube player)-->
<!--      //    after the API code downloads.-->
<!--      var player;-->
<!--      function onYouTubeIframeAPIReady() {-->
<!--        player = new YT.Player('player', {-->
<!--          height: '390',-->
<!--          width: '640',-->
<!--          videoId: 'M7lc1UVf-VE',-->
<!--          playerVars: {-->
<!--            'playsinline': 1-->
<!--          },-->
<!--          events: {-->
<!--            'onReady': onPlayerReady,-->
<!--            'onStateChange': onPlayerStateChange-->
<!--          }-->
<!--        });-->
<!--      }-->

<!--      // 4. The API will call this function when the video player is ready.-->
<!--      function onPlayerReady(event) {-->
<!--        event.target.playVideo();-->
<!--      }-->

<!--      // 5. The API calls this function when the player's state changes.-->
<!--      //    The function indicates that when playing a video (state=1),-->
<!--      //    the player should play for six seconds and then stop.-->
<!--      var done = false;-->
<!--      function onPlayerStateChange(event) {-->
<!--        if (event.data == YT.PlayerState.PLAYING && !done) {-->
<!--          setTimeout(stopVideo, 6000);-->
<!--          done = true;-->
<!--        }-->
<!--      }-->
<!--      function stopVideo() {-->
<!--        player.stopVideo();-->
<!--      }-->
<!--    </script>-->
