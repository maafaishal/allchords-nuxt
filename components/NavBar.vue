<script setup lang="ts">
</script>

<template>
  <header class="border-b">
    <div class="pt-6 pb-4 container mx-auto flex justify-between items-center">
      <div class="h-[52px]">
        <NuxtLink to="/">
          <img src="@/assets/logo.svg" class="h-full">
        </NuxtLink>
      </div>
      <div class="flex">
        <NuxtLink to="/">
          <div class="px-8 py-3.5 rounded-md font-medium ml-4 bg-red-200 hover:bg-red-500 transition-colors">
            Home
          </div>
        </NuxtLink>
        <NuxtLink to="/guitar-chords">
          <div class="px-8 py-3.5 rounded-md font-medium ml-4 bg-green-200 hover:bg-green-500 transition-colors">
            Guitar
          </div>
        </NuxtLink>
        <NuxtLink to="/piano-chords">
          <div class="px-8 py-3.5 rounded-md font-medium ml-4 bg-blue-200 hover:bg-blue-500 transition-colors">
            Piano
          </div>
        </NuxtLink>
        <NuxtLink to="/ukulele-chords">
          <div class="px-8 py-3.5 rounded-md font-medium ml-4 bg-purple-200 hover:bg-purple-500 transition-colors">
            Ukulele
          </div>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
