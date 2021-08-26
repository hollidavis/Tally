<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-12">
        <GameCabinetCard :games="games" />
      </div>
    </div>
  </div>
</template>

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

</style>
