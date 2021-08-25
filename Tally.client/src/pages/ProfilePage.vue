<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <div class="col-md-6">
        <ProfileCard />
      </div>
      <div class="col-md-6">
        <div class="row">
          <GameCabinetCard />
          <PersonalLeaderboardCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Notifier'
import {computed, onMounted, reactive} from '@vue/runtime-core'
import {AppState} from '../AppState'
import {householdsService} from '../services/HouseholdsService'
import {useRoute} from 'vue-router'
import $ from 'jquery'
import {AuthService} from '../services/AuthService'

export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    onMounted(async()=>{
      try {
        const id = route.params.id
        await householdsService.getHouseholdById(id)
      } catch (error) {
        
      }
    })
    return {
      account: computed(() => AppState.account),
      myHousehold: computed(()=> AppState.myHousehold)
    }
  }
}
</script>

<style>
img {
  max-width: 100px;
}
</style>
