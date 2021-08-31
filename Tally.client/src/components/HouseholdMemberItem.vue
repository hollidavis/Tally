<template>
  <div class="d-flex align-items-center bg-white rounded shadow my-2 py-2">
    <div class="p-0 d-flex px-3">
      <img class="profile-img" :src="member.profile.picture" :alt="member.profile.name">
    </div>
    <h5 class="m-0 w-50 mr-auto text-break">
      {{ member.profile.name }}
    </h5>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      household: computed(() => AppState.activeHousehold)
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-img{
  border-radius: 50%;
  height: 13vh;
  width: 13vh;
  object-fit: cover;
  object-position: center;
}
</style>
