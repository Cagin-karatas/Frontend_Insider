<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Insider Horse Racing</h1>
      <Controls />
      <RaceTrack />
      <Results />
    </div>
  </section>
</template>

<script>
import Controls from '@/components/Controls.vue'
import RaceTrack from '@/components/RaceTrack.vue'
import Results from '@/components/Results.vue'

export default {
  name: 'Home',
  components: { Controls, RaceTrack, Results }
}
</script>
