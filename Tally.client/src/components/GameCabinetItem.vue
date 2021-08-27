<template>
  <div class="row m-0 my-3">
    <div class="col-md-9 col-7 p-0 d-flex align-items-center">
      <img class="thumbUrl p-1" :src="game.smallImg" alt="">
      <h6 class="m-0 p-3" type="button" data-toggle="modal" :data-target="'#gameDetails'+game.id" title="showGameDetails">
        {{ game.name }}
      </h6>
    </div>
    <div class="col-md-3 p-0 col-3 d-flex align-items-center justify-content-center text-break">
      <button class="btn btn-light">
        Scores
      </button>
    </div>
  </div>
  <GameDetailsModal :game="game" />
</template>

<script>

export default {
  name: 'GameCabinetItem',
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.thumbUrl {
  height: 8vh;
  width: 8vh;
  object-fit: cover;
  object-position: center;
}
</style>
