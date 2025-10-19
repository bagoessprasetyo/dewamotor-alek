<template>
  <div>
    <div class="bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-bold mb-6">{{ title }}</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Service Type -->
        <div>
          <label for="serviceType" class="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select 
            id="serviceType"
            v-model="formData.serviceType" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
          >
            <option value="">Select a service</option>
            <option v-for="service in serviceOptions" :key="service.value" :value="service.value">
              {{ service.label }}
            </option>
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
              v-model="formData.firstName" 
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
              v-model="formData.lastName" 
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
              v-model="formData.email" 
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
              v-model="formData.phone" 
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
              v-model="formData.vehicleYear" 
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
              v-model="formData.vehicleMake" 
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
              v-model="formData.vehicleModel" 
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
            v-model="formData.preferredDate" 
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
            v-model="formData.message" 
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
            v-model="formData.isEmergency" 
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
            {{ submitButtonText.loading }}
          </span>
          <span v-else>{{ submitButtonText.default }}</span>
        </button>
      </form>

      <!-- Success Message -->
      <div v-if="showSuccess" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        <div class="flex items-center">
          <CheckCircle class="h-5 w-5 mr-2" />
          <span class="font-medium">{{ successMessage.title }}</span>
        </div>
        <p class="mt-1 text-sm">{{ successMessage.description }}</p>
      </div>

      <!-- Error Message -->
      <div v-if="showError" class="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <div class="flex items-center">
          <AlertCircle class="h-5 w-5 mr-2" />
          <span class="font-medium">{{ errorMessage.title }}</span>
        </div>
        <p class="mt-1 text-sm">{{ errorMessage.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle, AlertCircle } from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'

interface FormData {
  serviceType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  preferredDate: string
  message: string
  isEmergency: boolean
}

interface ServiceOption {
  value: string
  label: string
}

interface Props {
  title?: string
  serviceOptions?: ServiceOption[]
  initialServiceType?: string
  submitButtonText?: {
    default: string
    loading: string
  }
  successMessage?: {
    title: string
    description: string
  }
  errorMessage?: {
    title: string
    description: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Send Us a Message',
  serviceOptions: () => [
    { value: 'general-repair', label: 'General Repair' },
    { value: 'engine-service', label: 'Engine Service' },
    { value: 'brake-service', label: 'Brake Service' },
    { value: 'transmission', label: 'Transmission' },
    { value: 'electrical', label: 'Electrical Systems' },
    { value: 'maintenance', label: 'Routine Maintenance' },
    { value: 'emergency', label: 'Emergency Service' },
    { value: 'quote', label: 'Get Quote' }
  ],
  initialServiceType: '',
  submitButtonText: () => ({
    default: 'Send Message',
    loading: 'Sending Message...'
  }),
  successMessage: () => ({
    title: 'Message sent successfully!',
    description: "We'll get back to you within 24 hours."
  }),
  errorMessage: () => ({
    title: 'Error sending message',
    description: 'Please try again or call us directly.'
  })
})

const emit = defineEmits<{
  submit: [data: FormData]
  success: []
  error: [error: any]
}>()

// Form data
const formData = ref<FormData>({
  serviceType: props.initialServiceType,
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
const handleSubmit = async () => {
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  try {
    emit('submit', formData.value)
    
    // Show success message
    showSuccess.value = true
    emit('success')
    
    // Reset form
    formData.value = {
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
  } catch (error: any) {
    console.error('Form submission error:', error)
    showError.value = true
    emit('error', error)
  } finally {
    isSubmitting.value = false
  }
}

// Watch for initial service type changes
watch(() => props.initialServiceType, (newValue) => {
  formData.value.serviceType = newValue
})
</script>