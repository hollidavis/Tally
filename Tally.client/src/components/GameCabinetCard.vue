<template>
  <div class="col-md-5 p-0">
    <div class="row m-0 w-100 bg-dark-pink py-3">
      <div class="col-md-10 p-0 text-center ">
        <h1>
          Household Game Cabinet
        </h1>
      </div>
      <div id="Add Game Button"
           class="col-md-2 p-0"
      >
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#searchGameModal" title="Add Game to Cabinet">
          <i class="fas fa-plus fa-xl"></i>
        </button>
      </div>
    </div>
    <div class="row m-0 w-100 bg-white rowHeight">
      <div v-for="game in games" :key="game.gameApiId">
        <!-- TODO style game cabinet item? Of we want it to be more than a name. Find out who is doing this -->
        <GameCabinetItem :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gamesService } from '../services/GamesService'
import GameCabinetItem from '../components/GameCabinetItem.vue'

export default {
  name: 'GameCabinetCard',
  // props: {
  //   games: {
  //     type: Array,
  //     required: true
  //   }
  // },
  components: {
    GameCabinetItem
  },
  setup() {
    return {
      profile: computed(() => AppState.activeProfile),
      games: computed(() => AppState.games)
    }
  }
}
</script>
<style>
  .card-img-top {
    height: 20vw;
  }
  .rowHeight{
  min-height: 40vh;
}
</style>
