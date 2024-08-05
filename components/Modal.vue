<script setup>
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  closeModal: Function,
});
</script>
<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: $bg-color;
  padding: 1.25rem;
  border-radius: 8px;
  width: 90%;
  max-width: 550px;
  position: relative;
  box-shadow: 0px 32px 45px 0px #00000026;
  overflow-y: auto;
  max-height: 100%;
}

.close-button {
  position: absolute;
  top: 30px;
  right: 20px;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  color: $bg-color;
  background-color: $secondary-color;
  width: 40px;
  height: 40px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: lighten($secondary-color, 10%);
  }
}
</style>
