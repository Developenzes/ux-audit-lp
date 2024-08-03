<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="benefits-list">
    <li v-for="item in items" :key="item.id" class="benefit">
      {{ item.title }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.benefits-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
}

.benefit {
  position: relative;
  font-size: 1.125rem;
  line-height: 1.5rem;
  padding-left: 34px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(@/assets/icons/circle-tick.svg);
    left: 0;
    top: 0;
  }
}
</style>
