<script setup>
const { closeModal, isModalVisible } = useModal();
</script>

<template>
  <main class="container main">
    <TopSection />
    <UxAudit />
    <Testimonials />
    <ResultsWay />
    <BottomSection />
    <Modal :isVisible="isModalVisible" :closeModal="closeModal">
      <Form :closeModal="closeModal" />
    </Modal>
  </main>
</template>

<style lang="scss">
.main {
  padding-top: 80px;
  padding-bottom: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media (max-width: 768px) {
    padding-top: 50px;
    gap: 50px;
  }
}
</style>
