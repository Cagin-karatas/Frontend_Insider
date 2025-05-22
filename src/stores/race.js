import { defineStore } from 'pinia'

export const useRaceStore = defineStore('race', {
  state: () => ({
    horses: [],          // 20 horses
    schedule: [],        // 6 rounds
    currentRound: 0,
    results: [],         // [{ round, order }]
    isRunning: false,
  }),
  actions: {
    generateHorses() {
      const colors = [
        '#e6194b','#3cb44b','#ffe119','#4363d8','#f58231',
        '#911eb4','#46f0f0','#f032e6','#bcf60c','#fabebe',
        '#008080','#e6beff','#9a6324','#fffac8','#800000',
        '#aaffc3','#808000','#ffd8b1','#000075','#808080'
      ]
      this.horses = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Horse ${i+1}`,
        color: colors[i],
        condition: Math.floor(Math.random() * 100) + 1
      }))
    },
    generateSchedule() {
      this.schedule = []
      const distances = [1200, 1400, 1600, 1800, 2000, 2200]
      for (let i = 0; i < 6; i++) {
        const shuffled = [...this.horses].sort(() => 0.5 - Math.random())
        this.schedule.push({
          length: distances[i],
          horses: shuffled.slice(0, 10).map(h => h.id)
        })
      }
      this.results = []
      this.currentRound = 0
    },
    async startRace() {
      if (this.isRunning) return
      this.isRunning = true
      while (this.currentRound < this.schedule.length) {
        const { horses, length } = this.schedule[this.currentRound]
        const order = horses
          .map(id => ({
            id,
            time:
              length /
                this.horses.find(h => h.id === id).condition +
              Math.random() * 0.5
          }))
          .sort((a, b) => a.time - b.time)
          .map(h => h.id)
        this.results.push({ round: this.currentRound + 1, order })
        // 2 s pause between rounds
        // (you’ll see the animation in RaceTrack)
        // eslint-disable-next-line no-await-in-loop
        await new Promise(r => setTimeout(r, 2000))
        this.currentRound++
      }
      this.isRunning = false
    }
  }
})
