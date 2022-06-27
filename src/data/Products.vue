<script>
import { ref } from "vue";
export var products = ref({
  publikacie: {
    title: "Publikácie",
    slug: "publikacie",
    items: [
      {
        title: "Obrazy, texty, sentencie",
        image: "spoluprace/brozovanaPublikacia_obrazyTextySentencie.jpg",
        author: "Kamil Peteraj, Martin Augustín",
        descriptions: [
          "brožovaná publikácia",
          "40 strán, 38 x 30 cm",
          "40€ + poštovné",
        ],
      },
      {
        title: "Zrkadlo duše",
        author: "Martin Augustín, autor textu Ľudovít Petranský",
        image: "spoluprace/zrkadlo_duse.jpg",
        descriptions: [
          "monografia",
          "214 strán, 31 x 25,5 cm",
          "39€ + poštovné",
        ],
      },
    ],
  },
  textilie: {
    title: "Textilie",
    slug: "textilie",
    items: [
      {
        title: "Hodvábna šatka s motívom obrazu Martina Augustína",
        image: "produkty/hodvabnaSatka_detail.jpg",
        descriptions: ["90 x 90 cm", "90€ + poštovné"],
      },
    ],
  },
  grafickeListy: {
    title: "Grafické listy",
    slug: "listy",
    items: [
      {
        title: "Slnko nad hlavou",
        image: "produkty/grafList_slnkoNadHlavou.jpg",
        descriptions: [
          "technika ofset",
          "náklad 200 ks, 70 x 50 cm",
          "200€ + poštovné",
        ],
      },
      {
        title: "Raz uvidíš",
        image: "produkty/grafList_razUvidis.jpg",
        descriptions: [
          "technika ofset",
          "náklad 200 ks, 70 x 50 cm",
          "200€ + poštovné",
        ],
      },
    ],
  },
  limitovaneEdicie: {
    title: "Limitované edície",
    slug: "limitovane",
    items: [
      {
        title: "Sen menom láska",
        image: "produkty/limitovane_senMenomLaska.jpg",
        descriptions: [
          "limitovaná kniha poézie",
          "hodvábna šatka s dielom M. Augustína",
          "certifikát vlastníctva",
          "300€ + poštovné",
        ],
      },
    ],
  },
});
</script>
