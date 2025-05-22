<template>
  <div v-if="round" class="track">
    <div
      v-for="id in round.horses"
      :key="id"
      class="horse"
      :style="horseStyle(id)"
    >
      🐎 {{ horseById(id).name }}
    </div>
    <p>Distance: {{ round.length }} m</p>
  </div>
</template>

<script>
import { useRaceStore } from '@/stores/race'
import { computed } from 'vue'

export default {
  setup() {
    const store = useRaceStore()
    const round = computed(
      () => store.schedule[store.currentRound] || null
    )
    const horseById = id =>
      store.horses.find(h => h.id === id)
    const horseStyle = id => {
      const result = store.results[store.currentRound]
      if (!result) return { left: '0px' }
      const idx = result.order.indexOf(id)
      return {
        left: `${idx * 50}px`,
        transition: 'left 2s ease'
      }
    }
    return { round, horseById, horseStyle }
  }
}
</script>

<style>
.track {
  position: relative;
  height: 400px;
  overflow: hidden;
}
.horse {
  position: absolute;
  bottom: 0;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
</style>
