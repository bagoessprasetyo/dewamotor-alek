<template>
  <!-- Hero Section - Exact Reference Match -->
  <section class="relative min-h-screen flex items-center overflow-hidden bg-white">
    <!-- Clean White/Light Gray Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200"></div>
    
    <!-- Large Red Diagonal Sweep - Main Feature (Exact Match) -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Primary Red Diagonal - Large and Bold -->
      <div class="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-bl from-secondary-500 to-secondary-600 transform origin-top-right" 
           style="clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%);"></div>
      
      <!-- Secondary Red Layer for Depth -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-primary-600 transform origin-top-right" 
           style="clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 10% 100%);"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[85vh] py-8 lg:py-12">
        
        <!-- Content Side -->
        <div class="space-y-6 lg:space-y-8 pr-0 lg:pr-6">
          <!-- Professional Service Badge (Exact Match) -->
          <div class="inline-flex items-center bg-secondary-600 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            <div class="w-2 h-2 bg-white mr-2"></div>
            DEWA MOTOR!!!!
          </div>
          
          <!-- Main Heading - Optimized Typography -->
          <h1 class="text-6xl font-black leading-none tracking-tight">
            <span class="block text-secondary-600 font-black">KAMI ADALAH DEWANYA</span>
            <span class="block text-primary-600 font-black">SERVICE &</span>
            <span class="block text-primary-600 font-black">BAN MOTOR</span>
          </h1>
          
          <!-- Description -->
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg font-normal">
            Layanan servis motor profesional, ganti ban berkualitas, sparepart original, dan solusi lengkap untuk kendaraan Anda di seluruh Indonesia.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <NuxtLink to="/contact" 
              class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-secondary-600 hover:bg-secondary-700 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl">
              READ MORE
              <ArrowRight class="ml-2 h-4 w-4" />
            </NuxtLink>
            <NuxtLink to="tel:(208) 555-0112" 
              class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300">
              <Phone class="mr-2 h-4 w-4" />
              (208) 555-0112
            </NuxtLink>
          </div>
        </div>
        
        <!-- Professional Automotive Image Side -->
        <div class="relative mt-8 lg:mt-0">
          <!-- Clean Image Container with White Frame (Responsive) -->
          <div class="relative bg-white p-3 sm:p-4 shadow-xl">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20mechanic%20working%20on%20modern%20car%20engine%20in%20clean%20garage%20workshop%2C%20high%20quality%20tools%2C%20bright%20lighting%2C%20red%20and%20navy%20color%20scheme%2C%20professional%20photography&image_size=portrait_4_3"
              alt="Professional automotive service - Expert mechanic at work"
              class="w-full h-64 sm:h-72 md:h-80 lg:h-80 xl:h-96 object-cover"
              loading="eager"
              width="600"
              height="400"
            />
          </div>
          
          <!-- Service Badges - Responsive Positioning -->
          <!-- Expert Service Badge (Top Left) -->
          <div class="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 bg-primary-600 text-white px-2 py-1 sm:px-3 text-xs font-bold uppercase tracking-wider shadow-lg">
            EXPERT SERVICE
          </div>
          
          <!-- Quality Parts Badge (Top Right) -->
          <div class="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white text-primary-800 px-2 py-1 sm:px-3 text-xs font-bold uppercase tracking-wider shadow-lg border border-gray-200">
            QUALITY PARTS
          </div>
          
          <!-- Fast Service Badge (Bottom Right) -->
          <div class="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-secondary-600 text-white px-2 py-1 sm:px-3 text-xs font-bold uppercase tracking-wider shadow-lg">
            FAST SERVICE
          </div>
          
          <!-- Small Geometric Accent -->
          <div class="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-800 transform rotate-45"></div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'
</script>