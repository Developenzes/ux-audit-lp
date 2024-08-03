<script setup>
const resultWayArray = reactive([
  {
    id: 1,
    title: "Ciele auditu",
    subtitle: addStrongTags(
      "Určíme si spoločné ciele, nastavíme očakávania a definujeme cieľovú skupinu a jej potreby."
    ),
  },
  {
    id: 2,
    title: "Zbieranie dát",
    subtitle: addStrongTags(
      "Zvolíme vhodné metodiky a nástroje na sledovanie správania používateľov a zbieranie dát."
    ),
  },
  {
    id: 3,
    title: "Vyhodnotenie",
    subtitle: addStrongTags(
      "Vyhodnotíme nazbierané dáta, zosumarizujeme všetky naše zistenia a navrhneme riešenia."
    ),
  },
  {
    id: 4,
    title: "Výsledky auditu",
    subtitle: addStrongTags(
      "Osobná prezentácia výsledkov a navrhnutých riešení s podrobnou dokumentáciou."
    ),
  },
]);

function addStrongTags(text) {
  return text.replace(
    /(spoločné ciele|cieľovú skupinu a jej potreby.|sledovanie správania používateľov a zbieranie dát.|Vyhodnotíme nazbierané dáta|navrhneme riešenia.|Osobná prezentácia výsledkov a navrhnutých riešení)/g,
    "<strong>$1</strong>"
  );
}
</script>

<template>
  <section class="results-way">
    <h2>Rýchla a jednoduchá cesta k <span class="accent">výsledkom.</span></h2>
    <div class="results-way__box">
      <div
        class="results-way__item"
        v-for="(item, index) in resultWayArray"
        :key="item.id"
        :class="{
          'align-start': (index + 1) % 2 !== 0,
          'align-end': (index + 1) % 2 === 0,
        }"
      >
        <component :is="`SvgoNumber-${item.id}`" class="results-way__number" />
        <div class="results-way__content">
          <p class="text-bold-900" v-html="item.title"></p>
          <p v-html="item.subtitle"></p>
        </div>
        <component
          :is="(index + 1) % 2 == 0 ? 'SvgoArrowLeft' : 'SvgoArrowRight'"
          :class="(index + 1) % 2 == 0 ? 'arrow-left' : 'arrow-right'"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.results-way {
  h2 {
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;
    @media (max-width: 768px) {
      text-align: left;
      margin-bottom: 50px;
    }
  }
}

.results-way__box {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.results-way__item {
  @include flex(row, center, flex-start);
  gap: 30px;
  position: relative;
  &.align-start {
    align-self: flex-start;
  }
  &.align-end {
    align-self: flex-end;
  }
  &:last-child {
    .arrow-left,
    .arrow-right {
      display: none;
    }
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    &.align-start,
    &.align-end {
      align-self: center;
    }
  }
}

.results-way__content {
  max-width: 380px;
  p:first-child {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  p {
    line-height: 1.75rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    flex: 1;
  }
}

.results-way__number {
  color: $secondary-color;
  height: 70px;
  width: auto;
}

.arrow-left {
  color: $accent;
  height: 69px;
  width: 68px;
  position: absolute;
  right: calc(100% + 35px);
  top: 50px;
}

.arrow-right {
  color: $accent;
  height: 69px;
  width: 68px;
  position: absolute;
  left: calc(100% + 35px);
  top: 50px;
}

@media (max-width: 768px) {
  .arrow-right,
  .arrow-left {
    display: none;
  }
}
</style>
