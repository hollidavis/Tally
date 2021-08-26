<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-12">
        <button type="button" class="btn btn-block btn-light shadow my-2" data-toggle="modal" data-target="#resultsModal">
          <b><p class="m-0">Score Game</p></b>
        </button>
      </div>
      <div class="col-md-12">
        <h2 class="text-center bg-dark-pink rounded shadow m-0 py-2">
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
  <ResultsModal />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gameNightsService } from '../services/GameNightsService'
import { useRoute } from 'vue-router'
export default {
  name: 'GameNight',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      AppState.activeGameNightProfiles = []
      await gameNightsService.getGameNightById(route.params.id)
    })
    return {
      route,
      activeGameNight: computed(() => AppState.activeGameNight),
      activeGameNightProfiles: computed(() => AppState.activeGameNightProfiles)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
