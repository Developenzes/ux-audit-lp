<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button class="btn" @click="showForm = true">{{ text }}</button>
</template>

<style lang="scss">
.btn {
  width: 200px;
  height: 42px;
  color: $bg-color;
  background-color: $secondary-color;
  font-size: 0.875rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background-color: lighten($secondary-color, 10%);
  }
}
</style>
