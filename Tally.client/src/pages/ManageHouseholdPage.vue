<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-12">
      </div>
    </div>
    <div class="row m-0">
      <GameCabinetCard :games="games" />
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
