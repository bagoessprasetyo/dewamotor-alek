<template>
  <!-- Best Services Section -->
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          LAYANAN TERBAIK
        </div>
        <h2 class="heading-2 mb-6 text-gray-900">
          Dimana Motor Anda Mendapat Kebanggaan dan Perawatan Terbaik
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">
          Kami memberikan layanan berkualitas tinggi dengan teknisi berpengalaman dan peralatan modern. 
          Kepuasan pelanggan adalah prioritas utama kami dalam setiap layanan yang diberikan.
        </p>
      </div>

      <!-- Services 2-Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <!-- Left Column: Full-Height Brake Inspection -->
        <div class="min-h-[600px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
          <NuxtImg
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional motorcycle brake inspection service in modern garage, mechanic checking brake pads and brake fluid, clean workshop environment, red and blue color scheme, high quality automotive service"
            alt="Pemeriksaan Rem Aman"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
          />
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div class="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-4">Pemeriksaan Rem Aman</h3>
              <p class="text-gray-200 mb-6 leading-relaxed text-lg">
                Pemeriksaan menyeluruh sistem rem untuk memastikan keamanan berkendara. 
                Kami periksa kampas rem, minyak rem, dan seluruh komponen sistem pengereman dengan teknologi terdepan.
              </p>
              <button class="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-primary-700 transition-colors duration-300 text-lg">
                BACA LEBIH
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column: Split into Two Equal Sections -->
        <div class="grid grid-rows-2 gap-6 min-h-[600px]">
          <!-- Top Section: Engine Tune-Up -->
          <div class="min-h-[290px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle engine tune-up service, mechanic working on motorcycle engine, oil change and engine maintenance, professional automotive garage, clean workspace with tools"
              alt="Tune-Up Mesin Plus"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Tune-Up Mesin Plus</h3>
                <p class="text-gray-200 mb-4 leading-relaxed">
                  Perawatan lengkap mesin motor untuk performa optimal. Termasuk ganti oli, 
                  filter udara, busi, dan penyetelan karburator.
                </p>
                <button class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                  BACA LEBIH
                </button>
              </div>
            </div>
          </div>

          <!-- Bottom Section: Battery Check -->
          <div class="min-h-[290px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle battery check and electrical system diagnosis, mechanic testing motorcycle battery with multimeter, professional automotive electrical service, clean garage environment"
              alt="Pemeriksaan Boost Baterai"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Pemeriksaan Boost Baterai</h3>
                <p class="text-gray-200 mb-4 leading-relaxed">
                  Diagnosa lengkap sistem kelistrikan dan baterai motor. Kami periksa tegangan dan kondisi aki.
                </p>
                <button class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                  BACA LEBIH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props needed for this component
</script>