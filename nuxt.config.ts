// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  // SEO and Meta Configuration
  app: {
    head: {
      title: 'Dewamotor - Professional Automotive Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional automotive repair and maintenance services. Expert engine repair, brake service, transmission work, and more. Quality service you can trust.' },
        { name: 'keywords', content: 'automotive repair, car service, engine repair, brake service, transmission, auto maintenance' },
        { property: 'og:title', content: 'Dewamotor - Professional Automotive Services' },
        { property: 'og:description', content: 'Professional automotive repair and maintenance services. Expert engine repair, brake service, transmission work, and more.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dewamotor.com' },
        { property: 'og:image', content: 'https://dewamotor.com/wp-content/uploads/2023/11/logo-1.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  // CSS Configuration
  css: ['~/assets/css/main.css'],

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // TypeScript Configuration
  typescript: {
    strict: true,
    typeCheck: true
  },

  // Nitro Configuration for API routes
  nitro: {
    // preset: 'static' // Removed - causing routing issues
  },

  // Image Optimization
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Runtime Config
  runtimeConfig: {
    // Private keys (only available on server-side)
    emailService: process.env.EMAIL_SERVICE_KEY,
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.SITE_URL || 'https://dewamotor.com',
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    }
  }
})
