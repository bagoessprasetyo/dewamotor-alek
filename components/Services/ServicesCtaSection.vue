<template>
  <section class="py-16 bg-red-600 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
        <p class="text-xl mb-8 text-red-100">
          {{ description }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <NuxtLink 
            :to="primaryButton.link"
            class="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            <component :is="primaryButton.icon" v-if="primaryButton.icon" class="h-5 w-5 mr-2" />
            {{ primaryButton.text }}
          </NuxtLink>
          <a 
            :href="secondaryButton.link"
            class="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
          >
            <component :is="secondaryButton.icon" v-if="secondaryButton.icon" class="h-5 w-5 mr-2" />
            {{ secondaryButton.text }}
          </a>
        </div>

        <!-- Contact Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <MapPin class="h-6 w-6 mx-auto mb-2" />
            <p class="font-medium">Visit Us</p>
            <p class="text-red-100 text-sm">{{ contactInfo.address }}</p>
          </div>
          <div>
            <Phone class="h-6 w-6 mx-auto mb-2" />
            <p class="font-medium">Call Us</p>
            <p class="text-red-100 text-sm">{{ contactInfo.phone }}</p>
          </div>
          <div>
            <Clock class="h-6 w-6 mx-auto mb-2" />
            <p class="font-medium">Open Hours</p>
            <p class="text-red-100 text-sm">{{ contactInfo.hours }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendar, Phone, MapPin, Clock } from 'lucide-vue-next'

interface Button {
  text: string
  link: string
  icon?: any
}

interface ContactInfo {
  address: string
  phone: string
  hours: string
}

interface Props {
  title?: string
  description?: string
  primaryButton?: Button
  secondaryButton?: Button
  contactInfo?: ContactInfo
}

withDefaults(defineProps<Props>(), {
  title: 'Ready to Service Your Vehicle?',
  description: 'Schedule your appointment today and experience professional automotive care.',
  primaryButton: () => ({
    text: 'Book Appointment',
    link: '/contact',
    icon: Calendar
  }),
  secondaryButton: () => ({
    text: 'Call Now',
    link: 'tel:+1234567890',
    icon: Phone
  }),
  contactInfo: () => ({
    address: '123 Main Street, City, State 12345',
    phone: '(123) 456-7890',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 8AM-4PM'
  })
})
</script>