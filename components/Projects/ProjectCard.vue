<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <!-- Project Image -->
    <div class="relative h-64 overflow-hidden">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        loading="lazy"
      />
      <div class="absolute top-4 left-4">
        <span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {{ project.category }}
        </span>
      </div>
      
      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <div class="opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Eye class="h-8 w-8 text-white" />
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4 line-clamp-2">{{ project.description }}</p>
      
      <!-- Project Details -->
      <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div class="flex items-center">
          <Car class="h-4 w-4 mr-1" />
          <span>{{ project.vehicle }}</span>
        </div>
        <div class="flex items-center">
          <Calendar class="h-4 w-4 mr-1" />
          <span>{{ project.completionDate }}</span>
        </div>
      </div>

      <!-- View Details Button -->
      <NuxtLink 
        :to="`/projects/${project.slug}`"
        class="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-200 group"
      >
        {{ linkText }}
        <ChevronRight class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight, Eye, Car, Calendar } from 'lucide-vue-next'

interface Project {
  id: number
  title: string
  slug: string
  description: string
  category: string
  vehicle: string
  completionDate: string
  image: string
  filterCategory: string
}

interface Props {
  project: Project
  linkText?: string
}

withDefaults(defineProps<Props>(), {
  linkText: 'View Details'
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>