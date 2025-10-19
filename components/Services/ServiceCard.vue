<template>
  <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
    <!-- Popular Badge -->
    <div v-if="service.popular" class="absolute top-4 right-4 z-10">
      <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        Most Popular
      </span>
    </div>

    <div class="p-6">
      <!-- Service Icon -->
      <div class="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mb-4 group-hover:bg-red-200 transition-colors">
        <component :is="service.icon" class="h-8 w-8 text-red-600" />
      </div>

      <!-- Service Info -->
      <h3 class="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
        {{ service.title }}
      </h3>
      <p class="text-gray-600 mb-4">{{ service.description }}</p>

      <!-- Features List -->
      <ul class="space-y-2 mb-6">
        <li 
          v-for="(feature, index) in service.features" 
          :key="index"
          class="flex items-center text-sm text-gray-700"
        >
          <Check class="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
          <span>{{ feature }}</span>
        </li>
      </ul>

      <!-- Price and Duration -->
      <div class="border-t pt-4">
        <div class="flex items-center justify-between mb-4">
          <div>
            <span class="text-2xl font-bold text-red-600">{{ service.price }}</span>
            <span class="text-gray-500 text-sm ml-1">starting from</span>
          </div>
          <div class="text-right">
            <div class="flex items-center text-gray-500 text-sm">
              <Clock class="h-4 w-4 mr-1" />
              <span>{{ service.duration }}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button 
            @click="$emit('bookService', service)"
            class="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Book Now
          </button>
          <button 
            @click="$emit('learnMore', service)"
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Info class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, Clock, Info } from 'lucide-vue-next'

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

interface Props {
  service: Service
}

defineProps<Props>()

defineEmits<{
  bookService: [service: Service]
  learnMore: [service: Service]
}>()
</script>