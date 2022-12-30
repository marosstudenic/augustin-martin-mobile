<script>
import { ref } from "vue";

export var products = ref({
  publikacie: {
    title: "Publikácie",
    slug: "publikacie",
    items: [
    {
        title: "KYTICE",
        author: "KAREL JAROMÍR ERBEN",
        image: "produkty/kytice.jpg",  
        descriptions: [
            "litografia",
            "23 × 23 cm, 252 stran",
            "290 €",
            "Dostupné cez <a target='_blank' href='https://www.luxusnakniznica.sk/kytice' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>luxusnakniznica.sk/kytice</a> (SK)",
            "Dostupné cez <a target='_blank' href='https://www.rosier.cz/' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>rosier.cz</a> (CZ)",
        ]
      },
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
      {
        title: "Máj",
        author: "Hynek Karel Mácha",
        image: "produkty/obalka_knihy_maj.jpg",
        descriptions: [
          "22,54€ + poštovné",
          "Dostupné cez <a href='https://www.martinus.sk/?uItem=1548731&gclid=CjwKCAjw2f-VBhAsEiwAO4lNeCilwRS-' class='text-gray-600 cursor-pointer hover:text-gray-900 underline'>martinus.sk</a>",
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
        altImage: "produkty/hodvabnaSatkaObraz.jpg",
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
          "technika limitovaný ofset",
          "náklad 200 ks, 70 x 50 cm",
          "200€ + poštovné",
          "signovaný autormi Martinom Augustínom, Kamilom Peterajom\n",
        ],
      },
      {
        title: "Raz uvidíš",
        image: "produkty/grafList_razUvidis.jpg",
        descriptions: [
          "technika limitovaný ofset",
          "náklad 200 ks, 70 x 50 cm",
          "200€ + poštovné",
          "signovaný autormi Martinom Augustínom, Kamilom Peterajom\n",
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
          "nedostupné",
        ],
      },
    ],
  },
});
</script>
