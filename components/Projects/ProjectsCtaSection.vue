<template>
  <section class="bg-slate-800 text-white py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Join our satisfied customers and experience the quality workmanship that sets us apart.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/contact"
          class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
        >
          Get Free Quote
        </NuxtLink>
        <a 
          href="tel:+1234567890"
          class="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors duration-200"
        >
          Call Now: (123) 456-7890
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Tidak ada props atau logic, menggunakan content statis seperti di kode asli
</script>