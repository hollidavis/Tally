<template>
  <div class="col-md-11 col-12 d-flex align-items-center bg-white rounded shadow mt-2 py-3">
    <h3 class="ml-3 mr-auto m-0">
      {{ gamenight.name }}
    </h3>
    <button type="button" class="btn btn-primary" @click="joinGameNight()">
      Join
    </button>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gameNightsService } from '../services/GameNightsService'
import Pop from '../utils/Notifier'
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
          await gameNightsService.joinGameNight(props.gamenight.id, AppState.account)
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
