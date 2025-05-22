<template>
  <div class="buttons">
    <b-button @click="onGenerate" type="is-primary">Generate</b-button>
    <b-button
      @click="onStart"
      :disabled="store.isRunning || !store.schedule.length"
      type="is-success"
    >
      Start
    </b-button>
  </div>
</template>

<script>
import { useRaceStore } from '@/stores/race'
export default {
  setup() {
    const store = useRaceStore()
    const onGenerate = () => {
      store.generateHorses()
      store.generateSchedule()
    }
    const onStart = () => store.startRace()
    return { store, onGenerate, onStart }
  }
}
</script>
