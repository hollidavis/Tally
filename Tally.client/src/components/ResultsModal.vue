<template>
  <div class="modal fade"
       id="resultsModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Score Your Game!
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <form @submit.prevent="createResult">
            <h5>What Game Did You Play?</h5>
            <select v-model="state.result.gameApiId" class="w-100">
              <option value="">
                --Select Game--
              </option>
              <option v-for="g in games" :key="g.gameApiId" :value="g.gameApiId">
                {{ g.name }}
              </option>
            </select>
            <h5>Who Played?</h5>
            <select v-model="state.result.profileId" class="w-100">
              <option value="">
                --Select Player--
              </option>
              <option v-for="p in householdProfiles" :key="p.id" :value="p.profile.id">
                {{ p.profile.name }}
              </option>
            </select>
            <h5>Who Won?</h5>
            <div class="row m-0">
              <!-- NOTE This is going to be where we do a v-for over the players in the Household. We just need the data before we can do it.  -->
              <!-- <PlayerCard v-for="p in players" :key="p.id" :player="p" /> -->
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { resultsService } from '../services/ResultsService'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import { gamesService } from '../services/GamesService'
import Pop from '../utils/Notifier'
export default {
  props: {
    household: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      result: {
        householdId: props.household,
        players: []
      }
    })
    watchEffect(async() => {
      try {
        if (props.household) {
          await gamesService.getGamesByHouseholdId(props.household)
          await householdProfilesService.getProfilesByHouseholdId(props.household)
        }
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      state,
      games: computed(() => AppState.games),
      householdProfiles: computed(() => AppState.householdProfiles),
      async createResult() {
        await resultsService.createResult(state.result)
        state.result = { householdId: props.householdId }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
