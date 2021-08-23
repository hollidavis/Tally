<template>
  <div class="p-3 bg-light rounded shadow my-3 d-flex align-items-center">
    <img class="thumb-url"
         :src="searchGame.thumb_url"
         :alt="searchGame.name"
    >
    <h3 class="ml-3 mr-auto m-0">
      {{ searchGame.name }}
    </h3>
    <button type="button" class="btn btn-primary">
      Add
    </button>
  </div>
</template>

<script>
export default {
  props: {
    searchGame: {
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
.thumb-url{
  min-height: 10vh;
  max-width: 15vh;
  object-fit: cover;
  object-position: center;
}
</style>
