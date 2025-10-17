<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Our Projects - Dewamotor Professional Automotive Services</Title>
      <Meta name="description" content="Browse our completed automotive projects. See before and after photos of engine repairs, brake services, transmission work, and more professional automotive services." />
      <Meta name="keywords" content="automotive projects, car repair gallery, engine repair photos, brake service examples, transmission repair showcase" />
    </Head>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Completed Projects</h1>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            See the quality of our work through our portfolio of completed automotive projects. 
            From engine rebuilds to brake replacements, we deliver excellence every time.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              activeFilter === filter.value 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <!-- Project Image -->
            <div class="relative h-64 overflow-hidden">
              <NuxtImg 
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
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              
              <!-- Project Details -->
              <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{{ project.vehicle }}</span>
                <span>{{ project.completionDate }}</span>
              </div>

              <!-- View Details Button -->
              <NuxtLink 
                :to="`/projects/${project.slug}`"
                class="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                View Details
                <ChevronRight class="ml-1 h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMoreProjects">
          <button 
            @click="loadMoreProjects"
            class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
          >
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-slate-800 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Join our satisfied customers and experience the quality workmanship that sets us apart.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/contact"
            class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
          >
            Get Free Quote
          </NuxtLink>
          <a 
            href="tel:+1234567890"
            class="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors duration-200"
          >
            Call Now: (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { useHead } from 'nuxt/app'
// import { ref } from 'process'
import { computed, ref } from 'vue'

// SEO and Meta
useHead({
  title: 'Our Projects - Dewamotor Professional Automotive Services',
  meta: [
    { name: 'description', content: 'Browse our completed automotive projects. See before and after photos of engine repairs, brake services, transmission work, and more professional automotive services.' }
  ]
})

// Reactive data
const activeFilter = ref('all')
const hasMoreProjects = ref(true)

// Filter options
const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Engine Repair', value: 'engine' },
  { label: 'Brake Service', value: 'brake' },
  { label: 'Transmission', value: 'transmission' },
  { label: 'Electrical', value: 'electrical' },
  { label: 'Body Work', value: 'body' }
]

// Sample projects data
const projects = ref([
  {
    id: 1,
    title: 'Honda Civic Engine Rebuild',
    slug: 'honda-civic-engine-rebuild',
    description: 'Complete engine rebuild with performance upgrades and enhanced reliability.',
    category: 'Engine Repair',
    vehicle: '2018 Honda Civic',
    completionDate: 'Jan 2024',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20engine%20rebuild%20Honda%20Civic%20clean%20workshop%20before%20after%20comparison&image_size=landscape_4_3',
    filterCategory: 'engine'
  },
  {
    id: 2,
    title: 'Toyota Camry Brake System Overhaul',
    slug: 'toyota-camry-brake-overhaul',
    description: 'Complete brake system replacement including pads, rotors, and brake fluid service.',
    category: 'Brake Service',
    vehicle: '2020 Toyota Camry',
    completionDate: 'Feb 2024',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20brake%20system%20repair%20Toyota%20Camry%20new%20brake%20pads%20rotors%20automotive%20workshop&image_size=landscape_4_3',
    filterCategory: 'brake'
  },
  {
    id: 3,
    title: 'Ford F-150 Transmission Repair',
    slug: 'ford-f150-transmission-repair',
    description: 'Transmission rebuild with upgraded components for improved performance and longevity.',
    category: 'Transmission',
    vehicle: '2019 Ford F-150',
    completionDate: 'Mar 2024',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Ford%20F150%20transmission%20repair%20professional%20automotive%20workshop%20mechanic%20working%20clean%20environment&image_size=landscape_4_3',
    filterCategory: 'transmission'
  },
  {
    id: 4,
    title: 'BMW 3 Series Electrical Diagnostics',
    slug: 'bmw-3-series-electrical-diagnostics',
    description: 'Complex electrical system diagnosis and repair including wiring harness replacement.',
    category: 'Electrical',
    vehicle: '2017 BMW 3 Series',
    completionDate: 'Apr 2024',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=BMW%20electrical%20system%20diagnostics%20professional%20automotive%20technician%20computer%20diagnostic%20tools&image_size=landscape_4_3',
    filterCategory: 'electrical'
  },
  {
    id: 5,
    title: 'Chevrolet Silverado Body Restoration',
    slug: 'chevrolet-silverado-body-restoration',
    description: 'Complete body work including rust repair, painting, and protective coating application.',
    category: 'Body Work',
    vehicle: '2016 Chevrolet Silverado',
    completionDate: 'May 2024',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Chevrolet%20Silverado%20body%20work%20restoration%20professional%20paint%20booth%20automotive%20repair%20shop&image_size=landscape_4_3',
    filterCategory: 'body'
  },
  {
    id: 6,
    title: 'Nissan Altima Engine Performance Tune',
    slug: 'nissan-altima-performance-tune',
    description: 'Performance tuning and optimization for improved fuel efficiency and power output.',
    category: 'Engine Repair',
    vehicle: '2021 Nissan Altima',
    completionDate: 'Jun 2024',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Nissan%20Altima%20engine%20performance%20tuning%20professional%20automotive%20workshop%20diagnostic%20equipment&image_size=landscape_4_3',
    filterCategory: 'engine'
  }
])

// Computed filtered projects
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter((project: { filterCategory: any }) => project.filterCategory === activeFilter.value)
})

// Load more projects function
const loadMoreProjects = () => {
  // Simulate loading more projects
  hasMoreProjects.value = false
}
</script>