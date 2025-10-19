<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Contact Us - Dewamotor Professional Automotive Services</Title>
      <Meta name="description" content="Contact Dewamotor for professional automotive services. Get quotes, schedule appointments, or reach out for emergency assistance. Located in the heart of the city." />
      <Meta name="keywords" content="contact dewamotor, automotive service contact, car repair quote, schedule appointment, emergency automotive service" />
    </Head>

    <!-- Hero Section -->
    <ContactHeroSection />

    <!-- Contact Information & Form -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <!-- Contact Information -->
            <ContactInformationSection />

            <!-- Contact Form -->
            <ContactFormSection 
              :initial-service-type="initialServiceType"
              @submit="handleFormSubmit"
              @success="handleFormSuccess"
              @error="handleFormError"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Contact Cards -->
    <QuickContactSection 
      @scroll-to-form="scrollToForm"
      @set-quote-mode="setQuoteMode"
    />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { ref } from 'vue'

// Import components
import ContactHeroSection from '~/components/Contact/ContactHeroSection.vue'
import ContactInformationSection from '~/components/Contact/ContactInformationSection.vue'
import ContactFormSection from '~/components/Contact/ContactFormSection.vue'
import QuickContactSection from '~/components/Contact/QuickContactSection.vue'

// SEO
useHead({
  title: 'Contact Us - Dewamotor Professional Automotive Services',
  meta: [
    { name: 'description', content: 'Contact Dewamotor for professional automotive services. Get quotes, schedule appointments, or reach out for emergency assistance. Located in the heart of the city.' }
  ]
})

// Initial service type for form
const initialServiceType = ref('')

// Form submission handler
const handleFormSubmit = async (formData: any) => {
  try {
    // Send form data to API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData
    })
    
    console.log('Form submitted successfully:', response)
  } catch (error: any) {
    console.error('Form submission error:', error)
    throw error
  }
}

// Form success handler
const handleFormSuccess = () => {
  console.log('Form submitted successfully')
}

// Form error handler
const handleFormError = (error: any) => {
  console.error('Form submission failed:', error)
}

// Scroll to form
const scrollToForm = () => {
  const formElement = document.querySelector('form')
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' })
  }
}

// Set quote mode
const setQuoteMode = () => {
  initialServiceType.value = 'quote'
  scrollToForm()
}
</script>