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
            <div class="form-group w-100 m-0 my-3">
              <input type="text"
                     name="accessKey"
                     v-model="state.newHouseHoldProfile.accessKey"
                     class="form-control"
                     placeholder="Enter access key..."
                     aria-describedby="joinHouseholdhelpId"
              >
              <small id="joinHouseholdhelpId" class="text-muted">Input Access Key to Join Household</small>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-success">
                Join
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
import { AppState } from '../AppState'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import { logger } from '../utils/Logger'
import { householdsService } from '../services/HouseholdsService'
import $ from 'jquery'

export default {
  setup() {
    const state = reactive({
      newHouseHoldProfile: {
        householdId: '',
        accessKey: '',
        accountId: ''
      }
    })
    return {
      state,
      async joinHousehold() {
        try {
          const household = await householdsService.getHouseholdByAccessKey(state.newHouseHoldProfile.accessKey)
          state.newHouseHoldProfile.householdId = household.id
          state.newHouseHoldProfile.accountId = AppState.account.id
          await householdProfilesService.joinHousehold(state.newHouseHoldProfile)
          $('#joinHouseHoldModal').modal('hide')
          Pop.toast('You Joined A Household!', 'success')
        } catch (error) {
          Pop.toast(error)
          $('#joinHouseHoldModal').modal('hide')
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
