<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ description }}
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-12">
          <p class="text-lg text-gray-600 mb-6">{{ ctaText }}</p>
          <NuxtLink 
            :to="ctaButton.link"
            class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center"
          >
            <component :is="ctaButton.icon" v-if="ctaButton.icon" class="h-5 w-5 mr-2" />
            {{ ctaButton.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'
import ServiceCard from './ServiceCard.vue'

interface Service {
  id: number
  title: string
  description: string
  icon: any
  features: string[]
  price: string
  duration: string
  category: string
  popular?: boolean
}

interface Button {
  text: string
  link: string
  icon?: any
}

interface Props {
  services: Service[]
  title?: string
  description?: string
  ctaText?: string
  ctaButton?: Button
}

withDefaults(defineProps<Props>(), {
  title: 'Our Services',
  description: 'Comprehensive automotive services to keep your vehicle running at its best.',
  ctaText: 'Need a custom service or have questions?',
  ctaButton: () => ({
    text: 'Schedule Appointment',
    link: '/contact',
    icon: Calendar
  })
})
</script>