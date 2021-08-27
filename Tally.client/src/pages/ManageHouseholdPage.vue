<template>
  <div class="container-fluid">
    <Navbar />
    <div id="houseHold-name" class="row my-3 d-flex justify-content-center">
      <div class="col-md-10 p-0">
        <div class="row m-0 w-100 bg-dark-pink d-flex rounded justify-content-center py-3">
          <div class="col-md-8 p-0 text-center pink-text-shadow">
            <h1>
              {{ household.name }}
              <!-- TODO add a modal onclick to icon to rename household, @submit triggers "updateHouseholdName" function -->
              <i class="fas fa-edit fa-xs text-primary ml-md-5" title="Rename Household"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div id="members and access code" class="row m-0 d-flex justify-content-between">
      <div class="col-md-6">
        <div class="row m-0 w-100 bg-dark-pink rounded d-flex justify-content-center mb-3 py-3">
          <div class="col-md-12 d-flex justify-content-center pink-text-shadow">
            <h2>
              Access Code
            </h2>
          </div>
          <div class="col-12">
            <div class="row d-flex justify-content-center">
              <div class="col-md-8 bg-light rounded p-0 pt-2 text-center ">
                <h3> {{ household.accessKey }}</h3>
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
          <div class="col-md-12 m-0 p-0">
            <HouseholdMembersCard :m="members" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row m-0 w-100">
          <div class="col-md-12">
            <button class="btn btn-light btn-lg btn-block" data-toggle="modal" data-target="#searchGameModal" title="Add Game to Cabinet">
              <p class="m-0 p-0">
                <i class="fas fa-plus fa-md text-primary"></i>
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

// TODO add remove game button only visible from Management page
// TODO add code respinner
// TODO add a list of HH members
// TODO add way to remove HH members
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
      const id = route.params.id
      try {
        await householdsService.getHouseholdById(id)
        await householdProfilesService.getProfilesByHouseholdId(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
      try {
        await householdProfilesService.getProfilesByHouseholdId(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
      try {
        await gamesService.getGamesByHouseholdId(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      household: computed(() => AppState.activeHousehold),
      profile: computed(() => AppState.activeProfile),
      games: computed(() => AppState.games),
      members: computed(() => AppState.householdProfiles)
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
