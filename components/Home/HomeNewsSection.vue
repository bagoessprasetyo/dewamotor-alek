<template>
  <!-- News & Events Section -->
  <section class="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-primary-600 to-secondary-600 rounded-full blur-3xl"></div>
    </div>

    <!-- Automotive Tire Decorative Element -->
    <div class="absolute left-0 bottom-0 opacity-10 pointer-events-none">
      <NuxtImg
        src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20tire%20wheel%20silhouette%20black%20and%20white%20minimalist%20design&image_size=square"
        alt="Automotive tire decoration"
        class="w-96 h-96 object-contain"
      />
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div class="mb-8 md:mb-0">
          <!-- Badge -->
          <div class="inline-flex items-center bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <span class="mr-2">📰</span>
            NEWS & UPDATES
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
            Latest New and Blog
          </h2>
        </div>

        <!-- View All Button -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            VIEW ALL NEWS
            <ArrowRight class="ml-2 h-4 w-4" />
          </NuxtLink>
        </div>
      </div>

      <!-- News Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- News Card 1 -->
        <article class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
          <!-- Card Image -->
          <div class="relative overflow-hidden">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20mechanic%20checking%20engine%20oil%20modern%20workshop%20service%20maintenance&image_size=landscape_4_3"
              alt="Fast Service Reliable Results"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            <!-- Date Badge -->
            <div class="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-2 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="text-lg font-bold leading-none">10</div>
                <div class="text-xs font-medium">Oct</div>
              </div>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <!-- Meta Info -->
            <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <div class="flex items-center">
                <MessageCircle class="w-4 h-4 mr-1" />
                <span>02 Comments</span>
              </div>
              <div class="flex items-center">
                <User class="w-4 h-4 mr-1" />
                <span>Admin</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-navy-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300 line-clamp-2">
              Fast Service Reliable Results Car's Best Friend
            </h3>

            <!-- Description -->
            <p class="text-gray-600 mb-4 line-clamp-3">
              The old engine oil is drained and replaced with fresh oil, and the oil filter is also replaced to ensure optimal engine performance.
            </p>

            <!-- Read More Button -->
            <NuxtLink
              to="/blog/fast-service-reliable-results"
              class="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold transition-colors duration-300 group/link"
            >
              READ MORE
              <ArrowRight class="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </NuxtLink>
          </div>
        </article>

        <!-- News Card 2 -->
        <article class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
          <!-- Card Image -->
          <div class="relative overflow-hidden">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20technician%20changing%20oil%20filter%20professional%20car%20service%20workshop&image_size=landscape_4_3"
              alt="Your Ride Our Pride"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            <!-- Date Badge -->
            <div class="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-2 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="text-lg font-bold leading-none">10</div>
                <div class="text-xs font-medium">Oct</div>
              </div>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <!-- Meta Info -->
            <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <div class="flex items-center">
                <MessageCircle class="w-4 h-4 mr-1" />
                <span>02 Comments</span>
              </div>
              <div class="flex items-center">
                <User class="w-4 h-4 mr-1" />
                <span>Admin</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-navy-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300 line-clamp-2">
              Your Ride Our Pride Your Car Deserves the Best
            </h3>

            <!-- Description -->
            <p class="text-gray-600 mb-4 line-clamp-3">
              The old engine oil is drained and replaced with fresh oil, and the oil filter is also replaced to ensure optimal performance.
            </p>

            <!-- Read More Button -->
            <NuxtLink
              to="/blog/your-ride-our-pride"
              class="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold transition-colors duration-300 group/link"
            >
              READ MORE
              <ArrowRight class="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </NuxtLink>
          </div>
        </article>

        <!-- News Card 3 -->
        <article class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
          <!-- Card Image -->
          <div class="relative overflow-hidden">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20car%20engine%20maintenance%20automotive%20service%20technician%20working&image_size=landscape_4_3"
              alt="Engine Maintenance Service"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            <!-- Date Badge -->
            <div class="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-2 rounded-lg shadow-lg">
              <div class="text-center">
                <div class="text-lg font-bold leading-none">10</div>
                <div class="text-xs font-medium">Oct</div>
              </div>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <!-- Meta Info -->
            <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <div class="flex items-center">
                <MessageCircle class="w-4 h-4 mr-1" />
                <span>02 Comments</span>
              </div>
              <div class="flex items-center">
                <User class="w-4 h-4 mr-1" />
                <span>Admin</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-navy-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300 line-clamp-2">
              Fast Service Reliable Results Car's Best Friend
            </h3>

            <!-- Description -->
            <p class="text-gray-600 mb-4 line-clamp-3">
              The old engine oil is drained and replaced with fresh oil, and the oil filter is also replaced to ensure optimal engine performance.
            </p>

            <!-- Read More Button -->
            <NuxtLink
              to="/blog/engine-maintenance-service"
              class="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold transition-colors duration-300 group/link"
            >
              READ MORE
              <ArrowRight class="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, MessageCircle, User } from 'lucide-vue-next'
</script>