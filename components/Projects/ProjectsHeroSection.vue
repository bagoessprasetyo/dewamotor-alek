<template>
  <section class="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Our Completed Projects',
  description: 'See the quality of our work through our portfolio of completed automotive projects. From engine rebuilds to brake replacements, we deliver excellence every time.'
})
</script>