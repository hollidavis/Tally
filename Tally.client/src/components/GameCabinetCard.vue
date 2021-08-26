<template>
  <div class="col-md-12 p-0">
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
    <div class="row m-0 w-100 bg-white rowHeight d-flex align-items-center">
      <div v-for="game in games" :key="game.name" class="col-md-12 p-0">
        <GameCabinetItem :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gamesService } from '../services/GamesService'
import GameCabinetItem from '../components/GameCabinetItem.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'GameCabinetCard',
  props: {
    games: {
      type: Object,
      required: true
    }
  },
  components: {
    GameCabinetItem
  },
  setup() {
    const route = useRoute()

    // onMounted(async() => {
    //   try {
    //     await gamesService.getGamesByHouseholdId(route.params.id)
    //   } catch (error) {
    //     Pop.toast(error, 'error')
    //   }
    // })

    return {
      // async getGamesById() {
      //   await gamesService.getGamesByHouseholdId(route.params.id)
      // },
      profile: computed(() => AppState.activeProfile)
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
h1 {
  font-size: 32px;
}
</style>
