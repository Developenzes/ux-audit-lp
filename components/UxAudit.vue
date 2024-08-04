<script setup>
const props = defineProps({
  isColumn: {
    type: Boolean,
    default: false,
  },
});

const flexStyles = computed(() => ({
  gridTemplateColumns: props.isColumn
    ? "1fr"
    : "minmax(0, auto) minmax(0, 380px)",
  gap: props.isColumn ? "50px" : "70px",
}));

const { openModal } = useModal();
</script>

<template>
  <div class="ux-audit" :style="flexStyles">
    <p class="ux-audit__text">
      Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
      <span class="text-bold-800"> pomocou UX auditu.</span>
    </p>
    <Button
      text="Mám záujem o UX audit"
      width="380px"
      height="72px"
      fontSize="1.125rem"
      :onClick="openModal"
    />
  </div>
</template>

<style lang="scss">
.ux-audit {
  display: grid;
  @media (max-width: 940px) {
    grid-template-columns: 1fr !important;
    gap: 50px !important;
    margin-bottom: 30px;
  }
}

.ux-audit__text {
  font-size: 1.375rem;
  line-height: 2.5rem;
}
</style>
