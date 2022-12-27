<script setup lang="ts">
const { getSEO } = useSEO()
const { title } = getSEO()

useHead({
  title,
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
  ],
  meta: [{
    name: 'description',
    content: 'A collection of guitar, piano, and ukulele chords'
  }]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
