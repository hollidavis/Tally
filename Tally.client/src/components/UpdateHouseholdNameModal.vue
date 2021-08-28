<template>
  <div class="modal fade"
       id="update-householdName"
       tabindex="-1"
       role="dialog"
       aria-labelledby="update-householdName"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Update Household Name
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateHouseholdName">
            <div class="form-group">
              <label class="pr-2" for="name">Name</label>
              <input type="text"
                     id="name"
                     class="form-control"
                     placeholder="Name..."
                     maxlength="35"
                     v-model="state.updatedHousehold.name"
              >
            </div>
            <div class="modal-footer">
              <button v-if="state.updatedHousehold" type="submit" class="btn btn-success mr-3">
                Save
              </button>
              <button type="button" class="btn btn-danger closeModal" data-dismiss="modal" @click="closeModal">
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
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import Pop from '../utils/Notifier'
import $ from 'jquery'
import { householdsService } from '../services/HouseholdsService'

export default {
  setup() {
    const state = reactive({
      dropOpen: false,
      updatedHousehold: {}
    })
    return {
      state,
      household: computed(() => AppState.activeHousehold),
      closeModal() {
        state.updatedHousehold = {}
      },
      async updateHouseholdName() {
        try {
          await householdsService.updateHouseholdName(state.updatedHousehold, this.household.id)
          state.updatedHousehold = { }
          $('#update-householdName').modal('hide')
          Pop.toast('Updated Household Name!', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
.large-name{
  font-size: 30px;
  font-weight: 600;
}
.selectable{
  cursor: pointer;
}

</style>
