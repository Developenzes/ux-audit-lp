<script setup>
const { data } = await useFetch("/api/data");
</script>

<template>
  <div>
    <NuxtLayout>
      <Header v-for="item of data" :key="item.header" :data="item.header" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
