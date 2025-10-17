<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>{{ article?.title || 'Article Not Found' }} | Dewamotor Blog</Title>
      <Meta name="description" :content="article?.excerpt || 'Article not found on Dewamotor blog'" />
      <Meta name="keywords" :content="`${article?.title}, automotive blog, car maintenance, dewamotor`" />
    </Head>

    <!-- Article Content -->
    <article v-if="article" class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          
          <!-- Article Header -->
          <header class="mb-8">
            <!-- Breadcrumb -->
            <nav class="mb-6">
              <ol class="flex items-center space-x-2 text-sm text-gray-500">
                <li><NuxtLink to="/" class="hover:text-red-600">Home</NuxtLink></li>
                <li>/</li>
                <li><NuxtLink to="/blog" class="hover:text-red-600">Blog</NuxtLink></li>
                <li>/</li>
                <li class="text-gray-900">{{ article.title }}</li>
              </ol>
            </nav>

            <!-- Category Badge -->
            <div class="mb-4">
              <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {{ getCategoryName(article.category) }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {{ article.title }}
            </h1>

            <!-- Article Meta -->
            <div class="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div class="flex items-center space-x-3">
                <NuxtImg 
                  :src="article.author.avatar" 
                  :alt="article.author.name"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p class="font-medium text-gray-900">{{ article.author.name }}</p>
                  <p class="text-sm">{{ article.author.role }}</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1">
                  <Calendar class="h-4 w-4" />
                  <span class="text-sm">{{ formatDate(article.publishedAt) }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <Clock class="h-4 w-4" />
                  <span class="text-sm">{{ article.readTime }} min read</span>
                </div>
              </div>
            </div>

            <!-- Featured Image -->
            <div class="mb-8">
              <NuxtImg 
                :src="article.image" 
                :alt="article.title"
                class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </header>

          <!-- Article Content -->
          <div class="prose prose-lg max-w-none">
            <div class="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
              {{ article.excerpt }}
            </div>

            <!-- Article Body -->
            <div class="space-y-6 text-gray-700 leading-relaxed">
              <div v-html="article.content"></div>
            </div>
          </div>

          <!-- Article Footer -->
          <footer class="mt-12 pt-8 border-t border-gray-200">
            <!-- Tags -->
            <div class="mb-8" v-if="article.tags && article.tags.length > 0">
              <h3 class="text-lg font-semibold mb-4">Tags</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in article.tags" 
                  :key="tag"
                  class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Share Buttons -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Share this article</h3>
              <div class="flex space-x-4">
                <button 
                  @click="shareOnTwitter"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Share class="h-4 w-4" />
                  <span>Twitter</span>
                </button>
                <button 
                  @click="shareOnFacebook"
                  class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2"
                >
                  <Share class="h-4 w-4" />
                  <span>Facebook</span>
                </button>
                <button 
                  @click="copyLink"
                  class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
                >
                  <Link class="h-4 w-4" />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>

            <!-- Author Bio -->
            <div class="bg-gray-50 rounded-lg p-6 mb-8">
              <div class="flex items-start space-x-4">
                <NuxtImg 
                  :src="article.author.avatar" 
                  :alt="article.author.name"
                  class="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ article.author.name }}</h3>
                  <p class="text-red-600 font-medium mb-3">{{ article.author.role }}</p>
                  <p class="text-gray-600">{{ article.author.bio }}</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </article>

    <!-- 404 State -->
    <div v-else class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <div class="mb-8">
            <FileX class="h-24 w-24 mx-auto text-gray-400 mb-4" />
            <h1 class="text-4xl font-bold mb-4">Article Not Found</h1>
            <p class="text-xl text-gray-600 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/blog"
              class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Back to Blog
            </NuxtLink>
            <NuxtLink 
              to="/"
              class="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
            >
              Go Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Articles -->
    <section v-if="article && relatedArticles.length > 0" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Related Articles</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article 
              v-for="relatedArticle in relatedArticles" 
              :key="relatedArticle.id"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div class="relative">
                <NuxtImg 
                  :src="relatedArticle.image" 
                  :alt="relatedArticle.title"
                  class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute top-4 left-4">
                  <span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {{ getCategoryName(relatedArticle.category) }}
                  </span>
                </div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <Calendar class="h-4 w-4 text-gray-400" />
                  <span class="text-gray-500 text-sm">{{ formatDate(relatedArticle.publishedAt) }}</span>
                </div>
                
                <h3 class="text-lg font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {{ relatedArticle.title }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm line-clamp-2">{{ relatedArticle.excerpt }}</p>
                
                <NuxtLink 
                  :to="`/blog/${relatedArticle.slug}`"
                  class="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center space-x-1"
                >
                  <span>Read More</span>
                  <ArrowRight class="h-4 w-4" />
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section v-if="article" class="py-16 bg-red-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Need Professional Automotive Service?</h2>
          <p class="text-xl mb-8 text-red-100">
            Our expert technicians are ready to help with all your automotive needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/contact"
              class="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule Service
            </NuxtLink>
            <NuxtLink 
              to="/services"
              class="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              View Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Clock, Share, Link, FileX, ArrowRight } from 'lucide-vue-next'
import { useHead } from 'nuxt/app'
// import { ref } from 'process'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

// Get route params
const route = useRoute()
const slug = route.params.slug as string

// Categories
const categories = ref([
  { id: 'all', name: 'All Articles' },
  { id: 'maintenance', name: 'Maintenance' },
  { id: 'repair', name: 'Repair Tips' },
  { id: 'news', name: 'Industry News' },
  { id: 'guides', name: 'How-to Guides' },
  { id: 'seasonal', name: 'Seasonal Care' }
])

// Sample articles data (in a real app, this would come from an API)
const articles = ref([
  {
    id: 1,
    title: 'Essential Winter Car Maintenance Tips',
    slug: 'essential-winter-car-maintenance-tips',
    excerpt: 'Prepare your vehicle for winter weather with these essential maintenance tips from our expert technicians.',
    content: `
      <p>Winter weather can be tough on your vehicle, but with proper preparation and maintenance, you can ensure your car runs smoothly throughout the cold months. Here are our top recommendations for winter car care:</p>
      
      <h2>1. Check Your Battery</h2>
      <p>Cold weather reduces battery capacity significantly. Have your battery tested and replace it if it's more than 3-4 years old. Clean any corrosion from terminals and ensure connections are tight.</p>
      
      <h2>2. Inspect Your Tires</h2>
      <p>Tire pressure drops about 1 PSI for every 10°F decrease in temperature. Check your tire pressure monthly and consider switching to winter tires if you live in an area with heavy snow and ice.</p>
      
      <h2>3. Change Your Oil</h2>
      <p>Consider switching to a lower viscosity oil for winter months. Thinner oil flows better in cold temperatures, making it easier for your engine to start and reducing wear during cold starts.</p>
      
      <h2>4. Test Your Heating System</h2>
      <p>Ensure your heater, defroster, and ventilation system are working properly. Replace the cabin air filter if needed to maintain good air quality and heating efficiency.</p>
      
      <h2>5. Prepare an Emergency Kit</h2>
      <p>Keep essentials in your car including blankets, flashlight, first aid kit, jumper cables, ice scraper, and emergency food and water. Being prepared can make all the difference in an emergency situation.</p>
    `,
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=winter%20car%20maintenance%20snow%20tires%20automotive%20service%20cold%20weather%20preparation&image_size=landscape_4_3',
    category: 'seasonal',
    author: {
      name: 'Michael Rodriguez',
      role: 'Master Technician',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20technician%20portrait%20confident%20experienced&image_size=square',
      bio: 'Michael has over 20 years of experience in automotive repair and specializes in preventive maintenance and seasonal vehicle preparation.'
    },
    publishedAt: '2024-01-15',
    readTime: 5,
    tags: ['winter', 'maintenance', 'preparation', 'safety']
  },
  {
    id: 2,
    title: 'Signs Your Brakes Need Immediate Attention',
    slug: 'signs-your-brakes-need-immediate-attention',
    excerpt: 'Learn to recognize the warning signs that indicate your brakes require professional inspection and repair.',
    content: `
      <p>Your brakes are one of the most critical safety systems in your vehicle. Recognizing the warning signs of brake problems can prevent accidents and save you money on more extensive repairs. Here are the key indicators that your brakes need immediate attention:</p>
      
      <h2>1. Squealing or Grinding Noises</h2>
      <p>High-pitched squealing often indicates worn brake pads. If you hear grinding, your pads may be completely worn, and metal is grinding against metal. This requires immediate attention to prevent damage to your rotors.</p>
      
      <h2>2. Vibration When Braking</h2>
      <p>If your steering wheel or brake pedal vibrates when you apply the brakes, it could indicate warped rotors. This reduces braking efficiency and should be addressed promptly.</p>
      
      <h2>3. Soft or Spongy Brake Pedal</h2>
      <p>A brake pedal that feels soft or goes to the floor may indicate air in the brake lines, worn brake pads, or a brake fluid leak. This is a serious safety concern that requires immediate professional attention.</p>
      
      <h2>4. Warning Light</h2>
      <p>If your brake warning light comes on, don't ignore it. This could indicate low brake fluid, worn brake pads, or other brake system issues that need immediate diagnosis.</p>
      
      <h2>5. Pulling to One Side</h2>
      <p>If your car pulls to one side when braking, it could indicate uneven brake pad wear, a stuck caliper, or contaminated brake fluid. This affects your ability to stop safely and should be inspected immediately.</p>
    `,
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=car%20brake%20system%20brake%20pads%20automotive%20safety%20inspection&image_size=landscape_4_3',
    category: 'repair',
    author: {
      name: 'Sarah Chen',
      role: 'Lead Diagnostic Technician',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20automotive%20technician%20portrait%20confident&image_size=square',
      bio: 'Sarah specializes in brake systems and safety inspections with 12 years of experience in automotive diagnostics.'
    },
    publishedAt: '2024-01-12',
    readTime: 4,
    tags: ['brakes', 'safety', 'warning-signs', 'repair']
  }
])

// Find the current article
const article = computed(() => {
  return articles.value.find((a: { slug: string }) => a.slug === slug)
})

// Get related articles (same category, excluding current article)
const relatedArticles = computed(() => {
  if (!article.value) return []
  
  return articles.value
    .filter((a: { id: any; category: any }) => a.id !== article.value!.id && a.category === article.value!.category)
    .slice(0, 3)
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

const shareOnTwitter = () => {
  if (!article.value) return
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(article.value.title)
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareOnFacebook = () => {
  if (!article.value) return
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

// SEO for individual articles
if (article.value) {
  useHead({
    title: `${article.value.title} | Dewamotor Blog`,
    meta: [
      { name: 'description', content: article.value.excerpt }
    ]
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4 text-gray-900;
}

.prose p {
  @apply mb-4 leading-relaxed;
}
</style>