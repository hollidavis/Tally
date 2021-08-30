<template>
  <div class="container-fluid home flex-grow-1 desktopBack d-flex flex-column justify-content-center align-items-center flex-column">
    <div class="row m-0 justify-content-center align-items-center">
      <div class="col-11 col-md-6 p-0 modalGradient">
        <div class="row m-0 d-flex justify-content-center">
          <div class="col-md-12 p-0">
            <img class="tally-logo" src="../assets/img/tally-logo.png" alt="Tally Logo">
          </div>
          <div class="col-md-12 px-5 text-wrap text-break">
            <h3>Login to start tracking your wins!</h3>
          </div>
          <!-- NOTE Login for Account -->
          <div class="col-md-12 py-5">
            <button v-if="user.name" @click="logout" class="btn btn-danger text-uppercase">
              Logout
            </button>
            <button
              class="btn btn-secondary text-uppercase"
              @click="login"
              v-if="!user.isAuthenticated"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { router } from '../router'
import { accountService } from '../services/AccountService'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        await AuthService.loginWithPopup()
        await accountService.getAccount()
        if (this.account.id) {
          router.push({ name: 'Profile', params: { id: this.account.id } })
        }
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}

.modalGradient {
  border-radius: 10px;
  background: rgb(253, 241, 241);
}
.tally-logo{
  height:30vh;
}
</style>
