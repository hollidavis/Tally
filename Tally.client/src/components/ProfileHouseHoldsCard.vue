<template>

  <router-link :to="{ name: 'Household', params: {id: household.household.id} }" class="nav-link ">
    <p>{{ household.household.name }}</p>
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
