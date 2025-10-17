<template>
  <div>
    <!-- Hero Section - Exact Reference Match -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-white">
      <!-- Clean White/Light Gray Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200"></div>
      
      <!-- Large Red Diagonal Sweep - Main Feature (Exact Match) -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Primary Red Diagonal - Large and Bold -->
        <div class="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-bl from-secondary-500 to-secondary-600 transform origin-top-right" 
             style="clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%);"></div>
        
        <!-- Secondary Red Layer for Depth -->
        <div class="absolute top-0 right-0 w-1/2 h-full bg-primary-600 transform origin-top-right" 
             style="clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 10% 100%);"></div>
      </div>
      
      <!-- Subtle Geometric Elements -->
      
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[85vh] py-8 lg:py-12">
          
          <!-- Content Side -->
          <div class="space-y-6 lg:space-y-8 pr-0 lg:pr-6">
            <!-- Professional Service Badge (Exact Match) -->
            <div class="inline-flex items-center bg-secondary-600 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              <div class="w-2 h-2 bg-white mr-2"></div>
              DEWA MOTOR!!!!
            </div>
            
            <!-- Main Heading - Optimized Typography -->
            <h1 class="text-6xl  font-black leading-none tracking-tight">
              <span class="block text-secondary-600 font-black">KAMI ADALAH DEWANYA</span>
              <span class="block text-primary-600 font-black">SERVICE &</span>
              <span class="block text-primary-600 font-black">BAN MOTOR</span>
            </h1>
            
            <!-- Description -->
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg font-normal">
              Layanan servis motor profesional, ganti ban berkualitas, sparepart original, dan solusi lengkap untuk kendaraan Anda di seluruh Indonesia.
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <NuxtLink to="/contact" 
                class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-secondary-600 hover:bg-secondary-700 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl">
                READ MORE
                <ArrowRight class="ml-2 h-4 w-4" />
              </NuxtLink>
              <NuxtLink to="tel:(208) 555-0112" 
                class="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300">
                <Phone class="mr-2 h-4 w-4" />
                (208) 555-0112
              </NuxtLink>
            </div>
          </div>
          
          <!-- Professional Automotive Image Side -->
          <div class="relative mt-8 lg:mt-0">
            <!-- Clean Image Container with White Frame (Responsive) -->
            <div class="relative bg-white p-3 sm:p-4 shadow-xl">
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20mechanic%20working%20on%20modern%20car%20engine%20in%20clean%20garage%20workshop%2C%20high%20quality%20tools%2C%20bright%20lighting%2C%20red%20and%20navy%20color%20scheme%2C%20professional%20photography&image_size=portrait_4_3"
                alt="Professional automotive service - Expert mechanic at work"
                class="w-full h-64 sm:h-72 md:h-80 lg:h-80 xl:h-96 object-cover"
                loading="eager"
                width="600"
                height="400"
              />
            </div>
            
            <!-- Service Badges - Responsive Positioning -->
            <!-- Expert Service Badge (Top Left) -->
            <div class="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 bg-primary-600 text-white px-2 py-1 sm:px-3 text-xs font-bold uppercase tracking-wider shadow-lg">
              EXPERT SERVICE
            </div>
            
            <!-- Quality Parts Badge (Top Right) -->
            <div class="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-white text-primary-800 px-2 py-1 sm:px-3 text-xs font-bold uppercase tracking-wider shadow-lg border border-gray-200">
              QUALITY PARTS
            </div>
            
            <!-- Fast Service Badge (Bottom Right) -->
            <div class="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-secondary-600 text-white px-2 py-1 sm:px-3 text-xs font-bold uppercase tracking-wider shadow-lg">
              FAST SERVICE
            </div>
            
            <!-- Small Geometric Accent -->
            <div class="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-800 transform rotate-45"></div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section - Automotive Design -->
    

    <!-- About Us Section - Reference Image Style -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[600px]">
          <div class="flex flex-col space-y-6">
            <div class="flex items-baseline space-x-3 flex-shrink-0">
              <span class="text-7xl lg:text-8xl font-black text-secondary-600">15</span>
              <div class="text-xl font-bold text-gray-900 leading-tight">
                <div>Tahun</div>
                <div class="text-secondary-600">Pengalaman</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4 flex-1">
            <!-- Top Left Image -->
              <div class="flex flex-col space-y-4 h-full">
                <NuxtImg
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20Indonesian%20motorcycle%20mechanic%20working%20red%20uniform%20modern%20workshop%20clean%20environment&image_size=landscape_4_3"
                  alt="Professional motorcycle mechanic at work"
                  class="w-full flex-1 min-h-[180px] object-cover rounded-lg"
                />
                <!-- Bottom Left Image -->
                <NuxtImg
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle%20engine%20repair%20professional%20tools%20Indonesian%20workshop%20red%20toolbox%20clean%20workspace&image_size=square"
                  alt="Motorcycle engine repair with professional tools"
                  class="w-full flex-1 min-h-[140px] object-cover rounded-lg"
                />
              </div>
              
              <!-- Right Column -->
              <div class="flex flex-col space-y-4 h-full">
                <!-- Top Right Image -->
                <NuxtImg
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle%20tire%20service%20professional%20Indonesian%20mechanic%20modern%20workshop%20equipment%20red%20uniform&image_size=portrait_3_4"
                  alt="Professional motorcycle tire service"
                  class="w-full flex-1 min-h-[220px] object-cover rounded-lg"
                />
                <!-- Bottom Right Image -->
                <NuxtImg
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle%20diagnostic%20check%20professional%20Indonesian%20workshop%20modern%20equipment%20clean%20environment&image_size=landscape_4_3"
                  alt="Motorcycle diagnostic equipment"
                  class="w-full flex-1 min-h-[100px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <!-- Left Side - Professional Images Grid (2x2 Layout) -->
          

          <!-- Right Side - About Us Content -->
          <div class="space-y-8">
            
            <!-- Header Section -->
            <div class="space-y-4">
              <!-- Small Header Badge -->
              <div class="inline-flex items-center text-secondary-600 text-sm font-bold uppercase tracking-wider">
                <div class="w-2 h-2 bg-secondary-600 mr-2"></div>
                TENTANG KAMI
              </div>
              
              <!-- Years Experience Display -->
              
              
              <!-- Main Headline -->
              <h2 class="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                Perbaikan Cepat<br />
                <span class="text-secondary-600">Hasil Berkualitas</span>
              </h2>
              
              <!-- Description -->
              <p class="text-gray-600 text-base leading-relaxed max-w-md">
                Sebagai bengkel motor terpercaya dengan pengalaman 15 tahun, kami berkomitmen memberikan layanan terbaik dengan teknisi berpengalaman dan sparepart original.
              </p>
            </div>

            <!-- Service Highlights with Icons -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Express Oil Change -->
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center">
                  <Settings class="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-lg">Ganti Oli Express</h3>
                </div>
              </div>

              <!-- Quick Fix Tire Service -->
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <Shield class="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-lg">Servis Ban Cepat</h3>
                </div>
              </div>
            </div>

            <!-- Quality Points with Checkmarks -->
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <CheckCircle class="h-5 w-5 text-primary-600 mt-1 bg-primary-600 rounded" />
                <span class="text-gray-700 font-medium">Kualitas Terjamin, Keamanan Setiap Motor</span>
              </div>
              <div class="flex items-start space-x-3">
                <CheckCircle class="h-5 w-5 text-primary-600 mt-1 bg-primary-600 rounded" />
                <span class="text-gray-700 font-medium">Pemeriksaan Diagnostik Menyeluruh</span>
              </div>
              <div class="flex items-start space-x-3">
                <CheckCircle class="h-5 w-5 text-primary-600 mt-1 bg-primary-600 rounded" />
                <span class="text-gray-700 font-medium">Perawatan Motor Dari Dalam Hingga Luar</span>
              </div>
            </div>

            <!-- Contact & CTA -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <!-- Phone Number -->
              <div class="flex items-center text-gray-900">
                <Phone class="h-5 w-5 text-secondary-600 mr-3" />
                <span class="font-bold text-lg">(021) 555-0112</span>
              </div>
              
              <!-- Read More Button -->
              <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 font-bold uppercase tracking-wider text-sm transition-colors duration-300 flex items-center">
                BACA SELENGKAPNYA
                <ArrowRight class="h-4 w-4 ml-2" />
              </button>
            </div>

            <!-- Two Founders Profile Section -->
            <div class="flex items-center space-x-6 pt-4">
              <!-- Founder 1 -->
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden">
                  <NuxtImg
                    src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20Indonesian%20automotive%20workshop%20owner%20portrait%20confident%20experienced%20mechanic%20founder%20male&image_size=square"
                    alt="Budi Santoso - Co-Founder"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div class="font-bold text-gray-900 text-sm">Budi Santoso</div>
                  <div class="text-xs text-gray-600 font-medium">Co-Founder</div>
                </div>
              </div>

              <!-- Founder 2 -->
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden">
                  <NuxtImg
                    src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20Indonesian%20automotive%20workshop%20owner%20portrait%20confident%20experienced%20mechanic%20founder%20male%20different%20person&image_size=square"
                    alt="Ahmad Wijaya - Co-Founder"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div class="font-bold text-gray-900 text-sm">Ahmad Wijaya</div>
                  <div class="text-xs text-gray-600 font-medium">Co-Founder</div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>

    <!-- Best Services Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            LAYANAN TERBAIK
          </div>
          <h2 class="heading-2 mb-6 text-gray-900">
            Dimana Motor Anda Mendapat Kebanggaan dan Perawatan Terbaik
          </h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            Kami memberikan layanan berkualitas tinggi dengan teknisi berpengalaman dan peralatan modern. 
            Kepuasan pelanggan adalah prioritas utama kami dalam setiap layanan yang diberikan.
          </p>
        </div>

        <!-- Services 2-Column Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <!-- Left Column: Full-Height Brake Inspection -->
          <div class="min-h-[600px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
            <NuxtImg
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional motorcycle brake inspection service in modern garage, mechanic checking brake pads and brake fluid, clean workshop environment, red and blue color scheme, high quality automotive service"
              alt="Pemeriksaan Rem Aman"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div class="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Pemeriksaan Rem Aman</h3>
                <p class="text-gray-200 mb-6 leading-relaxed text-lg">
                  Pemeriksaan menyeluruh sistem rem untuk memastikan keamanan berkendara. 
                  Kami periksa kampas rem, minyak rem, dan seluruh komponen sistem pengereman dengan teknologi terdepan.
                </p>
                <button class="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-bold hover:bg-primary-700 transition-colors duration-300 text-lg">
                  BACA LEBIH
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Split into Two Equal Sections -->
          <div class="grid grid-rows-2 gap-6 min-h-[600px]">
            <!-- Top Section: Engine Tune-Up -->
            <div class="min-h-[290px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle engine tune-up service, mechanic working on motorcycle engine, oil change and engine maintenance, professional automotive garage, clean workspace with tools"
                alt="Tune-Up Mesin Plus"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-white mb-3">Tune-Up Mesin Plus</h3>
                  <p class="text-gray-200 mb-4 leading-relaxed">
                    Perawatan lengkap mesin motor untuk performa optimal. Termasuk ganti oli, 
                    filter udara, busi, dan penyetelan karburator.
                  </p>
                  <button class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                    BACA LEBIH
                  </button>
                </div>
              </div>
            </div>

            <!-- Bottom Section: Battery Check -->
            <div class="min-h-[290px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=motorcycle battery check and electrical system diagnosis, mechanic testing motorcycle battery with multimeter, professional automotive electrical service, clean garage environment"
                alt="Pemeriksaan Boost Baterai"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
              />
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-white mb-3">Pemeriksaan Boost Baterai</h3>
                  <p class="text-gray-200 mb-4 leading-relaxed">
                    Diagnosa lengkap sistem kelistrikan dan baterai motor. Kami periksa tegangan dan kondisi aki.
                  </p>
                  <button class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                    BACA LEBIH
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <NuxtImg
          src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20mechanic%20working%20on%20car%20in%20modern%20garage%20workshop%20dark%20blue%20lighting%20professional%20atmosphere&image_size=landscape_16_9"
          alt="Professional automotive workshop"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-navy-900/80 to-slate-900/90"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 section-padding">
        <div class="container-custom">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <!-- Badge -->
            <div class="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Star class="w-4 h-4 mr-2 text-yellow-400 fill-current" />
              TESTIMONIAL
              <Star class="w-4 h-4 ml-2 text-yellow-400 fill-current" />
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              What our clients say<br>
              <span class="text-white">About Us</span>
            </h2>
          </div>

          <!-- Testimonials Container -->
          <div class="relative max-w-6xl mx-auto">
            <!-- Testimonials Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <!-- Testimonial Card 1 -->
              <div class="group">
                <div class="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-8 border-secondary-600 relative overflow-hidden">
                  <!-- Red accent border -->
                  <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary-600 to-secondary-700"></div>
                  
                  <!-- Customer Info Header -->
                  <div class="flex items-center mb-6">
                    <div class="relative">
                      <NuxtImg
                        src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20indonesian%20business%20woman%20portrait%20confident%20smile%20automotive%20customer&image_size=square"
                        alt="Sari Indah"
                        class="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                      />
                    </div>
                    <div class="ml-4">
                      <h4 class="font-bold text-gray-900 text-lg">Sari Indah</h4>
                      <p class="text-secondary-600 font-medium">Business Woman</p>
                    </div>
                  </div>

                  <!-- Rating Stars -->
                  <div class="flex items-center mb-4">
                    <div class="flex space-x-1">
                      <Star
                        v-for="i in 5"
                        :key="i"
                        class="h-5 w-5 text-yellow-400 fill-current"
                      />
                    </div>
                  </div>
                  
                  <!-- Testimonial Content -->
                  <blockquote class="text-gray-700 text-lg leading-relaxed relative">
                    <div class="absolute -top-2 -left-2 text-6xl text-secondary-200 font-serif">"</div>
                    <p class="relative z-10 pl-8">
                      Pelayanan yang sangat memuaskan! Tim teknisi sangat profesional dalam mendiagnosa masalah mesin mobil saya. Perbaikan dilakukan dengan cepat dan hasil yang berkualitas.
                    </p>
                    <div class="absolute -bottom-4 -right-2 text-6xl text-secondary-200 font-serif rotate-180">"</div>
                  </blockquote>
                </div>
              </div>

              <!-- Testimonial Card 2 -->
              <div class="group">
                <div class="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-l-8 border-secondary-600 relative overflow-hidden">
                  <!-- Red accent border -->
                  <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary-600 to-secondary-700"></div>
                  
                  <!-- Customer Info Header -->
                  <div class="flex items-center mb-6">
                    <div class="relative">
                      <NuxtImg
                        src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20indonesian%20business%20man%20portrait%20confident%20smile%20automotive%20customer&image_size=square"
                        alt="Budi Santoso"
                        class="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                      />
                    </div>
                    <div class="ml-4">
                      <h4 class="font-bold text-gray-900 text-lg">Budi Santoso</h4>
                      <p class="text-secondary-600 font-medium">Business Man</p>
                    </div>
                  </div>

                  <!-- Rating Stars -->
                  <div class="flex items-center mb-4">
                    <div class="flex space-x-1">
                      <Star
                        v-for="i in 5"
                        :key="i"
                        class="h-5 w-5 text-yellow-400 fill-current"
                      />
                    </div>
                  </div>
                  
                  <!-- Testimonial Content -->
                  <blockquote class="text-gray-700 text-lg leading-relaxed relative">
                    <div class="absolute -top-2 -left-2 text-6xl text-secondary-200 font-serif">"</div>
                    <p class="relative z-10 pl-8">
                      Sangat direkomendasikan! Sudah beberapa kali service di sini dan selalu puas dengan hasilnya. Teknisi berpengalaman dan menggunakan spare part berkualitas.
                    </p>
                    <div class="absolute -bottom-4 -right-2 text-6xl text-secondary-200 font-serif rotate-180">"</div>
                  </blockquote>
                </div>
              </div>
            </div>

            <!-- Navigation Dots -->
            <div class="flex justify-center items-center space-x-3">
              <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-colors duration-300"></button>
              <button class="w-4 h-4 rounded-full bg-secondary-600 shadow-lg"></button>
              <button class="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-colors duration-300"></button>
            </div>

            <!-- Navigation Arrows -->
            <button class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
              <ChevronLeft class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group">
              <ChevronRight class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- News & Events Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-primary-600 to-secondary-600 rounded-full blur-3xl"></div>
      </div>

      <!-- Automotive Tire Decorative Element -->
      <div class="absolute left-0 bottom-0 opacity-10 pointer-events-none">
        <NuxtImg
          src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20tire%20wheel%20silhouette%20black%20and%20white%20minimalist%20design&image_size=square"
          alt="Automotive tire decoration"
          class="w-96 h-96 object-contain"
        />
      </div>

      <div class="container-custom relative z-10">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div class="mb-8 md:mb-0">
            <!-- Badge -->
            <div class="inline-flex items-center bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
              <span class="mr-2">📰</span>
              NEWS & UPDATES
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
              Latest New and Blog
            </h2>
          </div>

          <!-- View All Button -->
          <div class="flex-shrink-0">
            <NuxtLink
              to="/blog"
              class="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              VIEW ALL NEWS
              <ArrowRight class="ml-2 h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- News Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- News Card 1 -->
          <article class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
            <!-- Card Image -->
            <div class="relative overflow-hidden">
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20automotive%20mechanic%20checking%20engine%20oil%20modern%20workshop%20service%20maintenance&image_size=landscape_4_3"
                alt="Fast Service Reliable Results"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <!-- Date Badge -->
              <div class="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-2 rounded-lg shadow-lg">
                <div class="text-center">
                  <div class="text-lg font-bold leading-none">10</div>
                  <div class="text-xs font-medium">Oct</div>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <!-- Meta Info -->
              <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <div class="flex items-center">
                  <MessageCircle class="w-4 h-4 mr-1" />
                  <span>02 Comments</span>
                </div>
                <div class="flex items-center">
                  <User class="w-4 h-4 mr-1" />
                  <span>Admin</span>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-navy-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300 line-clamp-2">
                Fast Service Reliable Results Car's Best Friend
              </h3>

              <!-- Description -->
              <p class="text-gray-600 mb-4 line-clamp-3">
                The old engine oil is drained and replaced with fresh oil, and the oil filter is also replaced to ensure optimal engine performance.
              </p>

              <!-- Read More Button -->
              <NuxtLink
                to="/blog/fast-service-reliable-results"
                class="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold transition-colors duration-300 group/link"
              >
                READ MORE
                <ArrowRight class="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
              </NuxtLink>
            </div>
          </article>

          <!-- News Card 2 -->
          <article class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
            <!-- Card Image -->
            <div class="relative overflow-hidden">
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20technician%20changing%20oil%20filter%20professional%20car%20service%20workshop&image_size=landscape_4_3"
                alt="Your Ride Our Pride"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <!-- Date Badge -->
              <div class="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-2 rounded-lg shadow-lg">
                <div class="text-center">
                  <div class="text-lg font-bold leading-none">10</div>
                  <div class="text-xs font-medium">Oct</div>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <!-- Meta Info -->
              <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <div class="flex items-center">
                  <MessageCircle class="w-4 h-4 mr-1" />
                  <span>02 Comments</span>
                </div>
                <div class="flex items-center">
                  <User class="w-4 h-4 mr-1" />
                  <span>Admin</span>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-navy-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300 line-clamp-2">
                Your Ride Our Pride Your Car Deserves the Best
              </h3>

              <!-- Description -->
              <p class="text-gray-600 mb-4 line-clamp-3">
                The old engine oil is drained and replaced with fresh oil, and the oil filter is also replaced to ensure optimal performance.
              </p>

              <!-- Read More Button -->
              <NuxtLink
                to="/blog/your-ride-our-pride"
                class="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold transition-colors duration-300 group/link"
              >
                READ MORE
                <ArrowRight class="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
              </NuxtLink>
            </div>
          </article>

          <!-- News Card 3 -->
          <article class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200 transform hover:-translate-y-2">
            <!-- Card Image -->
            <div class="relative overflow-hidden">
              <NuxtImg
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20car%20engine%20maintenance%20automotive%20service%20technician%20working&image_size=landscape_4_3"
                alt="Engine Maintenance Service"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <!-- Date Badge -->
              <div class="absolute top-4 left-4 bg-secondary-600 text-white px-3 py-2 rounded-lg shadow-lg">
                <div class="text-center">
                  <div class="text-lg font-bold leading-none">10</div>
                  <div class="text-xs font-medium">Oct</div>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <!-- Meta Info -->
              <div class="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <div class="flex items-center">
                  <MessageCircle class="w-4 h-4 mr-1" />
                  <span>02 Comments</span>
                </div>
                <div class="flex items-center">
                  <User class="w-4 h-4 mr-1" />
                  <span>Admin</span>
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-navy-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300 line-clamp-2">
                Fast Service Reliable Results Car's Best Friend
              </h3>

              <!-- Description -->
              <p class="text-gray-600 mb-4 line-clamp-3">
                The old engine oil is drained and replaced with fresh oil, and the oil filter is also replaced to ensure optimal engine performance.
              </p>

              <!-- Read More Button -->
              <NuxtLink
                to="/blog/engine-maintenance-service"
                class="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold transition-colors duration-300 group/link"
              >
                READ MORE
                <ArrowRight class="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Partnership Registration Section -->
    <section class="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-600 to-primary-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg shadow-secondary-600/25 transform hover:scale-105 transition-all duration-300">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
            GABUNG KEMITRAAN
          </div>
          <h2 class="heading-2 text-navy-900 mb-6 leading-tight">
            Bergabunglah dengan Jaringan<br>
            <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Kemitraan Dewamotor</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Wujudkan impian bisnis Anda dengan bergabung dalam ekosistem kemitraan terpercaya. 
            Dapatkan dukungan penuh dari brand yang telah berpengalaman puluhan tahun di industri otomotif.
          </p>
        </div>

        <!-- Partnership Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Left Column: Benefits & Requirements -->
          <div class="space-y-8">
            <!-- Partnership Benefits -->
            <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-white/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 group">
              <div class="flex items-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle class="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-navy-900 mb-1">Keuntungan Kemitraan</h3>
                  <p class="text-emerald-600 font-semibold">Investasi Menguntungkan</p>
                </div>
              </div>
              <ul class="space-y-5">
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors duration-200">
                    <CheckCircle class="h-4 w-4 text-emerald-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Pelatihan komprehensif teknik dan manajemen bisnis</span>
                </li>
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors duration-200">
                    <CheckCircle class="h-4 w-4 text-emerald-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Dukungan marketing dan promosi berkelanjutan</span>
                </li>
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors duration-200">
                    <CheckCircle class="h-4 w-4 text-emerald-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Sistem operasional yang telah terbukti</span>
                </li>
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors duration-200">
                    <CheckCircle class="h-4 w-4 text-emerald-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Akses ke jaringan supplier terpercaya</span>
                </li>
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors duration-200">
                    <CheckCircle class="h-4 w-4 text-emerald-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Brand recognition yang kuat di industri</span>
                </li>
              </ul>
            </div>

            <!-- Requirements -->
            <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl shadow-gray-200/50 border border-white/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500 group">
              <div class="flex items-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                  <Settings class="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-navy-900 mb-1">Persyaratan Kemitraan</h3>
                  <p class="text-blue-600 font-semibold">Kriteria Mitra</p>
                </div>
              </div>
              <ul class="space-y-5">
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors duration-200">
                    <ArrowRight class="h-4 w-4 text-blue-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Memiliki lahan strategis minimal sesuai paket</span>
                </li>
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors duration-200">
                    <ArrowRight class="h-4 w-4 text-blue-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Komitmen penuh untuk menjalankan bisnis</span>
                </li>
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors duration-200">
                    <ArrowRight class="h-4 w-4 text-blue-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Mengikuti pelatihan dan sertifikasi</span>
                </li>
                <li class="flex items-start group/item">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors duration-200">
                    <ArrowRight class="h-4 w-4 text-blue-600" />
                  </div>
                  <span class="text-gray-700 font-medium leading-relaxed">Mematuhi standar operasional perusahaan</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column: Partnership Packages -->
          <div class="space-y-8">
            <!-- Premium Package -->
            <div class="bg-gradient-to-br from-secondary-600 via-secondary-700 to-secondary-800 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-secondary-600/30 hover:shadow-secondary-600/40 transition-all duration-500 group border border-secondary-500/20">
              <!-- Background Elements -->
              <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-700"></div>
              <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full"></div>
              
              <div class="relative z-10">
                <div class="bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-sm rounded-xl px-6 py-3 inline-block mb-6 border border-white/20">
                  <span class="text-white font-bold text-lg tracking-wide">KEMITRAAN 325 JUTA</span>
                </div>
                <div class="mb-6">
                  <h3 class="text-3xl text-white font-bold mb-2">Paket Premium</h3>
                  <p class="text-secondary-100 font-medium">Solusi Bisnis Terlengkap</p>
                </div>
                <ul class="space-y-4 mb-10">
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Lebar wilayah 10-12 meter</span>
                  </li>
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Free bahan baku awal senilai 95 juta</span>
                  </li>
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Model facade dengan acrylic board</span>
                  </li>
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Peralatan service lebih lengkap</span>
                  </li>
                </ul>
                <button class="w-full bg-white text-secondary-700 py-5 px-8 rounded-xl font-bold hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn">
                  <span class="mr-2">INFO SELENGKAPNYA</span>
                  <ArrowRight class="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            <!-- Standard Package -->
            <div class="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-600/30 hover:shadow-primary-600/40 transition-all duration-500 group border border-primary-500/20">
              <!-- Background Elements -->
              <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-700"></div>
              <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full"></div>
              
              <div class="relative z-10">
                <div class="bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-sm rounded-xl px-6 py-3 inline-block mb-6 border border-white/20">
                  <span class="text-white font-bold text-lg tracking-wide">KEMITRAAN 250 JUTA</span>
                </div>
                <div class="mb-6">
                  <h3 class="text-3xl text-white font-bold mb-2">Paket Standar</h3>
                  <p class="text-primary-100 font-medium">Pilihan Bisnis Terpercaya</p>
                </div>
                <ul class="space-y-4 mb-10">
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Lebar wilayah 6-9 meter</span>
                  </li>
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Free bahan baku awal senilai 70 juta</span>
                  </li>
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Model facade tanpa acrylic board</span>
                  </li>
                  <li class="flex items-center group/item">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:bg-white/30 transition-colors duration-200">
                      <CheckCircle class="h-4 w-4" />
                    </div>
                    <span class="font-medium">Peralatan service standar</span>
                  </li>
                </ul>
                <button class="w-full bg-white text-primary-700 py-5 px-8 rounded-xl font-bold hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn">
                  <span class="mr-2">INFO SELENGKAPNYA</span>
                  <ArrowRight class="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center mt-20">
          <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl shadow-gray-200/50 max-w-5xl mx-auto border border-white/50 relative overflow-hidden group">
            <!-- Background Pattern -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-60"></div>
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full -mr-32 -mt-32"></div>
            
            <div class="relative z-10">
              <div class="mb-8">
                <h3 class="text-3xl font-bold text-navy-900 mb-4 leading-tight">
                  Siap Memulai Kemitraan dengan 
                  <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Dewamotor?</span>
                </h3>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Hubungi tim ahli kami untuk konsultasi gratis dan dapatkan informasi lengkap tentang peluang kemitraan yang tersedia di wilayah Anda. Wujudkan impian bisnis Anda bersama kami.
                </p>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button class="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-10 py-5 rounded-xl font-bold hover:from-secondary-700 hover:to-secondary-800 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary-600/25 transition-all duration-300 flex items-center justify-center group/btn min-w-[200px]">
                  <Phone class="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span>Hubungi Sekarang</span>
                </button>
                <button class="border-2 border-primary-600 text-primary-600 px-10 py-5 rounded-xl font-bold hover:bg-primary-600 hover:text-white hover:shadow-xl hover:shadow-primary-600/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn min-w-[200px]">
                  <Calendar class="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span>Jadwalkan Konsultasi</span>
                </button>
              </div>
              
              <!-- Trust Indicators -->
              <div class="mt-10 pt-8 border-t border-gray-200/50">
                <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
                  <div class="flex items-center">
                    <CheckCircle class="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Konsultasi Gratis</span>
                  </div>
                  <div class="flex items-center">
                    <CheckCircle class="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Tanpa Komitmen</span>
                  </div>
                  <div class="flex items-center">
                    <CheckCircle class="h-4 w-4 text-emerald-500 mr-2" />
                    <span>Respon Cepat 24 Jam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
  
  </div>
</template>

<script setup lang="ts">
import { 
  Wrench, 
  ArrowRight, 
  Star, 
  Calendar, 
  Phone, 
  Clock,
  Settings,
  Zap,
  Shield,
  Gauge,
  ChevronLeft,
  ChevronRight,
  CheckCircle
} from 'lucide-vue-next'
import { useHead } from 'nuxt/app'

// SEO Meta
useHead({
  title: 'Professional Automotive Repair Services | Dewamotor',
  meta: [
    {
      name: 'description',
      content: 'Expert automotive repair and maintenance services. Professional technicians, quality parts, and reliable service for all your vehicle needs. Get your free quote today!'
    },
    {
      property: 'og:title',
      content: 'Professional Automotive Repair Services | Dewamotor'
    },
    {
      property: 'og:description',
      content: 'Expert automotive repair and maintenance services. Professional technicians, quality parts, and reliable service for all your vehicle needs.'
    }
  ]
})

// Featured Services Data
const featuredServices = [
  {
    id: 1,
    name: 'Engine Repair',
    description: 'Complete engine diagnostics and repair services for all vehicle makes and models.',
    price: 'From $299',
    icon: Settings,
    slug: 'engine-repair'
  },
  {
    id: 2,
    name: 'Brake Service',
    description: 'Professional brake inspection, repair, and replacement for your safety.',
    price: 'From $149',
    icon: Shield,
    slug: 'brake-service'
  },
  {
    id: 3,
    name: 'Transmission',
    description: 'Expert transmission repair and maintenance to keep you moving smoothly.',
    price: 'From $399',
    icon: Gauge,
    slug: 'transmission'
  },
  {
    id: 4,
    name: 'Electrical',
    description: 'Advanced electrical system diagnostics and repair services.',
    price: 'From $99',
    icon: Zap,
    slug: 'electrical'
  }
]

// Featured Projects Data
const featuredProjects = [
  {
    id: 1,
    title: '2023 BMW Engine Rebuild',
    description: 'Complete engine rebuild with performance upgrades and enhanced reliability.',
    category: 'Engine Repair',
    date: 'Dec 2024',
    slug: 'bmw-engine-rebuild',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=BMW%20engine%20rebuild%20project%20in%20professional%20automotive%20garage%2C%20clean%20workspace%2C%20high%20quality%20tools%2C%20red%20and%20navy%20color%20scheme&image_size=landscape_4_3'
  },
  {
    id: 2,
    title: 'Mercedes Brake System Upgrade',
    description: 'High-performance brake system installation with premium components.',
    category: 'Brake Service',
    date: 'Nov 2024',
    slug: 'mercedes-brake-upgrade',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Mercedes%20brake%20system%20upgrade%20professional%20automotive%20service%2C%20high%20performance%20brake%20components%2C%20clean%20garage&image_size=landscape_4_3'
  },
  {
    id: 3,
    title: 'Audi Transmission Service',
    description: 'Complete transmission overhaul with warranty and performance testing.',
    category: 'Transmission',
    date: 'Oct 2024',
    slug: 'audi-transmission-service',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Audi%20transmission%20service%20professional%20automotive%20repair%2C%20modern%20garage%20equipment%2C%20clean%20workspace&image_size=landscape_4_3'
  }
]

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Motor City, MC',
    content: 'Excellent service! They diagnosed my engine problem quickly and fixed it at a fair price. The team was professional and kept me informed throughout the process.'
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    location: 'Auto Valley, AV',
    content: 'I\'ve been bringing my cars here for years. They always do quality work and stand behind their repairs. Highly recommend for any automotive needs.'
  },
  {
    id: 3,
    name: 'Emily Chen',
    location: 'Service Town, ST',
    content: 'Fast, reliable, and honest service. They explained everything clearly and didn\'t try to sell me unnecessary repairs. Will definitely return for future maintenance.'
  }
]
</script>