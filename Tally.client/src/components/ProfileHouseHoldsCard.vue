<template>
  <router-link :to="{ name: 'Household', params: {id: household.id} }" class="nav-link ">
    Household
  </router-link>
</template>

<script>
export default {
  name: 'ProfileHouseHoldsCard',
  props: {
    household: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
