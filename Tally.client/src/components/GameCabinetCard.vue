<template>
  <div class="col-11 shadow bg-primary">
    <h1 class=" text-center">
      Game Cabinet
    </h1>
  </div>
  <div class="bg-light col-11 shadow">
    <ul v-for="g in games" :key="g.id">
      <GameCabinetItem :game="g" />
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gamesService } from '../services/GamesService'

export default {
  name: 'GameCabinetCard',
  setup() {
    onMounted(async() => {
      try {
        await gamesService.getGamesById('6123c8533d312c21a006ff8d')
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      profile: computed(() => AppState.activeProfile),
      game: computed(() => AppState.games)
    }
  }
}
</script>
<style>
  .card-img-top {
    height: 20vw;
  }
</style>
