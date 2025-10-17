<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>About Us - Dewamotor Professional Automotive Services</Title>
      <Meta name="description" content="Learn about Dewamotor's 15+ years of automotive excellence. Meet our certified team, discover our mission, and see why customers trust us with their vehicles." />
      <Meta name="keywords" content="about dewamotor, automotive experts, certified mechanics, car repair experience, professional automotive services" />
    </Head>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About Dewamotor</h1>
          <p class="text-xl mb-8 text-gray-300">
            Your trusted automotive partner for over 15 years, delivering excellence in every service.
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">Our Story</h2>
              <div class="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, Dewamotor began as a small family-owned automotive repair shop with a simple mission: 
                  to provide honest, reliable, and professional automotive services to our community.
                </p>
                <p>
                  Over the years, we've grown from a two-person operation to a full-service automotive center with 
                  state-of-the-art equipment and a team of certified technicians. Despite our growth, we've never 
                  lost sight of our core values: integrity, quality, and customer satisfaction.
                </p>
                <p>
                  Today, we're proud to be the trusted choice for thousands of customers who rely on us to keep 
                  their vehicles running safely and efficiently. From routine maintenance to complex repairs, 
                  we treat every vehicle as if it were our own.
                </p>
              </div>
            </div>
            <div class="relative">
              <NuxtImg 
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20repair%20shop%20interior%20modern%20equipment%20clean%20organized%20workspace%20mechanics%20working&image_size=landscape_4_3"
                alt="Dewamotor automotive repair shop"
                class="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
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

    <!-- Team Section -->
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

    <!-- Certifications & Awards -->
    <section class="py-16 bg-slate-800 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Certifications &amp; Recognition</h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by industry leaders and certification bodies.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="cert in certifications" 
              :key="cert.id"
              class="text-center"
            >
              <div class="bg-white/10 rounded-lg p-6 mb-4">
                <component :is="cert.icon" class="h-12 w-12 mx-auto text-red-400" />
              </div>
              <h3 class="font-semibold mb-2">{{ cert.name }}</h3>
              <p class="text-sm text-gray-300">{{ cert.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Why Choose Dewamotor?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional expertise and genuine care make.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="reason in whyChooseUs" 
              :key="reason.id"
              class="flex items-start space-x-4"
            >
              <div class="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
                <component :is="reason.icon" class="h-6 w-6" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ reason.title }}</h3>
                <p class="text-gray-600">{{ reason.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-16 bg-red-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold mb-2">15+</div>
              <div class="text-red-100">Years Experience</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">5,000+</div>
              <div class="text-red-100">Happy Customers</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">10,000+</div>
              <div class="text-red-100">Vehicles Serviced</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">98%</div>
              <div class="text-red-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Experience the Dewamotor Difference?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who trust us with their automotive needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/contact"
              class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Schedule Service
            </NuxtLink>
            <NuxtLink 
              to="/services"
              class="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors duration-200"
            >
              View Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Shield, Award, Users, CheckCircle, Clock, Wrench, Star, Phone } from 'lucide-vue-next'
import { useHead } from 'nuxt/app'
import { ref } from 'vue'

// SEO
useHead({
  title: 'About Us - Dewamotor Professional Automotive Services',
  meta: [
    { name: 'description', content: 'Learn about Dewamotor\'s 15+ years of automotive excellence. Meet our certified team, discover our mission, and see why customers trust us with their vehicles.' }
  ]
})

// Team members data
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

// Certifications data
const certifications = ref([
  {
    id: 1,
    name: 'ASE Certified',
    description: 'Automotive Service Excellence certification for all technicians',
    icon: Award
  },
  {
    id: 2,
    name: 'BBB A+ Rating',
    description: 'Better Business Bureau highest rating for customer service',
    icon: Star
  },
  {
    id: 3,
    name: 'Factory Trained',
    description: 'Certified by major automotive manufacturers',
    icon: CheckCircle
  },
  {
    id: 4,
    name: 'EPA Certified',
    description: 'Environmental Protection Agency certified for safe practices',
    icon: Shield
  }
])

// Why choose us data
const whyChooseUs = ref([
  {
    id: 1,
    title: 'Expert Diagnostics',
    description: 'State-of-the-art diagnostic equipment and certified technicians ensure accurate problem identification.',
    icon: Wrench
  },
  {
    id: 2,
    title: 'Quality Parts',
    description: 'We use only OEM and high-quality aftermarket parts backed by comprehensive warranties.',
    icon: CheckCircle
  },
  {
    id: 3,
    title: 'Fast Service',
    description: 'Efficient processes and skilled technicians mean faster turnaround times without compromising quality.',
    icon: Clock
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Emergency roadside assistance and after-hours support for our customers when you need it most.',
    icon: Phone
  }
])
</script>