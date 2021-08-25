<template>
  <div class="col-md-8 col-10 p-0 my-2 bg-light CardShadowing grow">
    <div class="row m-0">
      <div class="col-md-12 p-0">
        <div class="row m-0 w-100 p-2">
          <div class="col-2 p-0 d-flex justify-content-center">
            <img class="rounded-circle w-100" src="https://images.unsplash.com/photo-1601247387431-7966d811f30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt="">
          </div>
          <div class="col-8 p-0 d-flex align-items-center">
            <h5 class="m-0 p-1">
              RaccyCoon
            </h5>
          </div>
          <div class="col-2 p-0 d-flex align-items-center">
            <div class="row m-0 w-100">
              <div class="col-12 p-0 text-break text-center">
                <p class="m-0">
                  {{ activeProfile }}
                </p>
              </div>
              <div class="col-12 text-center p-0">
                <input class="hidden cbx" for="cbx" id="cbx" type="checkbox" hidden /><label class="cbx m-0" for="cbx"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { profilesService } from '../services/ProfilesService'
import { AppState } from '../AppState'
export default {
  props: {
    player: {
      type: String,
      required: true
    }
  },
  setup(props) {
    onMounted(async() => {
      await profilesService.getProfileById(props.player)
    })
    return {
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
