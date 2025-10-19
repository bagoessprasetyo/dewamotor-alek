<template>
  <section class="py-16 bg-slate-800 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
        <p class="text-xl text-gray-300 mb-8">
          {{ description }}
        </p>
        
        <form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
          <div class="flex gap-4">
            <input 
              v-model="email"
              type="email" 
              :placeholder="inputPlaceholder"
              required
              class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {{ isSubmitting ? submitButtonText.loading : submitButtonText.default }}
            </button>
          </div>
        </form>
        
        <p class="text-sm text-gray-400 mt-4">
          {{ disclaimer }}
        </p>

        <!-- Success Message -->
        <div v-if="showSuccess" class="mt-6 p-4 bg-green-600 rounded-lg">
          <p class="font-medium">{{ successMessage }}</p>
        </div>

        <!-- Error Message -->
        <div v-if="showError" class="mt-6 p-4 bg-red-600 rounded-lg">
          <p class="font-medium">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title?: string
  description?: string
  inputPlaceholder?: string
  submitButtonText?: {
    default: string
    loading: string
  }
  disclaimer?: string
  successMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Stay Updated',
  description: 'Subscribe to our newsletter for the latest automotive tips, news, and exclusive offers.',
  inputPlaceholder: 'Enter your email',
  submitButtonText: () => ({
    default: 'Subscribe',
    loading: 'Subscribing...'
  }),
  disclaimer: 'No spam, unsubscribe at any time. We respect your privacy.',
  successMessage: 'Successfully subscribed to our newsletter!'
})

const emit = defineEmits<{
  subscribe: [email: string]
  success: []
  error: [error: any]
}>()

// Form state
const email = ref('')
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  try {
    emit('subscribe', email.value)
    
    // Show success
    showSuccess.value = true
    emit('success')
    
    // Reset form
    email.value = ''
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    showError.value = true
    errorMessage.value = error.message || 'Error subscribing to newsletter. Please try again.'
    emit('error', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>