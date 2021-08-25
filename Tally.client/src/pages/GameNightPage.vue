<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center bg-dark-pink rounded-top shadow m-0 py-2">
          Players
        </h2>
        <div class="bg-white rounded-bottom shadow m-0 py-2">
          <div v-for="p in activeGameNight.activeProfiles" :key="p">
            <PlayerCard :profile="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
      await gameNightsService.getGameNightsById(route.params.id)
    })
    return {
      route,
      activeGameNight: computed(() => AppState.activeGameNight)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
