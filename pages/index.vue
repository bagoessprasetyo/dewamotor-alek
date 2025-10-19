<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Dewamotor - Dewanya Service & Ban Motor Indonesia</Title>
      <Meta name="description" content="Layanan servis motor profesional, ganti ban berkualitas, sparepart original, dan solusi lengkap untuk kendaraan Anda di seluruh Indonesia." />
      <Meta name="keywords" content="service motor, ban motor, sparepart motor, bengkel motor, dewamotor, layanan motor profesional" />
    </Head>

    <!-- Hero Section -->
    <HomeHeroSection />

    <!-- About Section -->
    <HomeAboutSection />

    <!-- Best Services Section -->
    <HomeBestServices />

    <!-- Testimonials -->
    <HomeTestimonials />

    <!-- News Section -->
    <HomeNewsSection />

    <!-- Partnership Section -->
    <HomePartnershipSection />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'

// SEO
useHead({
  title: 'Dewamotor - Dewanya Service & Ban Motor Indonesia',
  meta: [
    { name: 'description', content: 'Layanan servis motor profesional, ganti ban berkualitas, sparepart original, dan solusi lengkap untuk kendaraan Anda di seluruh Indonesia.' },
    { name: 'keywords', content: 'service motor, ban motor, sparepart motor, bengkel motor, dewamotor, layanan motor profesional' }
  ]
})
</script>