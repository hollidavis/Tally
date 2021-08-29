<template>
  <!-- Modal -->
  <div class="modal fade"
       :id="'gameDetails'
         +game.id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content modal-height">
        <div class="modal-header">
          <h3 class="modal-title">
            {{ game.name }}
          </h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body modal-overflow">
          <div class="p-3 bg-light rounded shadow my-3 d-flex align-items-center">
            <img class="w-100 modalImg"
                 :src="game.largeImg"
                 :alt="game.name"
            >
            <div class="px-3 ">
              <p><i class="fas fa-users pr-1"></i> {{game.minPlayers}} - {{game.maxPlayers}}</p>
              <p v-if="minPlayTime !== maxPlayTime"><i class="far fa-clock pr-1"></i> {{game.minPlayTime}} to {{game.maxPlayTime}} minutes</p>
              <p v-else><i class="far fa-clock pr-1"></i> {{game.maxPlayTime}} minutes</p>
              <p>Age: {{game.playerAge}} years+</p>
              <p><a :href="game.websiteLink">More Info</a></p>
              <div class="" :id="'description' + game.id">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    onMounted(() => { document.getElementById('description' + props.game.id).innerHTML = props.game.description })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.modalImg{
  max-width: 10vw;
}
.modal-overflow{
  overflow: auto;
}
.modal-height{
    max-height: 95vh;
}
</style>
