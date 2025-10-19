<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Our Projects - Dewamotor Professional Automotive Services</Title>
      <Meta name="description" content="Browse our completed automotive projects. See before and after photos of engine repairs, brake services, transmission work, and more professional automotive services." />
      <Meta name="keywords" content="automotive projects, car repair gallery, engine repair photos, brake service examples, transmission repair showcase" />
    </Head>

    <!-- Hero Section -->
    <ProjectsHeroSection />

    <!-- Filter Section -->
    <ProjectsFilterSection 
      :active-filter="activeFilter"
      @filter-change="handleFilterChange"
    />

    <!-- Projects Grid -->
    <ProjectsGridSection 
      :projects="filteredProjects"
      :has-more-projects="hasMoreProjects"
      :is-loading="isLoadingMore"
      @load-more="loadMoreProjects"
    />

    <!-- CTA Section -->
    <ProjectsCtaSection />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { computed, ref } from 'vue'

// Import components
import ProjectsHeroSection from '~/components/Projects/ProjectsHeroSection.vue'
import ProjectsFilterSection from '~/components/Projects/ProjectsFilterSection.vue'
import ProjectsGridSection from '~/components/Projects/ProjectsGridSection.vue'
import ProjectsCtaSection from '~/components/Projects/ProjectsCtaSection.vue'

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
const isLoadingMore = ref(false)

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
  return projects.value.filter(project => project.filterCategory === activeFilter.value)
})

// Handle filter change
const handleFilterChange = (value: string) => {
  activeFilter.value = value
}

// Load more projects function
const loadMoreProjects = async () => {
  isLoadingMore.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Simulate loading more projects (you would fetch from API here)
  hasMoreProjects.value = false
  isLoadingMore.value = false
}
</script>