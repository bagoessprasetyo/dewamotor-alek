<template>
  <section class="py-16 bg-slate-800 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Certifications &amp; Recognition</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is recognized by industry leaders and certification bodies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="cert in certifications" 
            :key="cert.id"
            class="text-center"
          >
            <div class="bg-white/10 rounded-lg p-6 mb-4">
              <component :is="cert.icon" class="h-12 w-12 mx-auto text-red-400" />
            </div>
            <h3 class="font-semibold mb-2">{{ cert.name }}</h3>
            <p class="text-sm text-gray-300">{{ cert.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Award, Shield, CheckCircle, Star } from 'lucide-vue-next'
import { ref } from 'vue'

const certifications = ref([
  {
    id: 1,
    name: 'ASE Certified',
    description: 'Automotive Service Excellence certification for all technicians',
    icon: Award
  },
  {
    id: 2,
    name: 'BBB A+ Rating',
    description: 'Better Business Bureau highest rating for customer service',
    icon: Star
  },
  {
    id: 3,
    name: 'Factory Trained',
    description: 'Certified by major automotive manufacturers',
    icon: CheckCircle
  },
  {
    id: 4,
    name: 'EPA Certified',
    description: 'Environmental Protection Agency certified for safe practices',
    icon: Shield
  }
])
</script>