<template>
  <section class="py-8 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-4">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          @click="handleFilterChange(filter.value)"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all duration-300',
            activeFilter === filter.value 
              ? 'bg-red-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Filter {
  label: string
  value: string
}

interface Props {
  activeFilter: string
  filters?: Filter[]
}

const props = withDefaults(defineProps<Props>(), {
  filters: () => [
    { label: 'All Projects', value: 'all' },
    { label: 'Engine Repair', value: 'engine' },
    { label: 'Brake Service', value: 'brake' },
    { label: 'Transmission', value: 'transmission' },
    { label: 'Electrical', value: 'electrical' },
    { label: 'Body Work', value: 'body' }
  ]
})

const emit = defineEmits<{
  filterChange: [value: string]
}>()

const handleFilterChange = (value: string) => {
  emit('filterChange', value)
}
</script>