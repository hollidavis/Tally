<template>
  <div class="d-flex align-items-center bg-white rounded shadow my-2 py-2">
    <div class="p-0 d-flex px-3">
      <img class="profile-img" :src="member.profile.picture" :alt="member.profile.name">
    </div>
    <h5 class="m-0 w-50 mr-auto text-break">
      {{ member.profile.name }}
    </h5>
    <span class="fa fa-trash text-danger px-3" v-if="account.id==household.ownerAccountId" @click="deleteMember(account.id)"></span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { householdsService } from '../services/HouseholdsService'
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
      household: computed(() => AppState.activeHousehold),
      async deleteMember(accountId) {
        try {
          await householdsService.deleteMember(props.member.id, accountId)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
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
