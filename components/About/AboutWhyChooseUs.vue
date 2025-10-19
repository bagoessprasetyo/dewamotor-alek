<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Why Choose Dewamotor?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that professional expertise and genuine care make.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="reason in whyChooseUs" 
            :key="reason.id"
            class="flex items-start space-x-4"
          >
            <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
              <component :is="reason.icon" class="h-6 w-6" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ reason.title }}</h3>
              <p class="text-gray-600">{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Wrench, CheckCircle, Clock, Phone } from 'lucide-vue-next'
import { ref } from 'vue'

const whyChooseUs = ref([
  {
    id: 1,
    title: 'Expert Diagnostics',
    description: 'State-of-the-art diagnostic equipment and certified technicians ensure accurate problem identification.',
    icon: Wrench
  },
  {
    id: 2,
    title: 'Quality Parts',
    description: 'We use only OEM and high-quality aftermarket parts backed by comprehensive warranties.',
    icon: CheckCircle
  },
  {
    id: 3,
    title: 'Fast Service',
    description: 'Efficient processes and skilled technicians mean faster turnaround times without compromising quality.',
    icon: Clock
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Emergency roadside assistance and after-hours support for our customers when you need it most.',
    icon: Phone
  }
])
</script>