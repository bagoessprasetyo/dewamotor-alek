<template>
  <section class="hero-bg relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/70"></div>
    <div class="container-custom section-padding relative z-10">
      <div class="text-center text-white max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Professional
          <span class="text-gradient">Automotive Services</span>
        </h1>
        <p class="text-xl text-gray-200 mb-8">
          Comprehensive automotive repair and maintenance services from certified technicians. 
          Quality workmanship with warranties you can trust.
        </p>
        
        <!-- Quick Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary btn-lg">
            <Calendar class="h-5 w-5" />
            Schedule Service
          </NuxtLink>
          <a href="tel:+1234567890" class="btn-secondary btn-lg">
            <Phone class="h-5 w-5" />
            Emergency Service
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendar, Phone } from 'lucide-vue-next'
</script>