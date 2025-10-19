<template>
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
</template>

<script setup lang="ts">
// No props needed for this component
</script>