<template>
  <div class="col-11 p-0 bg-white">
    <div class=" profile-card">
      <img class="w-100 cover-img" :src="profile.coverImg" alt="Card image cap">
    </div>
    
      <div class="profile-card">
        <h5 class="">
          {{ profile.name }}
        </h5>
        <img class="profile-pic" :src="profile.picture" alt="">
        <button class="btn btn-large btn-primary" data-toggle="modal" data-target="#update-account" title="Edit Account">
          <i class="fas fa-edit fa-2x"></i>
        </button>
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
        await profilesService.getProfileById(route.params.id)
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
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 60%;
  }
.cover-img{
  height: 30vh;
  object-fit: cover;
}
.profile-card{
  height: 30vh;
}
</style>
