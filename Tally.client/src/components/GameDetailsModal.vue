<template>
  <!-- Modal -->
  <div
    class="modal fade"
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
          <div class="row p-3 my-3 d-flex align-items-center">
            <div class="col-md-3 col-12 mb-3">
              <img class="modalImg"
                   :src="game.largeImg"
                   :alt="game.name"
              >
            </div>
            <div class="col-md-9 col-12 px-3">
              <p><i class="fas fa-users pr-1"></i> {{ game.minPlayers }} - {{ game.maxPlayers }}</p>
              <p v-if="game.minPlayTime !== game.maxPlayTime">
                <i class="far fa-clock pr-1"></i> {{ game.minPlayTime }} to {{ game.maxPlayTime }} minutes
              </p>
              <p v-else>
                <i class="far fa-clock pr-1"></i> {{ game.minPlayTime }} minutes
              </p>
              <p>Age: {{ game.playerAge }} years+</p>
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
  max-width: 100%;
}
.modal-overflow{
  overflow: auto;
}
.modal-height{
    max-height: 95vh;
}
</style>
