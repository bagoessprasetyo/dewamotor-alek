<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
          <p class="text-xl text-gray-600">{{ description }}</p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="$emit('categoryChange', category.id)"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              selectedCategory === category.id 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
            ]"
          >
            <component :is="category.icon" class="h-4 w-4 mr-2 inline" />
            {{ category.name }}
          </button>
        </div>

        <!-- Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="category in visibleCategories" 
            :key="category.id"
            class="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
            @click="$emit('categorySelect', category)"
          >
            <div class="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mx-auto mb-4 group-hover:bg-red-200 transition-colors">
              <component :is="category.icon" class="h-8 w-8 text-red-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2 group-hover:text-red-600 transition-colors">
              {{ category.name }}
            </h3>
            <p class="text-sm text-gray-600 mb-3">{{ category.description }}</p>
            <span class="text-red-600 text-sm font-medium">
              {{ category.serviceCount }} services
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Category {
  id: string
  name: string
  description: string
  icon: any
  serviceCount: number
}

interface Props {
  categories: Category[]
  selectedCategory: string
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Service Categories',
  description: 'Choose from our comprehensive range of automotive services.'
})

defineEmits<{
  categoryChange: [categoryId: string]
  categorySelect: [category: Category]
}>()

const visibleCategories = computed(() => {
  if (props.selectedCategory === 'all') {
    return props.categories.filter(cat => cat.id !== 'all')
  }
  return props.categories.filter(cat => cat.id === props.selectedCategory)
})
</script>