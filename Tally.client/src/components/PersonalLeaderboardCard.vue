<template>
  <div class="col-12 rounded-top bg-primary mt-3 shadow">
    <h1>Personal Leaderboard</h1>
  </div>
  <div class="col-12 bg-light shadow p-4">
      <div class="d-flex justify-content-between ">
        <h3>Game</h3>
        <h3>Wins</h3>
      </div>
    <div class="ml-0" v-for="g in gameScores">
      <div class="d-flex justify-content-between ">
        <h5>{{g.name}}</h5>
        <h5>{{g.score}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { resultsService } from '../services/ResultsService'

export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        // await resultsService.getResultsByProfileId(route.params.id)
        await resultsService.getResultsByHouseholdId('6126f12ee6eb456384a83a15', '4bhIO7ErEG')
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      profile: computed(() => AppState.activeProfile),
      gameScores: computed(() => AppState.scores)
    }
  }
}
</script>
<style>
  .card-img-top {
    height: 20vw;
  }
</style>
