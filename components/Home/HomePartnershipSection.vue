<template>
  <!-- Partnership Registration Section -->
  <section class="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-600 to-primary-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg shadow-secondary-600/25 transform hover:scale-105 transition-all duration-300">
          <UsersIcon class="w-5 h-5 mr-2" />
          GABUNG KEMITRAAN
        </div>
        <h2 class="heading-2 text-navy-900 mb-6 leading-tight">
          Bergabunglah dengan Jaringan<br>
          <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Kemitraan Dewamotor</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Wujudkan impian bisnis Anda dengan bergabung dalam ekosistem kemitraan terpercaya. 
          Dapatkan dukungan penuh dari brand yang telah berpengalaman puluhan tahun di industri otomotif.
        </p>
      </div>

      <!-- Partnership Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Column: Benefits & Requirements -->
        <div class="space-y-8">
          <!-- Partnership Benefits -->
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-white/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 group">
            <div class="flex items-center mb-8">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle class="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-navy-900 mb-1">Keuntungan Kemitraan</h3>
                <p class="text-emerald-600 font-semibold">Investasi Menguntungkan</p>
              </div>
            </div>
            <ul class="space-y-5">
              <li 
                v-for="benefit in partnershipBenefits" 
                :key="benefit"
                class="flex items-start group/item"
              >
                <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors duration-200">
                  <CheckCircle class="h-4 w-4 text-emerald-600" />
                </div>
                <span class="text-gray-700 font-medium leading-relaxed">{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <!-- Requirements -->
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-white/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 group">
            <div class="flex items-center mb-8">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <Settings class="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-navy-900 mb-1">Persyaratan Kemitraan</h3>
                <p class="text-blue-600 font-semibold">Kriteria Mitra</p>
              </div>
            </div>
            <ul class="space-y-5">
              <li 
                v-for="requirement in partnershipRequirements" 
                :key="requirement"
                class="flex items-start group/item"
              >
                <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors duration-200">
                  <ArrowRight class="h-4 w-4 text-blue-600" />
                </div>
                <span class="text-gray-700 font-medium leading-relaxed">{{ requirement }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column: Partnership Packages -->
        <div class="space-y-8">
          <!-- Premium Package -->
          <div class="bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-secondary-600/30 hover:shadow-secondary-600/40 transition-all duration-500 group border border-secondary-500/20">
            <!-- Background Elements -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-700"></div>
            <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
            <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full"></div>
            
            <div class="relative z-10">
              <div class="bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-sm rounded-xl px-6 py-3 inline-block mb-6 border border-white/20">
                <span class="text-white font-bold text-lg tracking-wide">KEMITRAAN 325 JUTA</span>
              </div>
              <div class="mb-6">
                <h3 class="text-3xl text-white font-bold mb-2">Paket Premium</h3>
                <p class="text-secondary-100 font-medium">Solusi Bisnis Terlengkap</p>
              </div>
              <ul class="space-y-4 mb-10">
                <li 
                  v-for="feature in premiumPackageFeatures" 
                  :key="feature"
                  class="flex items-center group/item"
                >
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                    <CheckCircle class="h-4 w-4" />
                  </div>
                  <span class="font-medium">{{ feature }}</span>
                </li>
              </ul>
              <button class="w-full bg-white text-secondary-700 py-5 px-8 rounded-xl font-bold hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn">
                <span class="mr-2">INFO SELENGKAPNYA</span>
                <ArrowRight class="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          <!-- Standard Package -->
          <div class="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-600/30 hover:shadow-primary-600/40 transition-all duration-500 group border border-primary-500/20">
            <!-- Background Elements -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-700"></div>
            <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
            <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full"></div>
            
            <div class="relative z-10">
              <div class="bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-sm rounded-xl px-6 py-3 inline-block mb-6 border border-white/20">
                <span class="text-white font-bold text-lg tracking-wide">KEMITRAAN 250 JUTA</span>
              </div>
              <div class="mb-6">
                <h3 class="text-3xl text-white font-bold mb-2">Paket Standar</h3>
                <p class="text-primary-100 font-medium">Pilihan Bisnis Terpercaya</p>
              </div>
              <ul class="space-y-4 mb-10">
                <li 
                  v-for="feature in standardPackageFeatures" 
                  :key="feature"
                  class="flex items-center group/item"
                >
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                    <CheckCircle class="h-4 w-4" />
                  </div>
                  <span class="font-medium">{{ feature }}</span>
                </li>
              </ul>
              <button class="w-full bg-white text-primary-700 py-5 px-8 rounded-xl font-bold hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn">
                <span class="mr-2">INFO SELENGKAPNYA</span>
                <ArrowRight class="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-20">
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl shadow-gray-200/50 max-w-5xl mx-auto border border-white/50 relative overflow-hidden group">
          <!-- Background Pattern -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-60"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full -mr-32 -mt-32"></div>
          
          <div class="relative z-10">
            <div class="mb-8">
              <h3 class="text-3xl font-bold text-navy-900 mb-4 leading-tight">
                Siap Memulai Kemitraan dengan 
                <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Dewamotor?</span>
              </h3>
              <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hubungi tim ahli kami untuk konsultasi gratis dan dapatkan informasi lengkap tentang peluang kemitraan yang tersedia di wilayah Anda. Wujudkan impian bisnis Anda bersama kami.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button class="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-10 py-5 rounded-xl font-bold hover:from-secondary-700 hover:to-secondary-800 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary-600/25 transition-all duration-300 flex items-center justify-center group/btn min-w-[200px]">
                <Phone class="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-200" />
                <span>Hubungi Sekarang</span>
              </button>
              <button class="border-2 border-primary-600 text-primary-600 px-10 py-5 rounded-xl font-bold hover:bg-primary-600 hover:text-white hover:shadow-xl hover:shadow-primary-600/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn min-w-[200px]">
                <Calendar class="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-200" />
                <span>Jadwalkan Konsultasi</span>
              </button>
            </div>
            
            <!-- Trust Indicators -->
            <div class="mt-10 pt-8 border-t border-gray-200/50">
              <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
                <div 
                  v-for="indicator in trustIndicators" 
                  :key="indicator"
                  class="flex items-center"
                >
                  <CheckCircle class="h-4 w-4 text-emerald-500 mr-2" />
                  <span>{{ indicator }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  ArrowRight, 
  Calendar, 
  Phone, 
  Settings,
  CheckCircle
} from 'lucide-vue-next'
import { ref } from 'vue'

// Custom Users icon component (since it's not in lucide-vue-next)
const UsersIcon = {
  template: `
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
    </svg>
  `
}

// Partnership Benefits Data
const partnershipBenefits = ref([
  'Pelatihan komprehensif teknik dan manajemen bisnis',
  'Dukungan marketing dan promosi berkelanjutan',
  'Sistem operasional yang telah terbukti',
  'Akses ke jaringan supplier terpercaya',
  'Brand recognition yang kuat di industri'
])

// Partnership Requirements Data
const partnershipRequirements = ref([
  'Memiliki lahan strategis minimal sesuai paket',
  'Komitmen penuh untuk menjalankan bisnis',
  'Mengikuti pelatihan dan sertifikasi',
  'Mematuhi standar operasional perusahaan'
])

// Premium Package Features
const premiumPackageFeatures = ref([
  'Lebar wilayah 10-12 meter',
  'Free bahan baku awal senilai 95 juta',
  'Model facade dengan acrylic board',
  'Peralatan service lebih lengkap'
])

// Standard Package Features
const standardPackageFeatures = ref([
  'Lebar wilayah 6-9 meter',
  'Free bahan baku awal senilai 70 juta',
  'Model facade tanpa acrylic board',
  'Peralatan service standar'
])

// Trust Indicators
const trustIndicators = ref([
  'Konsultasi Gratis',
  'Tanpa Komitmen',
  'Respon Cepat 24 Jam'
])
</script>