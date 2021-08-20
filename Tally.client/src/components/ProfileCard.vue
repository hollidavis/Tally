<template>
  <div class="col-11">
    <div class="card shadow">
  <img class="card-img-top" :src="profile.coverImg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{profile.name}}</h5><img class="rounded-pill" :src="profile.picture" alt="">
     <button class="btn btn-large btn-primary" data-toggle="modal" data-target="#edit-profile" title="Edit Profile">
        <i class="">Edit your Profile</i>
      </button>
  </div>
</div>
  </div>

</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute} from 'vue-router'
import { profilesService} from '../services/ProfilesService'
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
  .card-img-top {
    height: 20vw;
  }
</style>