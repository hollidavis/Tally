<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row d-flex justify-content-around m-0 my-5 w-100">
      <div class="dropdown">
        <button class="btn btn-light btn-lg dropbtn">
          Select Household
        </button>
        <div id="myDropdown" class="dropdown-content">
          <ProfileHouseHoldsCard v-for="h in households" :key="h.id" :household="h" />
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
        <div class="row m-0 w-100 bg-dark-pink py-3 d-flex justify-content-around">
          <div class="col-md-12 p-0 text-center ">
            <h1>Leaderboard</h1>
          </div>
          <div class="col-md-12 p-0 d-flex align-items-center justify-content-center flex-column">
            <select name="" id="">
              <option value="">
                Select Game
              </option>
              <option v-for="g in games" :key="g.gameApiId" :value="g.gameApiId">
                {{ g.name }}
              </option>
            </select>
            <button class="btn btn-light">
              Find
            </button>
          </div>
        </div>
        <div class="row m-0 w-100 bg-white rowHeight">
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
import { householdProfilesService } from '../services/HouseholdProfilesService'

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
      try {
        await householdProfilesService.getHouseholdsByProfileId(AppState.account.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      games: computed(() => AppState.games),
      gamenights: computed(() => AppState.gameNights),
      households: computed(() => AppState.profileHouseholds)
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
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
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

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>
