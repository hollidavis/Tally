<template>
  <!-- Modal -->
  <div class="modal fade"
       id="joinHouseHoldModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-lg " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Input Household Code
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="joinHousehold" class=" ">
            <div class="form-group w-75 mr-auto m-0 my-4">
              <input type="text"
                     name="accessKey"
                     v-model="state.newHouseHoldProfile.accessKey"
                     class="form-control"
                     placeholder="Put in your access code..."
                     aria-describedby="joinHouseholdhelpId"
              >
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
import { AppState } from '../AppState'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import { logger } from '../utils/Logger'

export default {
  setup() {
    const state = reactive({
      newHouseHoldProfile: {
        accessKey: ''
      }
    })
    return {
      state,
      async joinHousehold() {
        try {
          await householdProfilesService.joinHousehold(state.newHouseHoldProfile, AppState.account.id)
        } catch (error) {
          Pop.toast(error)
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
