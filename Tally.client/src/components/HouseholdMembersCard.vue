<template>
  <div class="row m-0 w-100 bg-dark-pink d-flex justify-content-center py-3">
    <div class="col-md-10 p-0 text-center pink-text-shadow">
      <h2>
        Members
      </h2>
    </div>
  </div>
  <div class="row m-0 w-100 bg-white rowHeight mb-3">
    <div v-for="m in members" :key="m.id">
      <HouseholdMemberItem :member="m" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import HouseholdMemberItem from '../components/HouseholdMemberItem.vue'

import { AppState } from '../AppState'
export default {
  name: 'HouseholdMembersCard',
  // props: {
  //   members: {
  //     type: Object,
  //     required: true
  //   }
  // },
  components: {
    HouseholdMemberItem
  },
  setup() {
    return {
      members: computed(() => AppState.householdProfiles)
    }
  }
}
</script>

<style>

</style>
