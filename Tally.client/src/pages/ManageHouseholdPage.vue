<template>
  <div class="container-fluid">
    <Navbar />
    <div id="houseHold-name" class="row my-3">
      <div class="col-md-12 p-0">
        <div class="row m-0 w-100 bg-dark-pink d-flex justify-content-center py-3">
          <div class="col-md-8 p-0 text-center bg-light rounded">
            <h1>
              Household Name Here
              <!-- TODO add a modal onclick to icon to rename household, @submit triggers "updateHouseholdName" function -->
              <i class="fas fa-edit fa-xs text-primary ml-md-5" title="Rename Household"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div id="game-cabinet" class="row m-0 d-flex justify-content-between">
      <div class="col-md-6">
        <div class="row m-0 w-100 bg-dark-pink d-flex justify-content-center mb-3 py-3">
          <h2>
            Members
          </h2>
          <div class="col-md-10 bg-light rounded p-0 text-center ">
            <h3>Access Code Here</h3><i class="fas fa-redo-alt hoverSpin text-primary"></i>
          </div>
        </div>
        <div class="row m-0 w-100 bg-dark-pink d-flex justify-content-center py-3">
          <div class="col-md-10 p-0 text-center ">
            <h2>
              Members
            </h2>
          </div>
        </div>
        <div class="row m-0 w-100 bg-white rowHeight">
          <!-- <div v-for="game in games" :key="game.gameApiId">
          TODO style a profile card component/get one, v-for over for members in the household
         </div> -->
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12"></div>
        </div>
        <div class="row">
          <div class="col-md-12 mt-3">
            <GameCabinetCard :games="games" />
          </div>
        </div>
      </div>
    </div>
    <SearchGameModal />
  </div>
</template>
// TODO move add game button from card to household game cabinet
// TODO add remove game button only visible from Management page
// TODO add code respinner
// TODO add a list of HH members
// TODO add way to remove HH members
// TODO display HH name
// TODO edit HH name

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { householdsService } from '../services/HouseholdsService'
import { gamesService } from '../services/GamesService'
import { useRoute } from 'vue-router'
export default {
  name: 'ManageHouseholdPage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        const id = route.params.id
        await householdsService.getHouseholdById(id)
        await gamesService.getGamesById(id)
      } catch (error) {

      }
    })
    return {
      account: computed(() => AppState.account),
      myHousehold: computed(() => AppState.myHousehold)
    }
  }
}
</script>

<style lang="scss" scoped>
  .rowHeight{
  min-height: 40vh;
}
.hoverSpin:hover {
  cursor: default;
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out 0s;
}
</style>
