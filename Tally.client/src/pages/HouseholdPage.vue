<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row d-flex justify-content-around m-0 my-5 w-100">
      <div id="dropdownGuy" class="col-md-3 p-0  d-flex justify-content-center" title="select Household">
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
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-0 d-flex justify-content-center">
        <button type="button" class="btn btn-light btn-lg" title="Join Household">
          <i class="fas fa-plus text-secondary"></i> <b>Join Household</b>
        </button>
      </div>
      <div class="col-md-3 p-0 d-flex justify-content-center">
        <button type="button" class="btn btn-light btn-lg" title="New Game Night">
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
          <!-- TODO make GameNightCard -->
          <!-- <GamenightCard v-for="g in gamenights" :key="g.id" :gamenight="g" /> -->
        </div>
      </div>
    </div>
    <div class="row m-0 my-3 w-100 d-flex justify-content-around mt-4">
      <GameCabinetCard :games="games" />
      <div class="col-md-5 p-0 ">
        <div class="row m-0 w-100 bg-dark-pink py-3">
          <div class="col-md-12 p-0 text-center ">
            <h1>Leaderboard</h1>
          </div>
        </div>
        <div class="row m-0 w-100 bg-white rowHeight">
          <!-- <GameDetailsCard /> -->
        </div>
      </div>
    </div>
    <SearchGameModal />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gamesService } from '../services/GamesService'
import { useRoute } from 'vue-router'

export default {
  name: 'Household',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        const id = route.params.id
        await gamesService.getGamesById(id)
      } catch (error) {

      }
    })
    return {
      games: computed(() => AppState.games)
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
