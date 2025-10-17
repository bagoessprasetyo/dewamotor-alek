<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-bg relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-800/70"></div>
      <div class="container-custom section-padding relative z-10">
        <div class="text-center text-white max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Professional
            <span class="text-gradient">Automotive Services</span>
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Comprehensive automotive repair and maintenance services from certified technicians. 
            Quality workmanship with warranties you can trust.
          </p>
          
          <!-- Quick Actions -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary btn-lg">
              <Calendar class="h-5 w-5" />
              Schedule Service
            </NuxtLink>
            <a href="tel:+1234567890" class="btn-secondary btn-lg">
              <Phone class="h-5 w-5" />
              Emergency Service
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <section class="section-padding">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Our Service Categories</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to complex repairs, we offer comprehensive automotive services 
            to keep your vehicle running at its best.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card group"
          >
            <div class="service-card-icon">
              <component :is="service.icon" class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ service.name }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            
            <!-- Service Features -->
            <ul class="space-y-2 mb-6">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center text-sm text-gray-600"
              >
                <Check class="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                {{ feature }}
              </li>
            </ul>
            
            <!-- Pricing -->
            <div class="flex items-center justify-between mb-4">
              <div class="text-primary-600 font-semibold">{{ service.price }}</div>
              <div class="text-sm text-gray-500">{{ service.duration }}</div>
            </div>
            
            <!-- CTA Button -->
            <NuxtLink
              :to="`/services/${service.slug}`"
              class="btn-primary w-full justify-center group-hover:bg-primary-700 transition-colors duration-200"
            >
              Learn More
              <ArrowRight class="h-4 w-4 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="heading-2 mb-4">Our Service Process</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure quality service and customer satisfaction 
            at every step of the repair process.
          </p>
        </div>

        <!-- Process Steps -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            class="text-center"
          >
            <!-- Step Number -->
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                {{ index + 1 }}
              </div>
              <!-- Connector Line (except for last item) -->
              <div
                v-if="index < processSteps.length - 1"
                class="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-200 transform translate-x-8"
              ></div>
            </div>
            
            <!-- Step Content -->
            <div class="step-icon mb-4">
              <component :is="step.icon" class="h-8 w-8 text-primary-600 mx-auto" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <h2 class="heading-2 mb-6">Why Choose Dewamotor?</h2>
            <p class="text-xl text-gray-600 mb-8">
              With over 15 years of experience, we've built a reputation for excellence 
              in automotive repair and customer service.
            </p>
            
            <!-- Benefits List -->
            <div class="space-y-6">
              <div
                v-for="benefit in benefits"
                :key="benefit.id"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <component :is="benefit.icon" class="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                  <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="relative">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20technician%20team%20in%20modern%20garage%20workshop%2C%20clean%20organized%20workspace%2C%20advanced%20diagnostic%20equipment%2C%20red%20and%20navy%20color%20scheme&image_size=portrait_4_3"
              alt="Professional automotive service team"
              class="rounded-2xl shadow-xl w-full h-auto"
            />
            <!-- Decorative Badge -->
            <div class="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
              <div class="text-2xl font-bold">15+</div>
              <div class="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Service CTA -->
    <section class="section-padding bg-primary-600">
      <div class="container-custom">
        <div class="text-center text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Service?
          </h2>
          <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We offer 24/7 emergency automotive services for urgent repairs and roadside assistance.
          </p>
          
          <!-- Emergency Contact -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+1234567890" class="btn-white btn-lg">
              <Phone class="h-5 w-5" />
              Call Emergency Line
            </a>
            <NuxtLink to="/contact" class="btn-outline-white btn-lg">
              <MessageSquare class="h-5 w-5" />
              Request Callback
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  Calendar, 
  Phone, 
  Check, 
  ArrowRight,
  Settings,
  Zap,
  Shield,
  Gauge,
  Wrench,
  Car,
  Battery,
  Thermometer,
  Search,
  ClipboardCheck,
  CheckCircle,
  Award,
  Clock,
  Users,
  MessageSquare
} from 'lucide-vue-next'
import { useHead } from 'nuxt/app'

// SEO Meta
useHead({
  title: 'Automotive Services | Professional Car Repair & Maintenance | Dewamotor',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive automotive services including engine repair, brake service, transmission, electrical work, and routine maintenance. Professional technicians with 15+ years experience.'
    },
    {
      property: 'og:title',
      content: 'Automotive Services | Professional Car Repair & Maintenance | Dewamotor'
    },
    {
      property: 'og:description',
      content: 'Comprehensive automotive services including engine repair, brake service, transmission, electrical work, and routine maintenance.'
    }
  ]
})

// Services Data
const services = [
  {
    id: 1,
    name: 'Engine Repair & Diagnostics',
    description: 'Complete engine diagnostics, repair, and rebuilding services for all vehicle makes and models.',
    price: 'From $299',
    duration: '2-5 days',
    icon: Settings,
    slug: 'engine-repair',
    features: [
      'Computer diagnostics',
      'Engine rebuilding',
      'Performance tuning',
      '12-month warranty'
    ]
  },
  {
    id: 2,
    name: 'Brake System Service',
    description: 'Professional brake inspection, repair, and replacement services for optimal safety.',
    price: 'From $149',
    duration: '2-4 hours',
    icon: Shield,
    slug: 'brake-service',
    features: [
      'Brake pad replacement',
      'Rotor resurfacing',
      'Brake fluid service',
      'Safety inspection'
    ]
  },
  {
    id: 3,
    name: 'Transmission Service',
    description: 'Expert transmission repair, maintenance, and replacement services.',
    price: 'From $399',
    duration: '1-3 days',
    icon: Gauge,
    slug: 'transmission',
    features: [
      'Transmission flush',
      'Clutch replacement',
      'Automatic repair',
      'Performance testing'
    ]
  },
  {
    id: 4,
    name: 'Electrical System',
    description: 'Advanced electrical system diagnostics and repair for modern vehicles.',
    price: 'From $99',
    duration: '1-2 hours',
    icon: Zap,
    slug: 'electrical',
    features: [
      'Battery testing',
      'Alternator repair',
      'Wiring diagnostics',
      'Electronic systems'
    ]
  },
  {
    id: 5,
    name: 'Air Conditioning',
    description: 'Complete A/C system service, repair, and refrigerant recharge.',
    price: 'From $129',
    duration: '1-2 hours',
    icon: Thermometer,
    slug: 'air-conditioning',
    features: [
      'A/C system diagnosis',
      'Refrigerant recharge',
      'Compressor repair',
      'Leak detection'
    ]
  },
  {
    id: 6,
    name: 'Routine Maintenance',
    description: 'Comprehensive maintenance services to keep your vehicle running smoothly.',
    price: 'From $79',
    duration: '1-2 hours',
    icon: Wrench,
    slug: 'maintenance',
    features: [
      'Oil change service',
      'Filter replacements',
      'Fluid top-offs',
      'Multi-point inspection'
    ]
  }
]

// Service Process Steps
const processSteps = [
  {
    id: 1,
    title: 'Initial Inspection',
    description: 'Comprehensive vehicle inspection and diagnostic assessment.',
    icon: Search
  },
  {
    id: 2,
    title: 'Detailed Estimate',
    description: 'Transparent pricing with detailed breakdown of required services.',
    icon: ClipboardCheck
  },
  {
    id: 3,
    title: 'Expert Repair',
    description: 'Professional repair work using quality parts and proven techniques.',
    icon: CheckCircle
  },
  {
    id: 4,
    title: 'Quality Check',
    description: 'Thorough testing and quality assurance before vehicle delivery.',
    icon: CheckCircle
  }
]

// Benefits/Why Choose Us
const benefits = [
  {
    id: 1,
    title: 'Certified Technicians',
    description: 'ASE-certified mechanics with extensive training and experience in all vehicle makes and models.',
    icon: Award
  },
  {
    id: 2,
    title: 'Fast Turnaround',
    description: 'Efficient service with most repairs completed same-day or within 24 hours.',
    icon: Clock
  },
  {
    id: 3,
    title: 'Quality Guarantee',
    description: 'All repairs backed by comprehensive warranties and satisfaction guarantee.',
    icon: Shield
  },
  {
    id: 4,
    title: 'Customer Focus',
    description: 'Personalized service with clear communication throughout the repair process.',
    icon: Users
  }
]
</script>