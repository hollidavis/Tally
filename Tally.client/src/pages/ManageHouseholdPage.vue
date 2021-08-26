<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-12">
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 p-0">
        <div class="row m-0 w-100 bg-dark-pink py-3">
          <div class="col-md-10 p-0 text-center ">
            <h1>
              Household Game Cabinet
            </h1>
          </div>
          <div id="Add Game Button"
               class="col-md-2 p-0"
          >
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#searchGameModal" title="Add Game to Cabinet">
              <i class="fas fa-plus fa-xl"></i>
            </button>
          </div>
        </div>
        <div class="row m-0 w-100 bg-white rowHeight">
          <!-- <div v-for="game in games" :key="game.gameApiId"></div> -->
          <!-- TODO add run the for loop for profiles in the household, make/add profile card  -->
        </div>
      </div>
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
