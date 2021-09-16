<template>
  <div class="col-md-12 p-0">
    <div class="row m-0 w-100 bg-dark-pink rounded-top shadow py-3">
      <div class="col-md-12 p-0 text-center ">
        <h1 class="pink-text-shadow">
          Household Game Cabinet
        </h1>
      </div>
    </div>
    <div class="row m-0 w-100 bg-white rounded-bottom shadow rowHeight px-2">
      <div v-for="game in games" :key="game.gameApiId" class="col-md-12 p-0 border-bottom border-grey">
        <GameCabinetItem :game="game" v-if="games.length" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  props: {
    games: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>
<style lang="scss" scoped>
  .card-img-top {
    height: 20vw;
  }
  .rowHeight{
  height: 40vh;
  overflow: auto;
}
h1 {
  font-size: 32px;
}
</style>
