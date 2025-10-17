<template>
  <header class="bg-white shadow-soft sticky top-0 z-50 relative overflow-hidden">
    <!-- Automotive Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-white"></div>
    
    <!-- Subtle Diagonal Accent -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-50 to-transparent opacity-30" 
         style="clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 90% 100%);"></div>
    
    <!-- Geometric Accent Lines -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-200 to-transparent"></div>
    
    <!-- Small Geometric Elements -->
    <div class="absolute top-4 right-4 w-2 h-2 bg-secondary-600 transform rotate-45 opacity-60"></div>
    <div class="absolute bottom-4 right-8 w-1 h-1 bg-primary-600 transform rotate-45 opacity-40"></div>
    
    <nav class="container-custom relative z-10">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 relative z-10">
          <NuxtImg
            src="https://dewamotor.com/wp-content/uploads/2023/11/logo-1.png"
            alt="Dewamotor Logo"
            class="h-10 md:h-18 w-auto"
            loading="eager"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 relative z-10">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="[
              'automotive-nav-link',
              $route.path === item.href ? 'automotive-nav-link-active' : ''
            ]"
          >
            {{ item.name }}
          </NuxtLink>
          
          <!-- CTA Button - Matching Hero Section Style -->
          <NuxtLink to="/contact" class="automotive-cta-button">
            Gabung Kemitraan
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-primary-700 hover:text-secondary-600 hover:bg-primary-50 transition-colors duration-200 relative z-10"
          aria-label="Toggle mobile menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-white shadow-large border-t border-primary-100 relative overflow-hidden"
        >
          <!-- Mobile Menu Background Elements -->
          <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
          <div class="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-secondary-50 to-transparent opacity-20"></div>
          
          <div class="px-4 py-6 space-y-4 relative z-10">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              @click="closeMobileMenu"
              :class="[
                'block py-3 px-4 rounded-lg text-lg font-bold uppercase tracking-wide transition-colors duration-200',
                $route.path === item.href
                  ? 'text-secondary-600 bg-secondary-50 border-l-4 border-secondary-600'
                  : 'text-primary-800 hover:text-secondary-600 hover:bg-primary-50'
              ]"
            >
              {{ item.name }}
            </NuxtLink>
            
            <div class="pt-4 border-t border-primary-200">
              <NuxtLink
                to="/contact"
                @click="closeMobileMenu"
                class="automotive-cta-button w-full justify-center"
              >
                Get Quote
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
// import { watch } from 'fs'
import { Menu, X } from 'lucide-vue-next'
// import { useRoute } from 'nuxt/app'

import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// import { useRoute } from 'vue-router'

// Navigation items
const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Layanan Kami', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Berita & Acara', href: '/blog' },
  { name: 'Hubungi Kami', href: '/contact' },
]

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  closeMobileMenu()
})

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as Element
    if (!target.closest('header') && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Prevent body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
  }
})
</script>