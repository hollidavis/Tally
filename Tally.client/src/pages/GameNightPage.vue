<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-12">
        <div class="bg-dark-pink rounded shadow text-center py-2 mb-3" v-if="activeGameNight.id">
          <h1 class="m-0 pink-text-shadow">
            {{ activeGameNight.name }}
          </h1>
          <p class="m-0 lead pink-text-shadow">
            Start Date:
            {{ new Intl.DateTimeFormat('en-US').format(new Date(activeGameNight.startDate)) }}
          </p>
          <div class="row justify-content-around">
            <div class="col-md-5 m-2">
              <button type="button" class="btn btn-light btn-block" data-toggle="modal" data-target="#resultsModal">
                <b><p class="m-0"><span class="far fa-star"></span> Score Game <span class="far fa-star"></span></p></b>
              </button>
            </div>
            <div class="col-md-5 m-2">
              <button type="button" class="btn btn-light btn-block">
                <!-- TODO Finish end game night function -->
                <b><p class="m-0">End Game Night</p></b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <h2 class="text-center bg-dark-pink rounded shadow m-0 py-2 pink-text-shadow">
          Players
        </h2>
        <div>
          <div class="d-flex flex-column align-items-center" v-for="p in activeGameNightProfiles" :key="p.id">
            <PlayerCard :player="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <ResultsModal :household="gameNightHouseholdId" />
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gameNightsService } from '../services/GameNightsService'
import { useRoute } from 'vue-router'
import Pop from '../utils/Notifier'
export default {
  name: 'GameNight',
  setup() {
    const route = useRoute()
    const state = reactive({
    })
    onMounted(async() => {
      try {
        AppState.activeGameNightProfiles = []
        await gameNightsService.getGameNightById(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      route,
      state,
      activeGameNight: computed(() => AppState.activeGameNight),
      activeGameNightProfiles: computed(() => AppState.activeGameNightProfiles),
      gameNightHouseholdId: computed(() => AppState.gameNightHouseholdId)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
