<template>
  <section class="py-8 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- Search -->
          <div class="relative flex-1 max-w-md">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              :value="searchQuery"
              @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
              type="text" 
              placeholder="Search articles..."
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="$emit('categoryChange', category.id)"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                selectedCategory === category.id 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

interface Category {
  id: string
  name: string
}

interface Props {
  searchQuery: string
  selectedCategory: string
  categories: Category[]
}

defineProps<Props>()

defineEmits<{
  'update:searchQuery': [value: string]
  categoryChange: [categoryId: string]
}>()
</script>