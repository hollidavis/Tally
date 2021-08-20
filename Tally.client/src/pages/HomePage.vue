<template>
  <div class="row m-0 home flex-grow-1 d-flex flex-column justify-content-center align-items-center flex-column  desktopBack">
    <div class="col-md-6 p-0 modalGradient">
      <div class="row m-0 d-flex justify-content-center w-100">
        <div class="col-md-12 p-0 my-5">
          <h1 class=" rounded d-flex justify-content-center">
            <span class="">Welcome To Tally!</span>
          </h1>
        </div>
        <div class="col-md-12 p-5 my-3">
          <h3>Tally exists to provide a space which fosters friendly competition by making hosting & scoring game nights a breeze</h3>
        </div>
        <!-- NOTE Login for Account -->
        <div class="col-md-12 p-0 my-5 d-flex justify-content-around">
          <button @click="logout" class="btn btn-danger">
            logout
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
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
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

.desktopBack {
  background-image: url('../assets/img/DesktopTally.png');
}
.modalGradient {
  border-radius: 10px;
 background: rgb(253, 241, 241);
}
</style>
