<template>
  <div class="col-12 rounded-top bg-dark-pink mt-3 shadow">
    <h1 class="m-0 py-3 text-center pink-text-shadow">
      Personal Leaderboard
    </h1>
  </div>
  <div class="col-12 bg-white shadow p-4 leaderboard overflow-scroll">
    <div v-if="Object.entries(gameScores).length !== 0" class="d-flex justify-content-between ">
      <h3>Game</h3>
      <h3>Wins</h3>
    </div>
    <div v-if="Object.entries(gameScores).length !==0" class="ml-0">
      <div class="d-flex justify-content-between" v-for="g in gameScores" :key="g.id">
        <h5 class="text-break mr-5">
          {{ g[0] }}
        </h5>
        <h5>{{ g[1] }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { resultsService } from '../services/ResultsService'

export default {
  setup() {
    const route = useRoute()
    watch(() => route.params.id, async() => {
      await resultsService.getResultsByProfileId(route.params.id)
    })
    onMounted(async() => {
      try {
        await resultsService.getResultsByProfileId(route.params.id)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      profile: computed(() => AppState.activeProfile),
      gameScores: computed(() => AppState.gameResults)
    }
  }
}
</script>
<style>
  .card-img-top {
    height: 20vw;
  }
  .leaderboard{
    height: 35vh;
  }
</style>
