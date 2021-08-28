<template>
  <div class="d-flex align-items-center bg-white rounded shadow mt-2 py-3">
    <div class="p-0 d-flex mx-2">
      <img class="profile-img" :src="state.profile.picture" :alt="state.profile.name">
    </div>
    <h5 class="m-0 text-break mr-auto">
      {{ state.profile.name }}
    </h5>
    <form class="mx-3" @submit.prevent="submitResult">
      <input v-model="state.result.win" class="larger" type="checkbox" name="win" :id="'checkbox' + state.profile.id">
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { profilesService } from '../services/ProfilesService'
import { watchEffect } from '@vue/runtime-core'
import { resultsService } from '../services/ResultsService'
export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      profile: {},
      result: {
        householdId: props.player.householdId,
        profileId: props.player.profileId,
        gameApiId: props.player.gameApiId
      }
    })
    watchEffect(async() => {
      if (props.player) {
        state.profile = await profilesService.getProfileById(props.player.profileId)
      }
    })
    return {
      state,
      async submitResult() {
        if (state.result.win === true) {
          await resultsService.createResult(state.result)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-img{
  border-radius: 50%;
  height: 13vh;
  width: 13vh;
  object-fit: cover;
  object-position: center;
}

input.larger {
  width: 15px;
  height: 15px;
}
</style>
