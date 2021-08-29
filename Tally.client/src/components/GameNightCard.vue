<template>
  <div class="col-md-12 col-12 d-flex align-items-center bg-white rounded shadow my-2 p-0 py-3">
    <div class="row m-0 w-100">
      <div class="col-md-10 col-10 p-0 px-3">
        <h3 class=" m-0">
          {{ gamenight.name }}
        </h3>
      </div>
      <div class="col-md-2 col-2 p-0">
        <p>
          On:   {{ new Intl.DateTimeFormat('en-US').format(new Date(gamenight.startDate)) }}
        </p>

        <button type="button" class="btn btn-primary" @click="joinGameNight">
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
import Pop from '../utils/Notifier'
import { router } from '../router'
export default {
  props: {
    gamenight: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
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
