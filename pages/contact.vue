<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Contact Us - Dewamotor Professional Automotive Services</Title>
      <Meta name="description" content="Contact Dewamotor for professional automotive services. Get quotes, schedule appointments, or reach out for emergency assistance. Located in the heart of the city." />
      <Meta name="keywords" content="contact dewamotor, automotive service contact, car repair quote, schedule appointment, emergency automotive service" />
    </Head>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p class="text-xl mb-8 text-gray-300">
            Ready to get started? Reach out to us for professional automotive services and expert advice.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <!-- Contact Information -->
            <div>
              <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <!-- Contact Methods -->
              <div class="space-y-6 mb-8">
                <div class="flex items-start space-x-4">
                  <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
                    <MapPin class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Visit Our Shop</h3>
                    <p class="text-gray-600">
                      123 Automotive Street<br>
                      Downtown District<br>
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
                    <Phone class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Call Us</h3>
                    <p class="text-gray-600">
                      <a href="tel:+1234567890" class="hover:text-red-600 transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                    <p class="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
                    <Mail class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Email Us</h3>
                    <p class="text-gray-600">
                      <a href="mailto:info@dewamotor.com" class="hover:text-red-600 transition-colors">
                        info@dewamotor.com
                      </a>
                    </p>
                    <p class="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
                    <Clock class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1">Business Hours</h3>
                    <div class="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p class="text-sm text-red-600 font-medium">Emergency services available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Map Placeholder -->
              <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div class="text-center text-gray-500">
                  <MapPin class="h-12 w-12 mx-auto mb-2" />
                  <p class="font-medium">Interactive Map</p>
                  <p class="text-sm">Google Maps integration would go here</p>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div>
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form @submit.prevent="submitForm" class="space-y-6">
                  <!-- Service Type -->
                  <div>
                    <label for="serviceType" class="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select 
                      id="serviceType"
                      v-model="form.serviceType" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="general-repair">General Repair</option>
                      <option value="engine-service">Engine Service</option>
                      <option value="brake-service">Brake Service</option>
                      <option value="transmission">Transmission</option>
                      <option value="electrical">Electrical Systems</option>
                      <option value="maintenance">Routine Maintenance</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="quote">Get Quote</option>
                    </select>
                  </div>

                  <!-- Name -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        id="firstName"
                        v-model="form.firstName" 
                        type="text" 
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        id="lastName"
                        v-model="form.lastName" 
                        type="text" 
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <!-- Contact Info -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input 
                        id="email"
                        v-model="form.email" 
                        type="email" 
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input 
                        id="phone"
                        v-model="form.phone" 
                        type="tel"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <!-- Vehicle Information -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label for="vehicleYear" class="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Year
                      </label>
                      <input 
                        id="vehicleYear"
                        v-model="form.vehicleYear" 
                        type="number" 
                        min="1990" 
                        max="2025"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="2020"
                      />
                    </div>
                    <div>
                      <label for="vehicleMake" class="block text-sm font-medium text-gray-700 mb-2">
                        Make
                      </label>
                      <input 
                        id="vehicleMake"
                        v-model="form.vehicleMake" 
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Toyota"
                      />
                    </div>
                    <div>
                      <label for="vehicleModel" class="block text-sm font-medium text-gray-700 mb-2">
                        Model
                      </label>
                      <input 
                        id="vehicleModel"
                        v-model="form.vehicleModel" 
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Camry"
                      />
                    </div>
                  </div>

                  <!-- Preferred Date -->
                  <div>
                    <label for="preferredDate" class="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Service Date
                    </label>
                    <input 
                      id="preferredDate"
                      v-model="form.preferredDate" 
                      type="date"
                      :min="minDate"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  <!-- Message -->
                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea 
                      id="message"
                      v-model="form.message" 
                      rows="4" 
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                      placeholder="Please describe your automotive needs or any specific issues you're experiencing..."
                    ></textarea>
                  </div>

                  <!-- Emergency Checkbox -->
                  <div class="flex items-center">
                    <input 
                      id="isEmergency"
                      v-model="form.isEmergency" 
                      type="checkbox"
                      class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label for="isEmergency" class="ml-2 block text-sm text-gray-700">
                      This is an emergency (we'll prioritize your request)
                    </label>
                  </div>

                  <!-- Submit Button -->
                  <button 
                    type="submit" 
                    :disabled="isSubmitting"
                    class="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                    <span v-else>Send Message</span>
                  </button>
                </form>

                <!-- Success Message -->
                <div v-if="showSuccess" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div class="flex items-center">
                    <CheckCircle class="h-5 w-5 mr-2" />
                    <span class="font-medium">Message sent successfully!</span>
                  </div>
                  <p class="mt-1 text-sm">We'll get back to you within 24 hours.</p>
                </div>

                <!-- Error Message -->
                <div v-if="showError" class="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div class="flex items-center">
                    <AlertCircle class="h-5 w-5 mr-2" />
                    <span class="font-medium">Error sending message</span>
                  </div>
                  <p class="mt-1 text-sm">Please try again or call us directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Contact Cards -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p class="text-xl text-gray-600">
              Choose the fastest way to reach us based on your needs.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Emergency Service -->
            <div class="bg-red-600 text-white rounded-lg p-6 text-center">
              <AlertTriangle class="h-12 w-12 mx-auto mb-4" />
              <h3 class="text-xl font-bold mb-2">Emergency Service</h3>
              <p class="mb-4">Roadside assistance and emergency repairs available 24/7</p>
              <a 
                href="tel:+1234567890" 
                class="bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Call Now: (123) 456-7890
              </a>
            </div>

            <!-- Schedule Appointment -->
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <Calendar class="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h3 class="text-xl font-bold mb-2">Schedule Service</h3>
              <p class="text-gray-600 mb-4">Book your appointment online for routine maintenance and repairs</p>
              <button 
                @click="scrollToForm"
                class="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Book Appointment
              </button>
            </div>

            <!-- Get Quote -->
            <div class="bg-slate-800 text-white rounded-lg p-6 text-center">
              <FileText class="h-12 w-12 mx-auto mb-4" />
              <h3 class="text-xl font-bold mb-2">Get Free Quote</h3>
              <p class="mb-4">Receive a detailed estimate for your automotive service needs</p>
              <button 
                @click="setQuoteMode"
                class="bg-white text-slate-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, AlertTriangle, Calendar, FileText } from 'lucide-vue-next'
import { useHead } from 'nuxt/app'
import { computed, ref } from 'vue'

// SEO
useHead({
  title: 'Contact Us - Dewamotor Professional Automotive Services',
  meta: [
    { name: 'description', content: 'Contact Dewamotor for professional automotive services. Get quotes, schedule appointments, or reach out for emergency assistance. Located in the heart of the city.' }
  ]
})

// Form data
const form = ref({
  serviceType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  preferredDate: '',
  message: '',
  isEmergency: false
})

// Form state
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// Computed minimum date (today)
const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  try {
    // Send form data to API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    if (response && typeof response === 'object' && 'success' in response && response.success) {
      // Show success message
      showSuccess.value = true
      
      // Reset form
      form.value = {
        serviceType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleYear: '',
        vehicleMake: '',
        vehicleModel: '',
        preferredDate: '',
        message: '',
        isEmergency: false
      }
    }
  } catch (error: any) {
    console.error('Form submission error:', error)
    showError.value = true
    
    // Show specific error message if available
    if (error.data?.statusMessage) {
      // You could set a specific error message here
      console.log('Error message:', error.data.statusMessage)
    }
  } finally {
    isSubmitting.value = false
  }
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
  form.value.serviceType = 'quote'
  scrollToForm()
}
</script>