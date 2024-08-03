<script setup>
const showAlert = () => {
  alert("Button clicked!");
};
</script>

<template>
  <section class="ux-audit">
    <p class="ux-audit__text">
      Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
      <span class="text-bold-800"> pomocou UX auditu.</span>
    </p>
    <Button
      class="ux-audit__button"
      text="Mám záujem o UX audit"
      width="380px"
      height="72px"
      fontSize="1.125rem"
      :onClick="showAlert"
    />
  </section>
</template>

<style lang="scss">
.ux-audit {
  display: flex;
  gap: 60px;
  justify-content: space-between;
  @media (max-width: 940px) {
    flex-direction: column;
    gap: 50px;
    margin-bottom: 30px;
  }
}

.ux-audit__text {
  flex: 1;
  font-size: 1.375rem;
  line-height: 2.5rem;
}

.ux-audit__button {
  flex: 1;
}
</style>
