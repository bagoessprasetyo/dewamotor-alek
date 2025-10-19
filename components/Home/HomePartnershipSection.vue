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
      

      <!-- Partnership Content Grid -->
      

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