<script setup lang="ts">
</script>

<template>
  <header class="border-b">
    <div class="pt-6 pb-4 container mx-auto flex justify-between items-center">
      <div class="h-[52px] mx-auto md:mx-0">
        <NuxtLink to="/">
          <NuxtImg src="imgs/logo.svg" class="h-full" />
        </NuxtLink>
      </div>
      <div class="hidden md:flex">
        <NuxtLink to="/">
          <div class="relative px-8 py-3.5 rounded-md font-medium ml-4 bg-red-100 hover:bg-red-500 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-red-500 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
            Home
          </div>
        </NuxtLink>
        <NuxtLink to="/guitar-chords">
          <div class="relative px-8 py-3.5 rounded-md font-medium ml-4 bg-orange-100 hover:bg-orange-500 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-orange-500 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
            Guitar
          </div>
        </NuxtLink>
        <NuxtLink to="/piano-chords">
          <div class="relative px-8 py-3.5 rounded-md font-medium ml-4 bg-green-100 hover:bg-green-500 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-green-500 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
            Piano
          </div>
        </NuxtLink>
        <NuxtLink to="/ukulele-chords">
          <div class="relative px-8 py-3.5 rounded-md font-medium ml-4 bg-blue-100 hover:bg-blue-500 hover:bg-opacity-80 after:bg-opacity-80 transition-colors after:bg-blue-500 after:w-full after:h-[5px] after:absolute after:left-0 after:bottom-0 after:rounded">
            Ukulele
          </div>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
