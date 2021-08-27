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
          <form @submit.prevent="createGameNight">
            <div class="form-group w-100">
              <label for="name"><b>Name</b></label>
              <input type="text"
                     name="name"
                     id="name"
                     v-model="state.newGameNight.name"
                     class="form-control"
                     placeholder="Name your Game Night..."
                     aria-describedby="nameHelpText"
                     required
              >
              <small id="nameHelpText" class="text-muted">Input Game Night Name</small>
            </div>
            <div class="form-group w-100">
              <label for="startDate"><b>Start Date</b></label>
              <input type="date"
                     name="startDate"
                     id="startDate"
                     v-model="state.newGameNight.startDate"
                     class="form-control"
                     aria-describedby="startDateHelpText"
                     required
              >
              <small id="startDateHelpText" class="text-muted">Input Game Night Start Date</small>
            </div>
            <div class="modal-footer p-0 pt-3">
              <button type="submit" class="btn btn-success">
                Submit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </form>
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
import $ from 'jquery'
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
          $('#createGameNightModal').modal('hide')
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
