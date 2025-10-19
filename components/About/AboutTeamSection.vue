<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified technicians bring decades of combined experience and a passion for automotive excellence.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <NuxtImg 
              :src="member.photo" 
              :alt="member.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
              <p class="text-red-600 font-medium mb-3">{{ member.position }}</p>
              <p class="text-gray-600 text-sm mb-4">{{ member.bio }}</p>
              
              <!-- Certifications -->
              <div class="space-y-2">
                <h4 class="font-medium text-sm text-gray-800">Certifications:</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="cert in member.certifications" 
                    :key="cert"
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {{ cert }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const teamMembers = ref([
  {
    id: 1,
    name: 'Michael Rodriguez',
    position: 'Master Technician & Owner',
    bio: 'With over 20 years in automotive repair, Michael founded Dewamotor with a vision of honest, quality service.',
    photo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20technician%20master%20mechanic%20portrait%20confident%20experienced%20workshop%20background&image_size=portrait_4_3',
    certifications: ['ASE Master', 'BMW Certified', 'Honda Specialist']
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'Lead Diagnostic Technician',
    bio: 'Sarah specializes in complex electrical systems and computer diagnostics with 12 years of experience.',
    photo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20automotive%20technician%20diagnostic%20specialist%20portrait%20confident%20modern%20workshop&image_size=portrait_4_3',
    certifications: ['ASE Certified', 'Electrical Systems', 'Hybrid Specialist']
  },
  {
    id: 3,
    name: 'David Thompson',
    position: 'Engine Specialist',
    bio: 'David is our go-to expert for engine rebuilds and performance modifications with 15 years of experience.',
    photo: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20engine%20specialist%20technician%20portrait%20experienced%20workshop%20background&image_size=portrait_4_3',
    certifications: ['ASE Engine Performance', 'Toyota Certified', 'Performance Tuning']
  }
])
</script>