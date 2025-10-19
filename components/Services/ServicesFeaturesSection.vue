<template>
  <section class="py-16 bg-slate-800 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
          <p class="text-xl text-gray-300">{{ description }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            class="text-center group"
          >
            <div class="flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg mx-auto mb-4 group-hover:bg-red-500 transition-colors">
              <component :is="feature.icon" class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="text-center"
          >
            <div class="text-3xl font-bold text-red-400 mb-2">{{ stat.value }}</div>
            <div class="text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, Clock, Award, Users, Wrench, Car, CheckCircle, ThumbsUp } from 'lucide-vue-next'

interface Feature {
  id: number
  title: string
  description: string
  icon: any
}

interface Stat {
  label: string
  value: string
}

interface Props {
  title?: string
  description?: string
  features?: Feature[]
  stats?: Stat[]
}

withDefaults(defineProps<Props>(), {
  title: 'Why Choose Our Services',
  description: 'We provide exceptional automotive care with industry-leading standards.',
  features: () => [
    {
      id: 1,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience in automotive repair and maintenance.',
      icon: Wrench
    },
    {
      id: 2,
      title: 'Quality Guarantee',
      description: 'All our services come with comprehensive warranties and satisfaction guarantees.',
      icon: Shield
    },
    {
      id: 3,
      title: 'Fast Service',
      description: 'Quick turnaround times without compromising on quality workmanship.',
      icon: Clock
    },
    {
      id: 4,
      title: 'Modern Equipment',
      description: 'State-of-the-art diagnostic tools and equipment for accurate service.',
      icon: Car
    },
    {
      id: 5,
      title: 'Fair Pricing',
      description: 'Transparent, competitive pricing with no hidden fees or surprises.',
      icon: CheckCircle
    },
    {
      id: 6,
      title: 'Customer Satisfaction',
      description: 'Committed to exceeding expectations with every service we provide.',
      icon: ThumbsUp
    }
  ],
  stats: () => [
    { label: 'Happy Customers', value: '2,500+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Services Completed', value: '10,000+' },
    { label: 'Expert Technicians', value: '12' }
  ]
})
</script>