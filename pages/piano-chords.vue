<script lang="ts" setup>
import { CHORDS_V2, SUFFIXES_V2 } from '@/constants/chords'
const { getSEO } = useSEO()
const { title } = getSEO({ title: 'Piano Chords' })

useHead({
  title,
  meta: [{
    name: 'description',
    content: 'A collection of piano chords'
  }]
})
</script>

<template>
  <div class="pt-12 pb-16">
    <div class="text-center mb-12">
      <h1 class="text-6xl">
        Piano Chords
      </h1>
    </div>
    <div class="w-full">
      <div v-for="chord in CHORDS_V2" :key="chord" class="w-full grid grid-cols-2 md:grid-cols-5 gap-x-4 mb-6">
        <div v-for="suffix in SUFFIXES_V2" :key="suffix" class="text-center">
          <p class="mb-4">
            {{ chord }}{{ suffix }}
          </p>
          <NuxtImg :src="`/imgs/piano-chords/${chord.includes('#') ? chord.replace('#', '-sharp') : chord}/${suffix}.png`" class="w-full" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
