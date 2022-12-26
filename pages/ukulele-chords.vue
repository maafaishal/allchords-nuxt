<script lang="ts" setup>
import { CHORDS, SUFFIXES } from '@/constants/chords'
const { getSEO } = useSEO()
const { title } = getSEO({ title: 'Ukulele Chords' })

useHead({
  title
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
      <div v-for="chord in CHORDS" :key="chord" class="w-full flex mb-6">
        <div v-for="suffix in SUFFIXES" :key="suffix" class="flex-grow text-center basis-1/6">
          <p>
            {{ chord }}{{ suffix }}
          </p>
          <img :src="`/imgs/ukulele-chords/${chord.includes('#') ? chord.replace('#', '-sharp') : chord}/${suffix}.svg`" class="w-full" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</template>
