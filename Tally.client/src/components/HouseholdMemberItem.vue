<template>
  <div class="col-md-11 col-12 d-flex align-items-center bg-white rounded shadow mt-2 py-3">
    <div class="p-0 d-flex mr-3">
      <img class="profile-img" :src="member.picture" :alt="member.name">
    </div>
    <h5 class="m-0 text-break">
      {{ member.name }}
    </h5>
    <i class="fa fa-trash text-danger" v-if="account.id==household.ownerAccountId" @click="deleteMember(account.id)"></i>
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
