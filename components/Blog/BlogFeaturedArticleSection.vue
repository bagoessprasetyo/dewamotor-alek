<template>
  <section class="py-16" v-if="article">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold mb-8">{{ sectionTitle }}</h2>
        
        <div class="bg-white rounded-lg shadow-xl overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative">
              <img 
                :src="article.image" 
                :alt="article.title"
                class="w-full h-64 lg:h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ badgeText }}
                </span>
              </div>
            </div>
            
            <div class="p-8">
              <div class="flex items-center space-x-4 mb-4">
                <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  {{ getCategoryName(article.category) }}
                </span>
                <span class="text-gray-500 text-sm">{{ formatDate(article.publishedAt) }}</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-4">{{ article.title }}</h3>
              <p class="text-gray-600 mb-6">{{ article.excerpt }}</p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <img 
                    :src="article.author.avatar" 
                    :alt="article.author.name"
                    class="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p class="font-medium">{{ article.author.name }}</p>
                    <p class="text-sm text-gray-500">{{ article.author.role }}</p>
                  </div>
                </div>
                
                <NuxtLink 
                  :to="`/blog/${article.slug}`"
                  class="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  {{ linkText }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Author {
  name: string
  role: string
  avatar: string
}

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
  category: string
  author: Author
  publishedAt: string
  readTime: number
  featured: boolean
}

interface Category {
  id: string
  name: string
}

interface Props {
  article?: Article
  categories: Category[]
  sectionTitle?: string
  badgeText?: string
  linkText?: string
}

const props = withDefaults(defineProps<Props>(), {
  sectionTitle: 'Featured Article',
  badgeText: 'Featured',
  linkText: 'Read More'
})

// Use computed instead of function that calls defineProps
const getCategoryName = (categoryId: string) => {
  const category = props.categories.find(cat => cat.id === categoryId)
  return category ? category.name : 'Article'
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>