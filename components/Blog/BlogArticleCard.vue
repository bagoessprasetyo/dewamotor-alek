<template>
  <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <div class="relative">
      <img 
        :src="article.image" 
        :alt="article.title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-4 left-4">
        <span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {{ getCategoryName(article.category) }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <div class="flex items-center space-x-2 mb-3">
        <Calendar class="h-4 w-4 text-gray-400" />
        <span class="text-gray-500 text-sm">{{ formatDate(article.publishedAt) }}</span>
        <Clock class="h-4 w-4 text-gray-400 ml-2" />
        <span class="text-gray-500 text-sm">{{ article.readTime }} min read</span>
      </div>
      
      <h3 class="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
        {{ article.title }}
      </h3>
      <p class="text-gray-600 mb-4 line-clamp-3">{{ article.excerpt }}</p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img 
            :src="article.author.avatar" 
            :alt="article.author.name"
            class="w-8 h-8 rounded-full object-cover"
          />
          <span class="text-sm font-medium">{{ article.author.name }}</span>
        </div>
        
        <NuxtLink 
          :to="`/blog/${article.slug}`"
          class="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center space-x-1 group"
        >
          <span>{{ linkText }}</span>
          <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Calendar, Clock, ArrowRight } from 'lucide-vue-next'

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
  article: Article
  categories: Category[]
  linkText?: string
}

const props = withDefaults(defineProps<Props>(), {
  linkText: 'Read More'
})

// Fix: Don't call defineProps inside function
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

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3; /* Add standard property for compatibility */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>