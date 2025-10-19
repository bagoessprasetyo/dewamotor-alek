<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Automotive Blog - Tips, News &amp; Insights | Dewamotor</Title>
      <Meta name="description" content="Stay informed with Dewamotor's automotive blog. Get expert tips, industry news, maintenance guides, and insights from our certified technicians." />
      <Meta name="keywords" content="automotive blog, car maintenance tips, auto repair news, vehicle care guides, automotive insights, dewamotor blog" />
    </Head>

    <!-- Hero Section -->
    <BlogHeroSection />

    <!-- Search & Filter Section -->
    <BlogSearchFilterSection
      v-model:search-query="searchQuery"
      :selected-category="selectedCategory"
      :categories="categories"
      @category-change="handleCategoryChange"
    />

    <!-- Featured Article -->
    <BlogFeaturedArticleSection
      :article="featuredArticle"
      :categories="categories"
    />

    <!-- Articles Grid -->
    <BlogArticlesGridSection
      :articles="paginatedArticles"
      :categories="categories"
      :articles-count="filteredArticles.length"
      :has-more-articles="hasMoreArticles"
      :is-loading="isLoadingMore"
      @load-more="loadMoreArticles"
    />

    <!-- Newsletter Signup -->
    <BlogNewsletterSection
      @subscribe="subscribeNewsletter"
      @success="handleNewsletterSuccess"
      @error="handleNewsletterError"
    />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { computed, ref, watch } from 'vue'

// Import components
import BlogHeroSection from '~/components/Blog/BlogHeroSection.vue'
import BlogSearchFilterSection from '~/components/Blog/BlogSearchFilterSection.vue'
import BlogFeaturedArticleSection from '~/components/Blog/BlogFeaturedArticleSection.vue'
import BlogArticlesGridSection from '~/components/Blog/BlogArticlesGridSection.vue'
import BlogNewsletterSection from '~/components/Blog/BlogNewsletterSection.vue'

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
const isLoadingMore = ref(false)

// Categories
const categories = ref([
  { id: 'all', name: 'All Articles' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'repair', name: 'Repair Tips' },
  { id: 'news', name: 'Industry News' },
  { id: 'guides', name: 'How-to Guides' },
  { id: 'seasonal', name: 'Seasonal Care' }
])

// Sample articles data (same as before)
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
  return articles.value.find(article => article.featured)
})

const filteredArticles = computed(() => {
  let filtered = articles.value.filter(article => !article.featured)
  
  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(article => article.category === selectedCategory.value)
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article => 
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
const handleCategoryChange = (categoryId: string) => {
  selectedCategory.value = categoryId
}

const loadMoreArticles = async () => {
  isLoadingMore.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  currentPage.value++
  isLoadingMore.value = false
}

const subscribeNewsletter = async (email: string) => {
  try {
    const response = await $fetch('/api/newsletter', {
      method: 'POST',
      body: { email }
    })
    
    console.log('Newsletter subscription successful:', response)
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    throw error
  }
}

const handleNewsletterSuccess = () => {
  console.log('Newsletter subscription successful')
}

const handleNewsletterError = (error: any) => {
  console.error('Newsletter subscription failed:', error)
}

// Watch for category/search changes to reset pagination
watch([selectedCategory, searchQuery], () => {
  currentPage.value = 1
})
</script>