<template>
  <div :ref="state.profile.id" class="d-flex align-items-center bg-white rounded shadow mt-2 py-3">
    <div class="p-0 d-flex mx-2">
      <img class="profile-img" :src="state.profile.picture" :alt="state.profile.name">
    </div>
    <h5 class="m-0 text-break mr-auto">
      {{ state.profile.name }}
    </h5>
    <form class="mx-3" @submit.prevent="submitResult">
      <input v-model="state.win"
             class="hidden cbxs"
             for="cbx"
             id="cbx"
             type="checkbox"
             hidden
      /><label class="cbx" for="cbx"></label>
      <button type="submit" class="btn btn-primary">
        SUBMIT
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { profilesService } from '../services/ProfilesService'
import { watchEffect } from '@vue/runtime-core'
import { resultsService } from '../services/ResultsService'
export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      profile: {},
      result: {
        householdId: props.player.householdId,
        profileId: props.player.profileId,
        gameApiId: props.player.gameApiId
      }
    })
    watchEffect(async() => {
      if (props.player) {
        state.profile = await profilesService.getProfileById(props.player.profileId)
        console.log(state.profile)
      }
    })
    return {
      state,
      async submitResult() {
        if (state.win === true) {
          console.log(state.result)
          // await resultsService.createResult(state.result)
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
// NOTE jelly checkbox
.cbx {
  position: relative;
  top: 1px;
  width: 17px;
  height: 17px;
  border: 1px solid #c8ccd4;
  border-radius: 3px;
  vertical-align: middle;
  transition: 0.1s ease;
  cursor: pointer;
}
.cbx:after {
  content: '';
  position: absolute;
  top: 1px;
  left: 5px;
  width: 5px;
  height: 11px;
  opacity: 0;
  transform: rotate(45deg) scale(0);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: all 0.3s ease;
  transition-delay: 0.15s;
}
.lbl {
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}
#cbx:checked ~ .cbx {
  border-color: transparent;
  background: #7758A4;
  animation: jelly 0.6s ease;
}
#cbx:checked ~ .cbx:after {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}
.cntr {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
}
@-moz-keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
@-webkit-keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
@-o-keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
</style>
