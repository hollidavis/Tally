<template>
  <li>{{ game.name }}</li>
</template>

<script>

export default {
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

</style>
