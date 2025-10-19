<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold">{{ title }}</h2>
          <p class="text-gray-600">{{ articlesCount }} articles found</p>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <BlogArticleCard
            v-for="article in articles"
            :key="article.id"
            :article="article"
            :categories="categories"
          />
        </div>

        <!-- Load More Button -->
        <div class="text-center" v-if="hasMoreArticles">
          <button 
            @click="$emit('loadMore')"
            :disabled="isLoading"
            class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
            <span v-else>{{ loadMoreText }}</span>
          </button>
        </div>

        <!-- No Articles Message -->
        <div v-if="articles.length === 0" class="text-center py-12">
          <div class="text-gray-500">
            <FileText class="h-16 w-16 mx-auto mb-4" />
            <h3 class="text-xl font-medium mb-2">{{ noArticlesMessage.title }}</h3>
            <p>{{ noArticlesMessage.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText } from 'lucide-vue-next'
import BlogArticleCard from './BlogArticleCard.vue'

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
  articles: Article[]
  categories: Category[]
  articlesCount: number
  hasMoreArticles?: boolean
  isLoading?: boolean
  title?: string
  loadMoreText?: string
  noArticlesMessage?: {
    title: string
    description: string
  }
}

withDefaults(defineProps<Props>(), {
  hasMoreArticles: false,
  isLoading: false,
  title: 'Latest Articles',
  loadMoreText: 'Load More Articles',
  noArticlesMessage: () => ({
    title: 'No Articles Found',
    description: 'Try adjusting your search or filter criteria.'
  })
})

defineEmits<{
  loadMore: []
}>()
</script>