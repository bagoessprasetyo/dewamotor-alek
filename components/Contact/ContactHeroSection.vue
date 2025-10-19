<template>
  <section class="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ title }}</h1>
        <p class="text-xl mb-8 text-gray-300">
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
  title: 'Contact Us',
  description: 'Ready to get started? Reach out to us for professional automotive services and expert advice.'
})
</script>