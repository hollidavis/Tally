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
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>
img {
  max-width: 100px;
}
</style>
