<script setup>
const { data } = await useFetch("/api/data");

useHead({
  title: "Riesenia_mpenzes",
});
</script>

<template>
  <div>
    <NuxtLayout>
      <Header v-for="item of data" :key="item.header" :data="item.header" />
      <NuxtPage />
      <NuxtSnackbar />
    </NuxtLayout>
  </div>
</template>
