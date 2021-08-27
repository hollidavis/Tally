<template>
  <!-- Modal -->
  <div class="modal fade"
       id="createGameNightModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-lg " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Give us the details of your game night
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createGameNight" class=" ">
            <div class="form-group w-75 mr-auto m-0 my-4">
              <input type="text"
                     name="name"
                     v-model="state.newGameNight.name"
                     class="form-control"
                     placeholder="Name your Game Night..."
                     aria-describedby="gameNightHelpId"
              >
            </div>
            <div class="form-group w-75 mr-auto m-0 my-4">
              <label for="startDate" class="m-0">Pick a date for your Game Night</label>
              <input type="date"
                     name="startDate"
                     v-model="state.newGameNight.startDate"
                     class="form-control m-0"
                     aria-describedby="gameNightHelpId"
              >
              <small id="gameNightHelpId" class="text-dark"><em>Is it really a game night if the sun is still up?</em></small>
            </div>
            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Notifier'
import { reactive } from '@vue/reactivity'
import { gameNightsService } from '../services/GameNightsService'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newGameNight: {
        householdId: route.params.id
      }
    })
    return {
      state,
      async createGameNight() {
        try {
          await gameNightsService.createGameNight(state.newGameNight)
          state.newGameNight = {
            householdId: route.params.id
          }
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
