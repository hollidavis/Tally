<template>
  <div class="col-md-12 p-0">
    <div class="row m-0 w-100 bg-dark-pink py-3">
      <div class="col-md-12 p-0 text-center ">
        <h1>
          Household Game Cabinet
        </h1>
      </div>
    </div>
    <div class="row m-0 w-100 bg-white rowHeight">
      <div v-for="game in games" :key="game.gameApiId" class="col-md-12 p-0">
        <!-- TODO style game cabinet item? Of we want it to be more than a name. Find out who is doing this -->
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
  max-height: 40vh;
  overflow-y: auto;
}
h1 {
  font-size: 32px;
}
</style>
