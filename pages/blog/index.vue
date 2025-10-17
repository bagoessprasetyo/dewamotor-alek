<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Automotive Blog - Tips, News &amp; Insights | Dewamotor</Title>
      <Meta name="description" content="Stay informed with Dewamotor's automotive blog. Get expert tips, industry news, maintenance guides, and insights from our certified technicians." />
      <Meta name="keywords" content="automotive blog, car maintenance tips, auto repair news, vehicle care guides, automotive insights, dewamotor blog" />
    </Head>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Automotive Blog</h1>
          <p class="text-xl mb-8 text-gray-300">
            Expert insights, maintenance tips, and industry news to keep you informed about your vehicle.
          </p>
        </div>
      </div>
    </section>

    <!-- Search & Filter Section -->
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
            <!-- Search -->
            <div class="relative flex-1 max-w-md">
              <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                v-model="searchQuery"
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
                @click="selectedCategory = category.id"
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

    <!-- Featured Article -->
    <section class="py-16" v-if="featuredArticle">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl font-bold mb-8">Featured Article</h2>
          
          <div class="bg-white rounded-lg shadow-xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div class="relative">
                <NuxtImg 
                  :src="featuredArticle.image" 
                  :alt="featuredArticle.title"
                  class="w-full h-64 lg:h-full object-cover"
                />
                <div class="absolute top-4 left-4">
                  <span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div class="p-8">
                <div class="flex items-center space-x-4 mb-4">
                  <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {{ getCategoryName(featuredArticle.category) }}
                  </span>
                  <span class="text-gray-500 text-sm">{{ formatDate(featuredArticle.publishedAt) }}</span>
                </div>
                
                <h3 class="text-2xl font-bold mb-4">{{ featuredArticle.title }}</h3>
                <p class="text-gray-600 mb-6">{{ featuredArticle.excerpt }}</p>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <NuxtImg 
                      :src="featuredArticle.author.avatar" 
                      :alt="featuredArticle.author.name"
                      class="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p class="font-medium">{{ featuredArticle.author.name }}</p>
                      <p class="text-sm text-gray-500">{{ featuredArticle.author.role }}</p>
                    </div>
                  </div>
                  
                  <NuxtLink 
                    :to="`/blog/${featuredArticle.slug}`"
                    class="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Read More
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold">Latest Articles</h2>
            <p class="text-gray-600">{{ filteredArticles.length }} articles found</p>
          </div>

          <!-- Articles Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <article 
              v-for="article in paginatedArticles" 
              :key="article.id"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div class="relative">
                <NuxtImg 
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
                    <NuxtImg 
                      :src="article.author.avatar" 
                      :alt="article.author.name"
                      class="w-8 h-8 rounded-full object-cover"
                    />
                    <span class="text-sm font-medium">{{ article.author.name }}</span>
                  </div>
                  
                  <NuxtLink 
                    :to="`/blog/${article.slug}`"
                    class="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight class="h-4 w-4" />
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>

          <!-- Load More Button -->
          <div class="text-center" v-if="hasMoreArticles">
            <button 
              @click="loadMoreArticles"
              class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-slate-800 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
          <p class="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest automotive tips, news, and exclusive offers.
          </p>
          
          <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto">
            <div class="flex gap-4">
              <input 
                v-model="newsletterEmail"
                type="email" 
                placeholder="Enter your email"
                required
                class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <button 
                type="submit"
                :disabled="isSubscribing"
                class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
              </button>
            </div>
          </form>
          
          <p class="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// import { watch } from 'fs'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-vue-next'
import { useHead } from 'nuxt/app'
// import { ref } from 'process'
import { computed, ref, watch } from 'vue'

// SEO
useHead({
  title: 'Automotive Blog - Tips, News & Insights | Dewamotor',
  meta: [
    { name: 'description', content: 'Stay informed with Dewamotor\'s automotive blog. Get expert tips, industry news, maintenance guides, and insights from our certified technicians.' }
  ]
})

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('all')
const currentPage = ref(1)
const articlesPerPage = 6
const newsletterEmail = ref('')
const isSubscribing = ref(false)

// Categories
const categories = ref([
  { id: 'all', name: 'All Articles' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'repair', name: 'Repair Tips' },
  { id: 'news', name: 'Industry News' },
  { id: 'guides', name: 'How-to Guides' },
  { id: 'seasonal', name: 'Seasonal Care' }
])

// Sample articles data
const articles = ref([
  {
    id: 1,
    title: 'Essential Winter Car Maintenance Tips',
    slug: 'essential-winter-car-maintenance-tips',
    excerpt: 'Prepare your vehicle for winter weather with these essential maintenance tips from our expert technicians.',
    content: '',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=winter%20car%20maintenance%20snow%20tires%20automotive%20service%20cold%20weather%20preparation&image_size=landscape_4_3',
    category: 'seasonal',
    author: {
      name: 'Michael Rodriguez',
      role: 'Master Technician',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20technician%20portrait%20confident%20experienced&image_size=square'
    },
    publishedAt: '2024-01-15',
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: 'Signs Your Brakes Need Immediate Attention',
    slug: 'signs-your-brakes-need-immediate-attention',
    excerpt: 'Learn to recognize the warning signs that indicate your brakes require professional inspection and repair.',
    content: '',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=car%20brake%20system%20brake%20pads%20automotive%20safety%20inspection&image_size=landscape_4_3',
    category: 'repair',
    author: {
      name: 'Sarah Chen',
      role: 'Lead Diagnostic Technician',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20automotive%20technician%20portrait%20confident&image_size=square'
    },
    publishedAt: '2024-01-12',
    readTime: 4,
    featured: false
  },
  {
    id: 3,
    title: 'How to Extend Your Engine\'s Lifespan',
    slug: 'how-to-extend-your-engines-lifespan',
    excerpt: 'Simple maintenance practices that can significantly extend your engine\'s life and improve performance.',
    content: '',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=car%20engine%20maintenance%20oil%20change%20automotive%20care%20longevity&image_size=landscape_4_3',
    category: 'maintenance',
    author: {
      name: 'David Thompson',
      role: 'Engine Specialist',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20engine%20specialist%20portrait%20experienced&image_size=square'
    },
    publishedAt: '2024-01-10',
    readTime: 6,
    featured: false
  },
  {
    id: 4,
    title: 'Electric Vehicle Maintenance: What You Need to Know',
    slug: 'electric-vehicle-maintenance-what-you-need-to-know',
    excerpt: 'Understanding the unique maintenance requirements of electric vehicles and how they differ from traditional cars.',
    content: '',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=electric%20vehicle%20charging%20EV%20maintenance%20modern%20automotive%20technology&image_size=landscape_4_3',
    category: 'news',
    author: {
      name: 'Sarah Chen',
      role: 'Lead Diagnostic Technician',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20automotive%20technician%20portrait%20confident&image_size=square'
    },
    publishedAt: '2024-01-08',
    readTime: 7,
    featured: false
  },
  {
    id: 5,
    title: 'DIY Car Inspection Checklist',
    slug: 'diy-car-inspection-checklist',
    excerpt: 'A comprehensive checklist to help you perform basic car inspections and identify potential issues early.',
    content: '',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=car%20inspection%20checklist%20automotive%20maintenance%20DIY%20vehicle%20care&image_size=landscape_4_3',
    category: 'guides',
    author: {
      name: 'Michael Rodriguez',
      role: 'Master Technician',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20technician%20portrait%20confident%20experienced&image_size=square'
    },
    publishedAt: '2024-01-05',
    readTime: 8,
    featured: false
  },
  {
    id: 6,
    title: 'Understanding Your Car\'s Warning Lights',
    slug: 'understanding-your-cars-warning-lights',
    excerpt: 'Decode your dashboard warning lights and learn when to seek professional help for your vehicle.',
    content: '',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=car%20dashboard%20warning%20lights%20automotive%20diagnostics%20vehicle%20indicators&image_size=landscape_4_3',
    category: 'guides',
    author: {
      name: 'David Thompson',
      role: 'Engine Specialist',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20engine%20specialist%20portrait%20experienced&image_size=square'
    },
    publishedAt: '2024-01-03',
    readTime: 5,
    featured: false
  }
])

// Computed properties
const featuredArticle = computed(() => {
  return articles.value.find((article: { featured: any }) => article.featured)
})

const filteredArticles = computed(() => {
  let filtered = articles.value.filter((article: { featured: any }) => !article.featured)
  
  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter((article: { category: any }) => article.category === selectedCategory.value)
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((article: { title: string; excerpt: string }) => 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query)
    )
  }
  
  return filtered
})

const paginatedArticles = computed(() => {
  const start = 0
  const end = currentPage.value * articlesPerPage
  return filteredArticles.value.slice(start, end)
})

const hasMoreArticles = computed(() => {
  return paginatedArticles.value.length < filteredArticles.value.length
})

// Methods
const getCategoryName = (categoryId: string) => {
  const category = categories.value.find((cat: { id: string }) => cat.id === categoryId)
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

const loadMoreArticles = () => {
  currentPage.value++
}

const subscribeNewsletter = async () => {
  isSubscribing.value = true
  
  try {
    // Send email to newsletter API
    const response = await $fetch('/api/newsletter', {
      method: 'POST',
      body: { email: newsletterEmail.value }
    })
    
    if ((response as { success: boolean }).success) {
      // Reset form
      newsletterEmail.value = ''
      
      // Show success message (you could add a toast notification here)
      alert((response as { message?: string }).message || 'Successfully subscribed to our newsletter!')
    }
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    
    // Show specific error message if available
    const errorMessage = error.data?.statusMessage || 'Error subscribing to newsletter. Please try again.'
    alert(errorMessage)
  } finally {
    isSubscribing.value = false
  }
}

// Watch for category/search changes to reset pagination
watch([selectedCategory, searchQuery], () => {
  currentPage.value = 1
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>