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
          <div class="col-md-12 d-flex justify-content-center">
            <h2>
              Access Code
            </h2>
          </div>
          <div class="col-12">
            <div class="row d-flex justify-content-center">
              <div class="col-md-8 bg-light rounded p-0 pt-2 text-center ">
                <h3>Access Code Here</h3>
              </div>
            </div>
          </div>
          <div class="col-md-10 p-0 text-center mt-2">
            <button class="btn btn-primary">
              <p class="m-0 p-0">
                Respin Access Code
                <i class="fas fa-redo-alt hoverSpin text-light"></i>
              </p>
            </button>
          </div>
        </div>
        <div class="row m-0 p-0">
          <div class="col-md-12 m-0 p-0"
               v-for="m in members"
               :key="m.id"
          >
            <HouseholdMembersCard :member="m" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row m-0 w-100">
          <div class="col-md-12">
            <button class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#searchGameModal" title="Add Game to Cabinet">
              <p class="m-0 p-0">
                <i class="fas fa-plus fa-md"></i>
                Add Game
              </p>
            </button>
          </div>
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
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
// import { profilesService } from '../services/ProfilesService'
import { householdProfilesService } from '../services/HouseholdProfilesService'
export default {
  name: 'ManageHouseholdPage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        const id = route.params.id
        await householdsService.getHouseholdById(id)
        await gamesService.getGamesById(id)
        await householdProfilesService.getProfilesByHouseholdId(id)
      } catch (error) {

      }
      try {
        await gamesService.getGamesByHouseholdId(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      myHousehold: computed(() => AppState.myHousehold),
      profile: computed(() => AppState.activeProfile),
      games: computed(() => AppState.games),
      members: computed(() => AppState.householdProfiles),
      async getGamesById() {
        await gamesService.getGamesByHouseholdId(route.params.id)
      }
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
