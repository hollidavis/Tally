<template>
  <div class="modal fade"
       id="update-account"
       tabindex="-1"
       role="dialog"
       aria-labelledby="update-account"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Update Account
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateAccount">
            <div class="form-group">
              <label class="pr-2" for="name">Name</label>
              <input type="text"
                     id="name"
                     class="form-control"
                     placeholder="Name..."
                     maxlength="30"
                     v-model="state.updatedAccount.name"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="email">Email</label>
              <input type="text"
                     id="email"
                     class="form-control"
                     placeholder="Email..."
                     maxlength="50"
                     v-model="state.updatedAccount.email"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="picture">Profile Picture</label>
              <input type="text"
                     id="picture"
                     class="form-control"
                     placeholder="Add link to profile picture..."
                     maxlength="200"
                     v-model="state.updatedAccount.picture"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="coverImg">Cover Image</label>
              <input type="text"
                     id="coverImg"
                     class="form-control"
                     placeholder="Add link for your cover image..."
                     maxlength="200"
                     v-model="state.updatedAccount.coverImg"
              >
            </div>
            <div>
              <button v-if="state.updatedAccount" type="submit" class="btn btn-primary mr-3">
                Save
              </button>
              <button type="button" class="btn btn-secondary closeModal" data-dismiss="modal" @click="closeModal">
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
import { accountService } from '../services/AccountService'

export default {
  setup() {
    const state = reactive({
      dropOpen: false,
      updatedAccount: {}
    })
    return {
      state,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      closeModal() {
        state.updatedAccount = {}
      },
      async updateAccount() {
        try {
          await accountService.updateAccount(state.updatedAccount, this.account.id)
          state.updatedAccount = {}
          $('#update-account').modal('hide')
          Pop.toast('Updated Account!', 'success')
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
