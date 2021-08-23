<template>
  <li>{{ score }}</li>
</template>

<script>
export default {
  props: {
    score: {
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
