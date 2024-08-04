<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
  width: {
    type: String,
    default: "200px",
  },
  height: {
    type: String,
    default: "42px",
  },
  fontSize: {
    type: String,
    default: "0.875rem",
  },
});
const buttonStyle = computed(() => ({
  maxWidth: props.width,
  height: props.height,
  fontSize: props.fontSize,
}));
</script>

<template>
  <button class="btn" :style="buttonStyle" @click="onClick">{{ text }}</button>
</template>

<style lang="scss">
.btn {
  color: $bg-color;
  background-color: $secondary-color;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s all;
  padding: 0.75rem 1.25rem;
  &:hover {
    background-color: lighten($secondary-color, 10%);
  }
}
</style>
