<template>
  <div class="col-11 p-0 bg-white">
    <div class=" profile-card">
      <img class="w-100 cover-img" :src="profile.coverImg" alt="Card image cap">
    </div>
    
      <div class="profile-card d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img class="profile-pic mx-3" :src="profile.picture" alt="">
            <h5 class="text-center text-break text-wrap">
              {{ profile.name }}
            </h5>
          </div>
          <div class="d-flex align-items-end mx-3">
            <button class="btn btn-large btn-primary" data-toggle="modal" data-target="#update-account" title="Edit Account">
              <i class="fas fa-edit fa"></i>
            </button>
          </div>
      </div>
    </div>
  <UpdateAccountModal/>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService'
export default {
  name: 'ProfileCard',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        AppState.activeProfile = await profilesService.getProfileById(route.params.id)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>
<style>
.profile-pic{
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 60%;
    object-position: center;
  }
.cover-img{
  height: 20vh;
  object-fit: cover;
  object-position: center;
}
.profile-card{
  height: 20vh;
}
</style>
