<template>
  <div>
    <h2 class="text-3xl font-bold mb-8">{{ title }}</h2>
    
    <!-- Contact Methods -->
    <div class="space-y-6 mb-8">
      <div class="flex items-start space-x-4">
        <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
          <MapPin class="h-6 w-6" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">Visit Our Shop</h3>
          <p class="text-gray-600">
            {{ address.street }}<br>
            {{ address.district }}<br>
            {{ address.cityState }}
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4">
        <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
          <Phone class="h-6 w-6" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">Call Us</h3>
          <p class="text-gray-600">
            <a :href="`tel:${phone.replace(/[^+\d]/g, '')}`" class="hover:text-red-600 transition-colors">
              {{ phone }}
            </a>
          </p>
          <p class="text-sm text-gray-500">24/7 Emergency Line</p>
        </div>
      </div>

      <div class="flex items-start space-x-4">
        <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
          <Mail class="h-6 w-6" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">Email Us</h3>
          <p class="text-gray-600">
            <a :href="`mailto:${email}`" class="hover:text-red-600 transition-colors">
              {{ email }}
            </a>
          </p>
          <p class="text-sm text-gray-500">We'll respond within 24 hours</p>
        </div>
      </div>

      <div class="flex items-start space-x-4">
        <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
          <Clock class="h-6 w-6" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">Business Hours</h3>
          <div class="text-gray-600 space-y-1">
            <p v-for="hour in businessHours" :key="hour.day">
              {{ hour.day }}: {{ hour.time }}
            </p>
            <p class="text-sm text-red-600 font-medium">Emergency services available 24/7</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Placeholder -->
    <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
      <div class="text-center text-gray-500">
        <MapPin class="h-12 w-12 mx-auto mb-2" />
        <p class="font-medium">Interactive Map</p>
        <p class="text-sm">Google Maps integration would go here</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'

interface Address {
  street: string
  district: string
  cityState: string
}

interface BusinessHour {
  day: string
  time: string
}

interface Props {
  title?: string
  address?: Address
  phone?: string
  email?: string
  businessHours?: BusinessHour[]
}

withDefaults(defineProps<Props>(), {
  title: 'Get In Touch',
  address: () => ({
    street: '123 Automotive Street',
    district: 'Downtown District',
    cityState: 'City, State 12345'
  }),
  phone: '(123) 456-7890',
  email: 'info@dewamotor.com',
  businessHours: () => [
    { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ]
})
</script>