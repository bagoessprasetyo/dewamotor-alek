<template>
  <div v-if="project">
    <!-- SEO Head -->
    <Head>
      <Title>{{ project.title }} - Dewamotor Project Showcase</Title>
      <Meta name="description" :content="project.description" />
      <Meta name="keywords" :content="`${project.category}, ${project.vehicle}, automotive repair, ${project.title}`" />
    </Head>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="mb-8">
            <ol class="flex items-center space-x-2 text-sm">
              <li><NuxtLink to="/" class="hover:text-red-400">Home</NuxtLink></li>
              <li class="text-gray-400">/</li>
              <li><NuxtLink to="/projects" class="hover:text-red-400">Projects</NuxtLink></li>
              <li class="text-gray-400">/</li>
              <li class="text-red-400">{{ project.title }}</li>
            </ol>
          </nav>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span class="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {{ project.category }}
              </span>
              <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ project.title }}</h1>
              <p class="text-xl mb-6 text-gray-300">{{ project.description }}</p>
              
              <!-- Project Info -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 class="font-semibold text-red-400 mb-1">Vehicle</h3>
                  <p>{{ project.vehicle }}</p>
                </div>
                <div>
                  <h3 class="font-semibold text-red-400 mb-1">Completed</h3>
                  <p>{{ project.completionDate }}</p>
                </div>
                <div>
                  <h3 class="font-semibold text-red-400 mb-1">Duration</h3>
                  <p>{{ project.duration }}</p>
                </div>
                <div>
                  <h3 class="font-semibold text-red-400 mb-1">Service Type</h3>
                  <p>{{ project.serviceType }}</p>
                </div>
              </div>
            </div>

            <!-- Featured Image -->
            <div class="relative">
              <NuxtImg 
                :src="project.featuredImage" 
                :alt="project.title"
                class="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Before & After Images -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12">Before &amp; After</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="text-center">
                <h3 class="text-xl font-semibold mb-4 text-gray-700">Before</h3>
                <NuxtImg 
                  :src="project.beforeImage" 
                  :alt="`${project.title} - Before`"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div class="text-center">
                <h3 class="text-xl font-semibold mb-4 text-red-600">After</h3>
                <NuxtImg 
                  :src="project.afterImage" 
                  :alt="`${project.title} - After`"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <!-- Project Description -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <h2 class="text-3xl font-bold mb-6">Project Overview</h2>
              <div class="prose prose-lg max-w-none">
                <p class="text-gray-600 mb-6">{{ project.fullDescription }}</p>
                
                <h3 class="text-2xl font-semibold mb-4">Work Performed</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li v-for="task in project.workPerformed" :key="task">{{ task }}</li>
                </ul>

                <h3 class="text-2xl font-semibold mb-4">Results</h3>
                <p class="text-gray-600 mb-6">{{ project.results }}</p>

                <h3 class="text-2xl font-semibold mb-4">Customer Feedback</h3>
                <blockquote class="border-l-4 border-red-600 pl-6 italic text-gray-600">
                  "{{ project.customerFeedback }}"
                </blockquote>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <!-- Project Stats -->
              <div class="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 class="text-xl font-semibold mb-4">Project Details</h3>
                <div class="space-y-4">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Duration:</span>
                    <span class="font-medium">{{ project.duration }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Parts Used:</span>
                    <span class="font-medium">{{ project.partsCount }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Warranty:</span>
                    <span class="font-medium">{{ project.warranty }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Technicians:</span>
                    <span class="font-medium">{{ project.technicians }}</span>
                  </div>
                </div>
              </div>

              <!-- CTA Card -->
              <div class="bg-red-600 text-white rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">Need Similar Service?</h3>
                <p class="mb-6">Get a free quote for your {{ project.category.toLowerCase() }} needs.</p>
                <NuxtLink 
                  to="/contact"
                  class="block w-full bg-white text-red-600 text-center py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Quote
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Related Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              v-for="relatedProject in relatedProjects" 
              :key="relatedProject.id"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <NuxtImg 
                :src="relatedProject.featuredImage" 
                :alt="relatedProject.title"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">{{ relatedProject.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ relatedProject.vehicle }}</p>
                <NuxtLink 
                  :to="`/projects/${relatedProject.slug}`"
                  class="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  View Project →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
      <p class="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
      <NuxtLink 
        to="/projects"
        class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
      >
        Back to Projects
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, createError } from 'nuxt/app'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Get route params
const route = useRoute()
const slug = route.params.slug as string

// Sample project data (in real app, this would come from API/CMS)
const projectsData = {
  'honda-civic-engine-rebuild': {
    id: 1,
    title: 'Honda Civic Engine Rebuild',
    slug: 'honda-civic-engine-rebuild',
    description: 'Complete engine rebuild with performance upgrades and enhanced reliability.',
    fullDescription: 'This Honda Civic came to us with significant engine problems including worn pistons, damaged cylinder walls, and a failing head gasket. Our team performed a complete engine rebuild, upgrading key components for improved performance and longevity. The project involved precision machining, careful assembly, and thorough testing to ensure optimal performance.',
    category: 'Engine Repair',
    vehicle: '2018 Honda Civic',
    completionDate: 'January 2024',
    duration: '5 days',
    serviceType: 'Complete Engine Rebuild',
    partsCount: '25+ components',
    warranty: '2 years / 24,000 miles',
    technicians: '2 certified mechanics',
    featuredImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20engine%20rebuild%20Honda%20Civic%20clean%20workshop%20detailed%20view&image_size=landscape_4_3',
    beforeImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=damaged%20Honda%20Civic%20engine%20before%20repair%20worn%20components%20automotive%20workshop&image_size=landscape_4_3',
    afterImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=rebuilt%20Honda%20Civic%20engine%20after%20repair%20clean%20new%20components%20professional%20finish&image_size=landscape_4_3',
    workPerformed: [
      'Complete engine disassembly and inspection',
      'Cylinder bore and honing',
      'Piston and ring replacement',
      'Head gasket and valve service',
      'Timing belt and water pump replacement',
      'Oil pump and filter system upgrade',
      'Performance tuning and calibration'
    ],
    results: 'The rebuilt engine now delivers improved performance with 15% better fuel efficiency and enhanced reliability. All components are covered under our comprehensive warranty.',
    customerFeedback: 'Exceptional work! My Honda runs better than when it was new. The team was professional and kept me informed throughout the entire process.'
  },
  'toyota-camry-brake-overhaul': {
    id: 2,
    title: 'Toyota Camry Brake System Overhaul',
    slug: 'toyota-camry-brake-overhaul',
    description: 'Complete brake system replacement including pads, rotors, and brake fluid service.',
    fullDescription: 'This Toyota Camry required a comprehensive brake system overhaul due to worn pads, warped rotors, and contaminated brake fluid. Our team replaced all brake components with high-quality parts and performed a complete system flush for optimal safety and performance.',
    category: 'Brake Service',
    vehicle: '2020 Toyota Camry',
    completionDate: 'February 2024',
    duration: '1 day',
    serviceType: 'Complete Brake Overhaul',
    partsCount: '12 components',
    warranty: '1 year / 12,000 miles',
    technicians: '1 certified mechanic',
    featuredImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20brake%20system%20repair%20Toyota%20Camry%20new%20brake%20pads%20rotors%20automotive%20workshop&image_size=landscape_4_3',
    beforeImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=worn%20brake%20pads%20rotors%20Toyota%20Camry%20before%20repair%20automotive%20maintenance&image_size=landscape_4_3',
    afterImage: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=new%20brake%20system%20Toyota%20Camry%20after%20repair%20clean%20components%20professional%20installation&image_size=landscape_4_3',
    workPerformed: [
      'Front and rear brake pad replacement',
      'Brake rotor resurfacing and replacement',
      'Brake fluid flush and replacement',
      'Brake line inspection and cleaning',
      'Caliper service and lubrication',
      'Brake system pressure testing'
    ],
    results: 'The brake system now provides excellent stopping power with smooth, quiet operation. All safety standards exceeded.',
    customerFeedback: 'Great service! The brakes feel so much better now. Very professional team and fair pricing.'
  }
  // Add more projects as needed
}

// Get current project
const project = computed(() => {
  return projectsData[slug as keyof typeof projectsData] || null
})

// Related projects (excluding current)
const relatedProjects = computed(() => {
  const allProjects = Object.values(projectsData)
  return allProjects
    .filter(p => p.slug !== slug && p.category === project.value?.category)
    .slice(0, 3)
})

// SEO
useHead({
  title: project.value ? `${project.value.title} - Dewamotor Project Showcase` : 'Project Not Found',
  meta: [
    { name: 'description', content: project.value?.description || 'Project not found' }
  ]
})

// 404 handling
if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}
</script>