<template>
  <div class="col-11 rounded-top bg-primary mt-3 shadow">
    <h1>Personal Leaderboard</h1>
  </div>
  <div class="col-11 bg-light shadow">
    <ul v-for="g in gameScores" :key="g.id">
      <LeaderboardItem :score="g" />
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { gamesService } from '../services/GamesService'

export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await gamesService.getResultsByProfileId(route.params.id)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      profile: computed(() => AppState.activeProfile),
      gameScores: computed(() => AppState.gameScores)
    }
  }
}
</script>
<style>
  .card-img-top {
    height: 20vw;
  }
</style>
