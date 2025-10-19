<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Our Mission &amp; Values</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional automotive services while building lasting relationships with our customers.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Integrity</h3>
            <p class="text-gray-600">
              We believe in honest communication, transparent pricing, and ethical business practices in everything we do.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Excellence</h3>
            <p class="text-gray-600">
              We strive for perfection in every repair, using quality parts and proven techniques to deliver lasting results.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Customer Focus</h3>
            <p class="text-gray-600">
              Your satisfaction is our priority. We listen to your needs and provide personalized solutions for your vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Shield, Award, Users } from 'lucide-vue-next'
</script>