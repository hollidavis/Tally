<template>
  <div class="col-11 shadow bg-primary">
    <h1 class=" text-center">
      Game Cabinet
    </h1>
    <div class="bg-light">
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService'
export default {
  name: 'ProfileCard',
  setup() {
    const route = useRoute()
    // onMounted(async() => {
    //   try {
    //     await gamesService.getGamesById(route.params.id)
    //   } catch (error) {
    //     Pop.toast(error)
    //   }
    // })
    return {
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>
<style>
  .card-img-top {
    height: 20vw;
  }
</style>
