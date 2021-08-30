<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row d-flex justify-content-around align-items-center m-0 my-5 w-100">
      <div class="dropdown">
        <button class="btn btn-light btn-lg dropbtn">
          <b>Select Household</b>
        </button>
        <div id="myDropdown" class="dropdown-content">
          <ProfileHouseHoldsCard v-for="h in profileHouseholds" :key="h.id" :household="h" />
        </div>
      </div>
      <div class="my-3 p-0 d-flex justify-content-center" v-if="householdId === account.householdId">
        <button
          type="button"
          class="btn btn-light btn-lg"
          data-toggle="modal"
          data-target="#createGameNightModal"
          title="createGameNight"
        >
          <i class="fas fa-plus text-secondary mr-2"></i>
          <b>New Game Night</b>
        </button>
      </div>
      <div class="my-3 p-0 d-flex justify-content-center">
        <button
          v-if="!profileHouseholds.find(p => p.householdId === route.params.id)" 
          type="button"
          class="btn btn-light btn-lg"
          data-toggle="modal"
          title="joinHouseHold"
          data-target="#joinHouseHoldModal"
        >
          <i class="fas fa-plus text-secondary"></i> <b>Join Household</b>
        </button>
      </div>
    </div>
    <div id="gamenights" class="row m-0 my-3  w-100 d-flex justify-content-center">
      <div class="col-md-9 p-0 text-left bg-white rounded shadow gameNightHeight pb-2">
        <h2 class="text-center py-3">
          Upcoming Game Nights
        </h2>
        <div class="row m-0 w-100 px-3">
          <GameNightCard v-for="g in gamenights" :key="g.id" :gamenight="g" />
        </div>
      </div>
    </div>
    <div class="row m-0 my-3 w-100 d-flex justify-content-around mt-4">
      <div class="col-md-5 p-0 my-5">
        <div class="row m-0 w-100 bg-dark-pink rounded-top shadow py-3 d-flex justify-content-around">
          <div class="col-md-12 p-0 text-center pink-text-shadow">
            <h1 class="m-0">
              Leaderboard
            </h1>
          </div>
          <div class="col-md-12 p-0 d-flex align-items-center justify-content-center">
            <select name="" id="" v-model="state.selectGame.id">
              <option value="">
                Select Game
              </option>
              <option v-for="g in games" :key="g.gameApiId" :value="g.gameApiId">
                {{ g.name }}
              </option>
            </select>
            <button @click="getResults()" class="ml-2 py-0 px-1 btn btn-light" :disabled="state.selectGame.id?false:true">
              Find
            </button>
          </div>
        </div>
        <div class="row m-0 w-100 bg-white rounded-bottom shadow h-75 d-flex flex-column px-3 py-2">
          <div v-if="results.length">
            <div class="d-flex justify-content-between">
              <h4>Player</h4>
              <h4>Wins</h4>
            </div>
          </div>
          <div class="" v-for="r in results" :key="r.id">
            <div class="d-flex justify-content-between">
              <h5 class="text-break mr-5">
                {{ r[0] }}
              </h5>
              <h5>{{ r[1] }}</h5>
            </div>
          </div>
          <div class="text-center" v-if="!results.length">
            <h4>No Results Yet!</h4>
          </div>
        </div>
      </div>

      <div class="col-md-5 p-0 my-5">
        <div class="row m-0">
          <GameCabinetCard :games="games" />
        </div>
      </div>
    </div>
  </div>
  <SearchGameModal />
  <CreateGameNightModal />
  <JoinHouseholdModal />
</template>

<script>
import { computed, watchEffect, reactive } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gamesService } from '../services/GamesService'
import { useRoute } from 'vue-router'
import { gameNightsService } from '../services/GameNightsService'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import { resultsService } from '../services/ResultsService'

export default {
  name: 'Household',
  setup() {
    const route = useRoute()
    const state = reactive({
      selectGame: {}
    })
    watchEffect(async() => {
      try {
        if (route.params.id) {
          const id = route.params.id
          await gamesService.getGamesByHouseholdId(id)
          await gameNightsService.getGameNightByHouseholdId(id)
          AppState.householdId = id
          await householdProfilesService.getHouseholdsByProfileId(AppState.account.id)
        }
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      state,
      route,
      householdId: computed(() => AppState.householdId),
      account: computed(() => AppState.account),
      games: computed(() => AppState.games),
      gamenights: computed(() => AppState.gameNights),
      profileHouseholds: computed(() => AppState.profileHouseholds),
      results: computed(() => AppState.gameResults),
      async getResults() {
        try {
          await resultsService.getResultsByHouseholdId(route.params.id, state.selectGame.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rowHeight{
  min-height: 40vh;
}
.gameNightHeight{
  min-height: 30vh;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}
</style>
