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
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="reset">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <form @submit.prevent="addPlayer">
            <h5>What Game Did You Play?</h5>
            <select v-model="state.player.gameApiId" class="w-100 mb-2" required>
              <option value="">
                --Select Game--
              </option>
              <option v-for="g in games" :key="g.gameApiId" :value="g.gameApiId">
                {{ g.name }}
              </option>
            </select>
            <h5>Who Played?</h5>
            <select v-model="state.player.profileId" class="w-100" required>
              <option value="">
                --Select Player--
              </option>
              <option v-for="p in householdProfiles" :key="p.id" :value="p.profile.id">
                {{ p.profile.name }}
              </option>
            </select>
            <button type="submit" class="btn btn-block btn-primary my-2">
              <b>Add Player</b>
            </button>
          </form>
          <h5>Who Won?</h5>
          <div v-if="state.results">
            <div v-for="r in state.results" :key="r.profileId">
              <PlayerResultsCard :player="r" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    @click="reset"
            >
              Close
            </button>
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
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
      player: {
        householdId: props.household
      },
      results: []
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
      async addPlayer() {
        state.results.push(state.player)
        console.log(state.results)
        state.player = {
          householdId: props.household,
          win: false
        }
      },
      reset() {
        state.player = {
          householdId: props.household,
          win: false
        }
        state.results = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
