<template>
  <div v-if="store.results.length">
    <h3>Results</h3>
    <div v-for="r in store.results" :key="r.round">
      <strong>Round {{ r.round }}:</strong>
      <span v-for="id in r.order" :key="id">
        {{ store.horses.find(h => h.id === id).name }}
        <span v-if="!isLast(id, r.order)">›</span>
      </span>
    </div>
  </div>
</template>

<script>
import { useRaceStore } from '@/stores/race'
export default {
  setup() {
    const store = useRaceStore()
    const isLast = (id, arr) =>
      arr.indexOf(id) === arr.length - 1
    return { store, isLast }
  }
}
</script>
