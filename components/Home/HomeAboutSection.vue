<template>
  <!-- About Us Section - Reference Image Style -->
  <section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[600px]">
        <div class="flex flex-col space-y-6">
          <div class="flex items-baseline space-x-3 flex-shrink-0">
            <span class="text-7xl lg:text-8xl font-black text-secondary-600">15</span>
            <div class="text-xl font-bold text-gray-900 leading-tight">
              <div>Tahun</div>
              <div class="text-secondary-600">Pengalaman</div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 flex-1">
          <!-- Top Left Image -->
            <div class="flex flex-col space-y-4 h-full">
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20Indonesian%20motorcycle%20mechanic%20working%20red%20uniform%20modern%20workshop%20clean%20environment&image_size=landscape_4_3"
                alt="Professional motorcycle mechanic at work"
                class="w-full flex-1 min-h-[180px] object-cover rounded-lg"
              />
              <!-- Bottom Left Image -->
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle%20engine%20repair%20professional%20tools%20Indonesian%20workshop%20red%20toolbox%20clean%20workspace&image_size=square"
                alt="Motorcycle engine repair with professional tools"
                class="w-full flex-1 min-h-[140px] object-cover rounded-lg"
              />
            </div>
            
            <!-- Right Column -->
            <div class="flex flex-col space-y-4 h-full">
              <!-- Top Right Image -->
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle%20tire%20service%20professional%20Indonesian%20mechanic%20modern%20workshop%20equipment%20red%20uniform&image_size=portrait_3_4"
                alt="Professional motorcycle tire service"
                class="w-full flex-1 min-h-[220px] object-cover rounded-lg"
              />
              <!-- Bottom Right Image -->
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle%20diagnostic%20check%20professional%20Indonesian%20workshop%20modern%20equipment%20clean%20environment&image_size=landscape_4_3"
                alt="Motorcycle diagnostic equipment"
                class="w-full flex-1 min-h-[100px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <!-- Right Side - About Us Content -->
        <div class="space-y-8">
          
          <!-- Header Section -->
          <div class="space-y-4">
            <!-- Small Header Badge -->
            <div class="inline-flex items-center text-secondary-600 text-sm font-bold uppercase tracking-wider">
              <div class="w-2 h-2 bg-secondary-600 mr-2"></div>
              TENTANG KAMI
            </div>
            
            <!-- Main Headline -->
            <h2 class="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              Perbaikan Cepat<br />
              <span class="text-secondary-600">Hasil Berkualitas</span>
            </h2>
            
            <!-- Description -->
            <p class="text-gray-600 text-base leading-relaxed max-w-md">
              Sebagai bengkel motor terpercaya dengan pengalaman 15 tahun, kami berkomitmen memberikan layanan terbaik dengan teknisi berpengalaman dan sparepart original.
            </p>
          </div>

          <!-- Service Highlights with Icons -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Express Oil Change -->
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center">
                <Settings class="h-6 w-6 text-secondary-600" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-lg">Ganti Oli Express</h3>
              </div>
            </div>

            <!-- Quick Fix Tire Service -->
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                <Shield class="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-lg">Servis Ban Cepat</h3>
              </div>
            </div>
          </div>

          <!-- Quality Points with Checkmarks -->
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <CheckCircle class="h-5 w-5 text-primary-600 mt-1 bg-primary-600 rounded" />
              <span class="text-gray-700 font-medium">Kualitas Terjamin, Keamanan Setiap Motor</span>
            </div>
            <div class="flex items-start space-x-3">
              <CheckCircle class="h-5 w-5 text-primary-600 mt-1 bg-primary-600 rounded" />
              <span class="text-gray-700 font-medium">Pemeriksaan Diagnostik Menyeluruh</span>
            </div>
            <div class="flex items-start space-x-3">
              <CheckCircle class="h-5 w-5 text-primary-600 mt-1 bg-primary-600 rounded" />
              <span class="text-gray-700 font-medium">Perawatan Motor Dari Dalam Hingga Luar</span>
            </div>
          </div>

          <!-- Contact & CTA -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <!-- Phone Number -->
            <div class="flex items-center text-gray-900">
              <Phone class="h-5 w-5 text-secondary-600 mr-3" />
              <span class="font-bold text-lg">(021) 555-0112</span>
            </div>
            
            <!-- Read More Button -->
            <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 font-bold uppercase tracking-wider text-sm transition-colors duration-300 flex items-center">
              BACA SELENGKAPNYA
              <ArrowRight class="h-4 w-4 ml-2" />
            </button>
          </div>

          <!-- Two Founders Profile Section -->
          <div class="flex items-center space-x-6 pt-4">
            <!-- Founder 1 -->
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden">
                <NuxtImg
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20Indonesian%20automotive%20workshop%20owner%20portrait%20confident%20experienced%20mechanic%20founder%20male&image_size=square"
                  alt="Budi Santoso - Co-Founder"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <div class="font-bold text-gray-900 text-sm">Budi Santoso</div>
                <div class="text-xs text-gray-600 font-medium">Co-Founder</div>
              </div>
            </div>

            <!-- Founder 2 -->
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden">
                <NuxtImg
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20Indonesian%20automotive%20workshop%20owner%20portrait%20confident%20experienced%20mechanic%20founder%20male%20different%20person&image_size=square"
                  alt="Ahmad Wijaya - Co-Founder"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <div class="font-bold text-gray-900 text-sm">Ahmad Wijaya</div>
                <div class="text-xs text-gray-600 font-medium">Co-Founder</div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Phone, ArrowRight, Settings, Shield, CheckCircle } from 'lucide-vue-next'
</script>