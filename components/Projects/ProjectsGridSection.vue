<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12" v-if="hasMoreProjects">
        <button
          @click="$emit('loadMore')"
          :disabled="isLoading"
          class="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading" class="flex items-center justify-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </span>
          <span v-else>{{ loadMoreText }}</span>
        </button>
      </div>

      <!-- No Projects Message -->
      <div v-if="projects.length === 0" class="text-center py-12">
        <div class="text-gray-500">
          <FileX class="h-16 w-16 mx-auto mb-4" />
          <h3 class="text-xl font-medium mb-2">
            {{ noProjectsMessage.title }}
          </h3>
          <p>{{ noProjectsMessage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileX } from "lucide-vue-next"

// Import ProjectCard component

const ProjectCard = defineAsyncComponent(() => import('~/components/Projects/ProjectCard.vue'))

interface Project {
  id: number
  title: string
  slug: string
  description: string
  category: string
  vehicle: string
  completionDate: string
  image: string
  filterCategory: string
}

interface Props {
  projects: Project[]
  hasMoreProjects?: boolean
  isLoading?: boolean
  loadMoreText?: string
  noProjectsMessage?: {
    title: string
    description: string
  }
}

withDefaults(defineProps<Props>(), {
  hasMoreProjects: false,
  isLoading: false,
  loadMoreText: "Load More Projects",
  noProjectsMessage: () => ({
    title: "No Projects Found",
    description: "Try adjusting your filter to see more projects.",
  }),
})

defineEmits<{
  loadMore: []
}>()
</script>