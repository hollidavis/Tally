<template>
  <li>{{ game }}</li>
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

</style>
