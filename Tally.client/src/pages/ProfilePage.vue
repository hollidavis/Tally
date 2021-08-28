<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-6 my-2">
        <div class="row justify-content-center">
          <ProfileCard />
          <div class="col-11 p-0">
            <PersonalLeaderboardCard />
          </div>
        </div>
      </div>
      <div class="col-md-6 my-2">
        <div class="row justify-content-center">
          <div class="col-11 p-0">
            <GameCabinetCard :games="games" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Notifier'
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { householdsService } from '../services/HouseholdsService'
import { resultsService } from '../services/ResultsService'
import { gamesService } from '../services/GamesService'
import { useRoute } from 'vue-router'
import $ from 'jquery'
import { AuthService } from '../services/AuthService'

export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        const id = route.params.id
        await householdsService.getMyHouseholdById(id)
        await resultsService.getResultsByProfileId(id)
        await gamesService.getGamesByHouseholdId(AppState.account.householdId)
      } catch (error) {

      }
    })
    return {
      account: computed(() => AppState.account),
      myHousehold: computed(() => AppState.myHousehold),
      games: computed(()=> AppState.games)
    }
  }
}
</script>

<style>
</style>
