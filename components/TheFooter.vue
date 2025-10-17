<template>
  <footer class="bg-primary-600 text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Main Footer Content -->
    <div class="container-custom section-padding relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="inline-block mb-6">
            <NuxtImg
              src="https://dewamotor.com/wp-content/uploads/2023/11/logo-1.png"
              alt="Dewamotor Logo"
              class="h-18 w-auto"
            />
          </NuxtLink>
          <p class="text-white/90 mb-6 max-w-md leading-relaxed">
            Professional automotive repair and maintenance services. Expert technicians, quality parts, and reliable service you can trust for all your vehicle needs.
          </p>
          
          <!-- Contact Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-white/10 rounded-lg">
                <Phone class="h-5 w-5 text-white" />
              </div>
              <a href="tel:+1234567890" class="text-white/90 hover:text-white transition-colors font-medium">
                +1 (234) 567-8900
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <div class="p-2 bg-white/10 rounded-lg">
                <Mail class="h-5 w-5 text-white" />
              </div>
              <a href="mailto:info@dewamotor.com" class="text-white/90 hover:text-white transition-colors font-medium">
                info@dewamotor.com
              </a>
            </div>
            <div class="flex items-start space-x-3">
              <div class="p-2 bg-white/10 rounded-lg">
                <MapPin class="h-5 w-5 text-white" />
              </div>
              <address class="text-white/90 not-italic font-medium">
                123 Auto Service Street<br>
                Motor City, MC 12345
              </address>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-white">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-white/80 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-xl font-bold mb-6 text-white">Our Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <NuxtLink
                :to="service.href"
                class="text-white/80 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block"
              >
                {{ service.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Business Hours -->
      <div class="mt-16 pt-8 border-t border-white/20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-xl font-bold mb-6 text-white">Business Hours</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center bg-white/5 rounded-lg p-3">
                <span class="text-white/90 font-medium">Monday - Friday:</span>
                <span class="text-white font-semibold">8:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between items-center bg-white/5 rounded-lg p-3">
                <span class="text-white/90 font-medium">Saturday:</span>
                <span class="text-white font-semibold">8:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between items-center bg-white/5 rounded-lg p-3">
                <span class="text-white/90 font-medium">Sunday:</span>
                <span class="text-secondary-200 font-semibold">Closed</span>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="md:text-right">
            <h3 class="text-xl font-bold mb-6 text-white">Follow Us</h3>
            <div class="flex space-x-4 md:justify-end">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                class="group p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:text-white hover:bg-secondary-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <component :is="social.icon" class="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/20 bg-primary-700 relative z-10">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-white/80 text-sm font-medium">
            &copy; {{ currentYear }} Dewamotor. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm">
            <NuxtLink to="/privacy" class="text-white/70 hover:text-white transition-colors font-medium">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-white/70 hover:text-white transition-colors font-medium">
              Terms of Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-vue-next'

// Current year for copyright
const currentYear = new Date().getFullYear()

// Navigation links
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

// Service links
const services = [
  { name: 'Engine Repair', href: '/services/engine-repair' },
  { name: 'Brake Service', href: '/services/brake-service' },
  { name: 'Transmission', href: '/services/transmission' },
  { name: 'Oil Change', href: '/services/oil-change' },
  { name: 'Diagnostics', href: '/services/diagnostics' },
  { name: 'Maintenance', href: '/services/maintenance' },
]

// Social media links
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/dewamotor',
    icon: Facebook,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/dewamotor',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/dewamotor',
    icon: Instagram,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/dewamotor',
    icon: Youtube,
  },
]
</script>