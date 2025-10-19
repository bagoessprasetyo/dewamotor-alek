<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Experience the Dewamotor Difference?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Join thousands of satisfied customers who trust us with their automotive needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact"
            class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
          >
            Schedule Service
          </NuxtLink>
          <NuxtLink 
            to="/services"
            class="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors duration-200"
          >
            View Services
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props needed for this component
</script>