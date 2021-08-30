<template>
  <div class="col-md-12 col-12 d-flex align-items-center bg-white rounded shadow my-2 p-0 py-3">
    <div class="row m-0 w-100">
      <div class="col-md-9 col-12 p-0 px-3 d-flex align-items-center">
        <router-link class="text-dark" v-if="gamenight.activeProfiles.find(p => p === account.id)" :to="{ name: 'GameNight', params: {id: gamenight.id} }">
          <h3 class=" m-0">
            {{ gamenight.name }}
          </h3>
        </router-link>
        <h3 v-else class=" m-0">
          {{ gamenight.name }}
        </h3>
      </div>
      <div class="col-md-3 col-12 p-0 d-flex align-items-center justify-content-end">
        <p class="m-0 mr-3">
          On:   {{ new Intl.DateTimeFormat('en-US').format(new Date(gamenight.startDate)) }}
        </p>
        <button v-if="!gamenight.activeProfiles.find(p => p === account.id) && householdUsers.find(u => u.accountId === account.id)" type="button" class="btn btn-primary mr-2" @click="joinGameNight">
          Join
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gameNightsService } from '../services/GameNightsService'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import Pop from '../utils/Notifier'
import { router } from '../router'
import { useRoute } from 'vue-router'
import { watchEffect } from '@vue/runtime-core'
export default {
  props: {
    gamenight: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    watchEffect(async() => {
      try {
        await householdProfilesService.getProfilesByHouseholdId(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }  
    })
    return {
      route,
      householdId: route.params.id,
      householdUsers: computed(()=> AppState.householdProfiles),
      account: computed(() => AppState.account),
      async joinGameNight() {
        try {
          await gameNightsService.joinGameNight(props.gamenight.householdId, props.gamenight.id, AppState.account)
          router.push({ name: 'GameNight', params: { id: props.gamenight.id } })
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
