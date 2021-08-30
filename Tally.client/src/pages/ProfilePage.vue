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
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { householdsService } from '../services/HouseholdsService'
import { profilesService } from '../services/ProfilesService'
import { gamesService } from '../services/GamesService'
import { useRoute } from 'vue-router'

export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await householdsService.getMyHouseholdById(route.params.id)
      AppState.activeProfile = await profilesService.getProfileById(route.params.id)
      await gamesService.getGamesByHouseholdId(AppState.account.householdId)
    })
    onMounted(async() => {
      try {
        const id = route.params.id
        await householdsService.getMyHouseholdById(id)
        AppState.activeProfile = await profilesService.getProfileById(route.params.id)
        await gamesService.getGamesByHouseholdId(AppState.account.householdId)
      } catch (error) {

      }
    })
    return {
      account: computed(() => AppState.account),
      myHousehold: computed(() => AppState.myHousehold),
      games: computed(() => AppState.games),
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style>
</style>
