<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>About Us - Dewamotor Professional Automotive Services</Title>
      <Meta name="description" content="Learn about Dewamotor's 15+ years of automotive excellence. Meet our certified team, discover our mission, and see why customers trust us with their vehicles." />
      <Meta name="keywords" content="about dewamotor, automotive experts, certified mechanics, car repair experience, professional automotive services" />
    </Head>

    <!-- Hero Section -->
    <AboutHeroSection />

    <!-- Company Story -->
    <AboutCompanyStory />

    <!-- Mission & Values -->
    <AboutMissionValues />

    <!-- Team Section -->
    <AboutTeamSection />

    <!-- Certifications & Awards -->
    <AboutCertificationsSection />

    <!-- Why Choose Us -->
    <AboutWhyChooseUs />

    <!-- Statistics -->
    <AboutStatisticsSection />

    <!-- CTA Section -->
    <AboutCtaSection />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'

// SEO
useHead({
  title: 'About Us - Dewamotor Professional Automotive Services',
  meta: [
    { name: 'description', content: 'Learn about Dewamotor\'s 15+ years of automotive excellence. Meet our certified team, discover our mission, and see why customers trust us with their vehicles.' }
  ]
})
</script>