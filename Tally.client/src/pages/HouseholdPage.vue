<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row d-flex justify-content-around m-0 my-5 w-100">
      <div id="dropdownGuy" class="col-md-3 p-0 my-3 d-flex justify-content-center" title="select Household">
        <div class="dropdown">
          <button class="btn btn-lg btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
          >
            <b>Select Household</b>
          </button>
          <!-- TODO write a v-for for each household the profile is associated with -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-for="household in households" :key="household.householdId">
            <ProfileHouseHoldsCard :household="household" />
          </div>
        </div>
      </div>
      <div class="col-md-3 my-3 p-0 d-flex justify-content-center">
        <button type="button"
                class="btn btn-light btn-lg"
                data-toggle="modal"
                title="joinHouseHold"
                data-target="#joinHouseHoldModal"
        >
          <i class="fas fa-plus text-secondary"></i> <b>Join Household</b>
        </button>
      </div>
      <div class="col-md-3 my-3 p-0 d-flex justify-content-center">
        <button type="button" class="btn btn-light btn-lg" data-toggle="modal" data-target="#createGameNightModal" title="createGameNight">
          <i class="fas fa-plus text-secondary"></i>
          <b> New Game Night</b>
        </button>
      </div>
    </div>
    <div id="gamenights" class="row m-0 my-3  w-100 d-flex justify-content-center">
      <div class="col-md-9 p-0 text-left bg-white gameNightHeight">
        <h2 class="text-center">
          Upcoming Game Nights
        </h2>
        <div class="row m-0 w-100">
          <GameNightCard v-for="g in gamenights" :key="g.id" :gamenight="g" />
        </div>
      </div>
    </div>
    <div class="row m-0 my-3 w-100 d-flex justify-content-around mt-4">
      <div class="col-md-5 p-0 my-5">
        <div class="row m-0 w-100 bg-dark-pink py-3">
          <div class="col-md-12 p-0 text-center ">
            <h1>Leaderboard</h1>
          </div>
        </div>
        <div class="row m-0 w-100 bg-white rowHeight">
          <!-- <GameDetailsCard /> -->
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
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gamesService } from '../services/GamesService'
import { useRoute } from 'vue-router'
import { gameNightsService } from '../services/GameNightsService'

export default {
  name: 'Household',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        const id = route.params.id
        await gamesService.getGamesByHouseholdId(id)
        await gameNightsService.getGameNightByHouseholdId(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      games: computed(() => AppState.games),
      gamenights: computed(() => AppState.gameNights)
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
</style>
