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
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">
            {{ game.name }}
          </h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="p-3 bg-light rounded shadow my-3 d-flex align-items-center">
            <img class="w-100"
                 :src="game.largeImg"
                 :alt="game.name"
            >
            <div :id="'description' + game.id">
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
  max-height: 300px;
  max-width: 300px;
}
</style>
