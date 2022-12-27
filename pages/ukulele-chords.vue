<script lang="ts" setup>
import { CHORDS, SUFFIXES } from '@/constants/chords'
const { getSEO } = useSEO()
const { title } = getSEO({ title: 'Ukulele Chords' })

useHead({
  title,
  meta: [{
    name: 'description',
    content: 'A collection of ukulele chords'
  }]
})
</script>

<template>
  <div class="pt-12 pb-16">
    <div class="text-center mb-12">
      <h1 class="text-6xl">
        Ukulele Chords
      </h1>
    </div>
    <div class="w-full">
      <div v-for="chord in CHORDS" :key="chord" class="w-full grid grid-cols-2 md:grid-cols-6 mb-6">
        <div v-for="suffix in SUFFIXES" :key="suffix" class="text-center">
          <p>
            {{ chord }}{{ suffix }}
          </p>
          <NuxtImg :src="`/imgs/ukulele-chords/${chord.includes('#') ? chord.replace('#', '-sharp') : chord}/${suffix}.svg`" class="w-full" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
