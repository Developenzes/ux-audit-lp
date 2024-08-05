<script setup>
defineProps({
  data: Object,
});

const { openModal } = useModal();
</script>

<template>
  <header class="header">
    <section class="container header-container">
      <SvgoLogo class="logo" />
      <Button class="button" :text="data.buttonText" :onClick="openModal" />
      <h1>
        {{ data.title }}
      </h1>
    </section>
  </header>
</template>

<style lang="scss">
.header {
  @include gradient-bg(#3d2e80, #dc1969);
  color: $bg-color;
  min-height: 550px;
  @media (max-width: 768px) {
    min-height: auto;
  }
}

.header-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  align-items: center;
  justify-items: center;
  gap: 80px;
  padding-top: 30px;
  padding-bottom: 56px;
  height: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;
    gap: 50px;
  }
}

.logo {
  width: 145px;
  height: 48px;
  justify-self: start;
  @media (max-width: 768px) {
    order: 0;
  }
}

.button {
  justify-self: end;
  @media (max-width: 768px) {
    order: 2;
    align-self: end;
    justify-self: center;
  }
}
</style>
