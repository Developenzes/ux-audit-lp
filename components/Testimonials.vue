<script setup>
import imageSvetNapojov from "@/assets/images/svet-napojov.jpg";
import imageAlainDelon from "@/assets/images/alain-delon.jpg";
const testimonialsArray = reactive([
  {
    id: 0,
    author: "Jozef Korman",
    position: "Konateľ",
    company: "SvetNapojov.sk",
    link: "https://www.svetnapojov.sk",
    image: imageSvetNapojov,
    text: "Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznis",
    expanded: false,
  },
  {
    id: 1,
    author: "Richard Wohlstein",
    position: "Retail manager",
    company: "AlainDelon.sk",
    link: "https://www.alaindelon.sk",
    image: imageAlainDelon,
    text: "S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich know-how pre nás od samého začatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu, ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou",
    expanded: false,
  },
]);

function toggleText(item) {
  item.expanded = !item.expanded;
}
</script>

<template>
  <section class="testimonials">
    <div
      class="testimonials__item"
      v-for="item in testimonialsArray"
      :key="item.id"
    >
      <article class="testimonials__content">
        <p :class="{ 'text-clamped': !item.expanded }">
          {{ item.text }}
        </p>
        <button class="read-more-btn" @click="toggleText(item)">
          {{ item.expanded ? "čítať menej" : "čítať viac" }}
        </button>
      </article>
      <div class="testimonials__autor">
        <figure>
          <img class="company-badge" :src="item.image" :alt="item.company" />
        </figure>
        <div class="about-author">
          <p class="text-bold-900">{{ item.author }}</p>
          <p>
            {{ item.position }}
            <a
              class="company-link text-bold-700"
              :href="item.link"
              target="_blank"
              >{{ item.company }}</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.testimonials {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 70px;
  }
}
.testimonials__item {
  position: relative;
  height: max-content;
  .testimonials__content {
    border: 1px solid $neutral;
    padding: 30px;
    margin-bottom: 34px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 43px;
      height: 36px;
      background-image: url(../assets/icons/quotes.svg);
      left: 30px;
      top: -26px;
    }
    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }

  .text-clamped {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.read-more-btn {
  border: none;
  outline: none;
  display: inline;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  background-color: inherit;
  color: $secondary-color;
  cursor: pointer;
}

.testimonials__autor {
  @include flex(row, center, flex-start);
  gap: 20px;
}

.company-badge {
  width: 64px;
  height: 64px;
}

.company-link {
  color: $secondary-color;
  text-decoration: none;
}

.about-author {
  p {
    line-height: 1.375rem;
  }
}
</style>
