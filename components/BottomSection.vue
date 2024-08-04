<script setup>
const benefitsArray = [
  { id: 0, title: "Informačnú architektúru a štruktúru kategórií" },
  { id: 1, title: "Správanie návštevníkov na kľúčových stránkach" },
  { id: 2, title: "Rýchlosť a dostupnosť stránok, SEO nastavenia" },
  { id: 3, title: "Váš biznis a vašich zákazníkov" },
  { id: 4, title: "Ciele, ktoré chcete dosiahnuť" },
  { id: 5, title: "Webovú analytiku" },
];
</script>

<template>
  <section class="bottom-section">
    <h2>Zameriame sa na to <span class="accent">najdôležitejšie.</span></h2>
    <div class="bottom-section__box">
      <Ux-audit isColumn />
      <BenefitsList :items="benefitsArray" />
    </div>
  </section>
</template>

<style lang="scss">
.bottom-section {
  h2 {
    max-width: 600px;
    margin-bottom: 0.5rem;
    @media (max-width: 768px) {
      margin-bottom: 3.5rem;
    }
  }
}

.bottom-section__box {
  display: grid;
  grid-template-columns: minmax(0, 380px) minmax(0, auto);
  gap: 5.5rem;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
    div:first-child {
      order: 2;
    }
    div:last-child {
      order: 1;
    }
  }
}
</style>
