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
            <select v-model="state.result.gameApiId" placeholder="Select Game">
              <option v-for="g in games" :key="g.gameApiId" :value="g.gameApiId">
                {{ g.name }}
              </option>
            </select>
            <div class="dropdown w-100 mb-2">
              <button class="btn w-100 dropdown-toggle border-dark"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
              >
                Choose Your Game
              </button>
              <!-- TODO This will need to populate the games from the household -->
              <div class="dropdown-menu bg-light" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <h5>Who Played?</h5>
            <div class="dropdown w-100 mb-2">
              <button class="btn w-100 dropdown-toggle border-dark"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
              >
                Who Played?
              </button>
              <!-- TODO This will need to populate the Profiles from the household -->
              <div class="dropdown-menu bg-light" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item">Action</a>
                <a class="dropdown-item">Another action</a>
                <a class="dropdown-item">Something else here</a>
              </div>
            </div>
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
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { resultsService } from '../services/ResultsService'
export default {
  props: {
    householdId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      result: {
        householdId: props.householdId,
        players: []
      }
    })
    return {
      state,
      games: computed(() => AppState.games),
      async createResult() {
        await resultsService.createResult(state.result)
        state.result = { householdId: props.householdId }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
