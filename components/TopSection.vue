<script setup>
const benefitsArray = [
  { id: 0, title: "Odhalíme nedostatky na vašej stránke" },
  { id: 1, title: "Zvýšime konverzný pomer vašich stránok" },
  { id: 2, title: "Zvýšime výkon marketingových kampaní" },
  { id: 3, title: "Znížime vaše náklady na vývoj" },
  { id: 4, title: "Zvýšime návštevnosť vašich stránok" },
];
</script>

<template>
  <section class="top-section">
    <div class="top-section__text">
      <h2>Rýchle <span class="accent">výsledky</span> pomocou UX auditu.</h2>
      <h4>
        UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú
        váš produkt,
        <span class="text-bold-800"
          >zvýšite ich spokojnosť a hlavne vaše zisky.</span
        >
      </h4>
    </div>
    <div class="top-section__badges">
      <figure>
        <img
          class="badge"
          src="@/assets/images/google_partner.png"
          alt="google partner"
        />
      </figure>
      <figure>
        <img
          class="badge"
          src="@/assets/images/adma.jpg"
          alt="Asociácia digitálnych marketingových agentúr"
        />
      </figure>
    </div>
    <BenefitsList class="top-section__benefits" :items="benefitsArray" />
  </section>
</template>

<style lang="scss">
.top-section {
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 380px);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "text bages"
    "text benefits";
  column-gap: 70px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "bages"
      "text"
      "benefits";
    row-gap: 50px;
  }
}

.top-section__text {
  display: grid;
  grid-area: text;
  row-gap: 40px;
}

.top-section__badges {
  @include flex(row, center, space-between);
  gap: 40px;
  grid-area: bages;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
}

.badge {
  max-height: 80px;
  width: 100%;
}

.top-section__benefits {
  grid-area: benefits;
}
</style>
