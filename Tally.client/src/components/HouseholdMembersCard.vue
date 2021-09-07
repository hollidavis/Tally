<template>
  <div class="row w-100 bg-dark-pink rounded-top shadow d-flex justify-content-center py-3">
    <div class="text-center pink-text-shadow">
      <h2>
        Members
      </h2>
    </div>
  </div>
  <div class="row w-100 bg-white rounded-bottom shadow members mb-3 d-flex">
    <div class="col-md-12" v-for="m in members" :key="m.id">
      <HouseholdMemberItem :member="m" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

import { AppState } from '../AppState'
export default {
  name: 'HouseholdMembersCard',
  setup() {
    return {
      members: computed(() => AppState.householdProfiles)
    }
  }
}
</script>

<style lang="scss" scoped>
.members{
  height: 35vh;
  overflow: auto;
}
</style>
