<script setup lang="ts">
const { getSEO } = useSEO()
const { title } = getSEO()

useHead({
  title
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
