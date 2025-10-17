<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <TheHeader />
    
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// Import components
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<style>
/* Prevent body scroll when mobile menu is open */
.mobile-menu-open {
  overflow: hidden;
}
</style>