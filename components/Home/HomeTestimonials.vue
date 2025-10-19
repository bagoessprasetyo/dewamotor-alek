<template>
  <!-- Testimonials Section -->
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20mechanic%20working%20on%20car%20in%20modern%20garage%20workshop%20dark%20blue%20lighting%20professional%20atmosphere&image_size=landscape_16_9"
        alt="Professional automotive workshop"
        class="w-full h-full object-cover opacity-40"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-navy-900/80 to-slate-900/90"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 section-padding">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <!-- Badge -->
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Star class="w-4 h-4 mr-2 text-yellow-400 fill-current" />
            TESTIMONIAL
            <Star class="w-4 h-4 ml-2 text-yellow-400 fill-current" />
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            What our clients say<br>
            <span class="text-white">About Us</span>
          </h2>
        </div>

        <!-- Testimonials Container -->
        <div class="relative max-w-6xl mx-auto">
          <!-- Testimonials Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- Testimonial Card 1 -->
            <div class="group">
              <div class="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-8 border-secondary-600 relative overflow-hidden">
                <!-- Red accent border -->
                <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary-600 to-secondary-700"></div>
                
                <!-- Customer Info Header -->
                <div class="flex items-center mb-6">
                  <div class="relative">
                    <NuxtImg
                      src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20indonesian%20business%20woman%20portrait%20confident%20smile%20automotive%20customer&image_size=square"
                      alt="Sari Indah"
                      class="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                    />
                  </div>
                  <div class="ml-4">
                    <h4 class="font-bold text-gray-900 text-lg">Sari Indah</h4>
                    <p class="text-secondary-600 font-medium">Business Woman</p>
                  </div>
                </div>

                <!-- Rating Stars -->
                <div class="flex items-center mb-4">
                  <div class="flex space-x-1">
                    <Star
                      v-for="i in 5"
                      :key="i"
                      class="h-5 w-5 text-yellow-400 fill-current"
                    />
                  </div>
                </div>
                
                <!-- Testimonial Content -->
                <blockquote class="text-gray-700 text-lg leading-relaxed relative">
                  <div class="absolute -top-2 -left-2 text-6xl text-secondary-200 font-serif">"</div>
                  <p class="relative z-10 pl-8">
                    Pelayanan yang sangat memuaskan! Tim teknisi sangat profesional dalam mendiagnosa masalah mesin mobil saya. Perbaikan dilakukan dengan cepat dan hasil yang berkualitas.
                  </p>
                  <div class="absolute -bottom-4 -right-2 text-6xl text-secondary-200 font-serif rotate-180">"</div>
                </blockquote>
              </div>
            </div>

            <!-- Testimonial Card 2 -->
            <div class="group">
              <div class="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-8 border-secondary-600 relative overflow-hidden">
                <!-- Red accent border -->
                <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary-600 to-secondary-700"></div>
                
                <!-- Customer Info Header -->
                <div class="flex items-center mb-6">
                  <div class="relative">
                    <NuxtImg
                      src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20indonesian%20business%20man%20portrait%20confident%20smile%20automotive%20customer&image_size=square"
                      alt="Budi Santoso"
                      class="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                    />
                  </div>
                  <div class="ml-4">
                    <h4 class="font-bold text-gray-900 text-lg">Budi Santoso</h4>
                    <p class="text-secondary-600 font-medium">Business Man</p>
                  </div>
                </div>

                <!-- Rating Stars -->
                <div class="flex items-center mb-4">
                  <div class="flex space-x-1">
                    <Star
                      v-for="i in 5"
                      :key="i"
                      class="h-5 w-5 text-yellow-400 fill-current"
                    />
                  </div>
                </div>
                
                <!-- Testimonial Content -->
                <blockquote class="text-gray-700 text-lg leading-relaxed relative">
                  <div class="absolute -top-2 -left-2 text-6xl text-secondary-200 font-serif">"</div>
                  <p class="relative z-10 pl-8">
                    Sangat direkomendasikan! Sudah beberapa kali service di sini dan selalu puas dengan hasilnya. Teknisi berpengalaman dan menggunakan spare part berkualitas.
                  </p>
                  <div class="absolute -bottom-4 -right-2 text-6xl text-secondary-200 font-serif rotate-180">"</div>
                </blockquote>
              </div>
            </div>
          </div>

          <!-- Navigation Dots -->
          <div class="flex justify-center items-center space-x-3">
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-colors duration-300"></button>
            <button class="w-4 h-4 rounded-full bg-secondary-600 shadow-lg"></button>
            <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-colors duration-300"></button>
          </div>

          <!-- Navigation Arrows -->
          <button class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
            <ChevronLeft class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
            <ChevronRight class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, ChevronLeft, ChevronRight } from 'lucide-vue-next'
</script>