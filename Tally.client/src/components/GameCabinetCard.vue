<template>
  <div class="col-md-12 p-0">
    <div class="row m-0 w-100 bg-dark-pink py-3">
      <div class="col-md-12 p-0 text-center ">
        <h1 class="pink-text-shadow">
          Household Game Cabinet
        </h1>
      </div>
    </div>
    <div class="row m-0 w-100 bg-white rowHeight px-2">
      <div v-for="game in games" :key="game.gameApiId" class="col-md-12 p-0 border-bottom border-grey">
        <GameCabinetItem :game="game" v-if="game" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import GameCabinetItem from '../components/GameCabinetItem.vue'

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
  .rowHeight{
  min-height: 40vh;
  max-height: 40vh;
  overflow-y: auto;
}
h1 {
  font-size: 32px;
}
</style>
