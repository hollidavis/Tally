<template>
  <div class="col-11 bg-primary mt-3 shadow">
    <h1>Personal Leaderboard</h1>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { gamesService } from '../services/gamesService'

export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await gamesService.getGamesByProfileId(route.params.id)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>
<style>
  .card-img-top {
    height: 20vw;
  }
</style>
