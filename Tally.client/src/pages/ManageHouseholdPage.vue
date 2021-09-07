<template>
  <div class="container-fluid overflow">
    <Navbar />
    <div id="houseHold-name" class="row d-flex justify-content-center">
      <div class="col-md-11 d-flex justify-content-center">
        <div class="w-100 py-2 my-2 bg-dark-pink rounded shadow">
          <h1 class="m-0 text-center pink-text-shadow">
            {{ household.name }}
            <span class="fas fa-edit fa-xs text-primary ml-2 pointer" title="Rename Household" data-toggle="modal" data-target="#update-householdName"></span>
          </h1>
        </div>
      </div>
    </div>
    <div id="members and access code" class="row d-flex">
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
            <button class="btn btn-primary" @click="respinAccessKey">
              <p class="m-0 p-0">
                Respin Access Code
                <i id="spinner" class="fas fa-redo-alt hoverSpin text-light"></i>
              </p>
            </button>
          </div>
        </div>
        <div class="col-md-12 p-0 d-flex flex-column align-items-center">
          <HouseholdMembersCard />
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column align-items-center">
        <div class="w-100">
          <button class="btn btn-light btn-lg btn-block mb-3" data-toggle="modal" data-target="#searchGameModal" title="Add Game to Cabinet">
            <p class="m-0 p-0">
              <span class="fas fa-plus fa-md text-primary"></span>
              Add Game
            </p>
          </button>
        </div>
        <GameCabinetCard :games="games" />
      </div>
    </div>
    <SearchGameModal />
    <UpdateHouseholdNameModal />
  </div>
</template>

// TODO add remove game button only visible from Management page
// TODO remove hh members

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { householdsService } from '../services/HouseholdsService'
import { gamesService } from '../services/GamesService'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
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
        await gamesService.getGamesByHouseholdId(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      household: computed(() => AppState.activeHousehold),
      profile: computed(() => AppState.activeProfile),
      games: computed(() => AppState.games),
      members: computed(() => AppState.householdProfiles),
      async respinAccessKey() {
        try {
          await householdsService.respinAccessKey(route.params.id)
          document.getElementById('spinner').classList.add('spinner')
          setTimeout(() => { document.getElementById('spinner').classList.remove('spinner') }, 1000)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.overflow{
  overflow: hidden;
}
.spinner{
  animation-name: rotate;
animation-duration: 1s;
}
@keyframes rotate{
  from {
    transform:rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
