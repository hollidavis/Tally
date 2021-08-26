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
                     maxlength= "30"
                     v-model="state.updatedAccount.name"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="email">Email</label>
              <input type="text"
                     id="email"
                     class="form-control"
                     placeholder="Email..."
                     maxlength= "50"
                     v-model="state.updatedAccount.email"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="picture">Profile Picture</label>
              <input type="text"
                     id="picture"
                     class="form-control"
                     placeholder="Add link to profile picture..."
                     maxlength= "200"
                     v-model="state.updatedAccount.picture"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="coverImg">Cover Image</label>
              <input type="text"
                     id="coverImg"
                     class="form-control"
                     placeholder="Add link for your cover image..."
                     maxlength= "200"
                     v-model="state.updatedAccount.coverImg"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="bio">Bio</label>
              <textarea
                    rows="5" 
                    cols="30"
                     id="bio"
                     class="form-control"
                     placeholder="Bio..."
                     maxlength= "1000"
                     v-model="state.updatedAccount.bio"
              />
            </div>
             <div class="form-group">
              <label class="pr-2" for="github">GitHub</label>
              <input type="text"
                     id="github"
                     class="form-control"
                     placeholder="GitHub..."
                     maxlength= "25"
                     v-model="state.updatedAccount.github"
              >
            </div>
             <div class="form-group">
              <label class="pr-2" for="linkedin">LinkedIn</label>
              <input type="text"
                     id="linkedin"
                     class="form-control"
                     placeholder="LinkedIn..."
                     maxlength= "25"
                     v-model="state.updatedAccount.linkedin"
              >
            </div>
             <div class="form-group">
              <label class="pr-2" for="resume">Resume</label>
              <textarea
                    rows="5" 
                    cols="30"
                     id="resume"
                     class="form-control"
                     placeholder="Resume..."
                     maxlength= "5000"
                     v-model="state.updatedAccount.resume"
              />
            </div>
             <div class="form-group">
              <label class="pr-2" for="class">Class</label>
              <input type="text"
                     id="class"
                     class="form-control"
                     placeholder="Class..."
                     maxlength= "25"
                     v-model="state.updatedAccount.class"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="class">Graduated?</label>
              <select name="Graduated" 
                     id="graduated" 
                     class="form-control"
                     placeholder="Graduated?"
                     v-model="state.updatedAccount.graduated">
                <option value="true">True</option>
                <option value="false">False </option>
              </select>
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
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import Pop from '../utils/Notifier'
import $ from 'jquery'
import {usersService} from '../services/UsersService'

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
      closeModal(){
         state.updatedAccount = {}
      },
      async updateAccount(){
        try {
          await usersService.updateAccount(state.updatedAccount)
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