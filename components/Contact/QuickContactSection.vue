<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
          <p class="text-xl text-gray-600">
            {{ description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Emergency Service -->
          <div class="bg-red-600 text-white rounded-lg p-6 text-center">
            <AlertTriangle class="h-12 w-12 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2">{{ emergencyCard.title }}</h3>
            <p class="mb-4">{{ emergencyCard.description }}</p>
            <a 
              :href="`tel:${emergencyCard.phone.replace(/[^+\d]/g, '')}`" 
              class="bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              {{ emergencyCard.buttonText }}: {{ emergencyCard.phone }}
            </a>
          </div>

          <!-- Schedule Appointment -->
          <div class="bg-white rounded-lg shadow-lg p-6 text-center">
            <Calendar class="h-12 w-12 mx-auto mb-4 text-red-600" />
            <h3 class="text-xl font-bold mb-2">{{ scheduleCard.title }}</h3>
            <p class="text-gray-600 mb-4">{{ scheduleCard.description }}</p>
            <button 
              @click="$emit('scrollToForm')"
              class="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              {{ scheduleCard.buttonText }}
            </button>
          </div>

          <!-- Get Quote -->
          <div class="bg-slate-800 text-white rounded-lg p-6 text-center">
            <FileText class="h-12 w-12 mx-auto mb-4" />
            <h3 class="text-xl font-bold mb-2">{{ quoteCard.title }}</h3>
            <p class="mb-4">{{ quoteCard.description }}</p>
            <button 
              @click="$emit('setQuoteMode')"
              class="bg-white text-slate-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {{ quoteCard.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AlertTriangle, Calendar, FileText } from 'lucide-vue-next'

interface Card {
  title: string
  description: string
  buttonText: string
}

interface EmergencyCard extends Card {
  phone: string
}

interface Props {
  title?: string
  description?: string
  emergencyCard?: EmergencyCard
  scheduleCard?: Card
  quoteCard?: Card
}

withDefaults(defineProps<Props>(), {
  title: 'Need Immediate Assistance?',
  description: 'Choose the fastest way to reach us based on your needs.',
  emergencyCard: () => ({
    title: 'Emergency Service',
    description: 'Roadside assistance and emergency repairs available 24/7',
    buttonText: 'Call Now',
    phone: '(123) 456-7890'
  }),
  scheduleCard: () => ({
    title: 'Schedule Service',
    description: 'Book your appointment online for routine maintenance and repairs',
    buttonText: 'Book Appointment'
  }),
  quoteCard: () => ({
    title: 'Get Free Quote',
    description: 'Receive a detailed estimate for your automotive service needs',
    buttonText: 'Request Quote'
  })
})

defineEmits<{
  scrollToForm: []
  setQuoteMode: []
}>()
</script>