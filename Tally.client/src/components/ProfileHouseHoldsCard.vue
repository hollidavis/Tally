<template>
  <div class="component">
    <router-link :to="{ name: 'Household', params: {id: account.householdId} }" class="nav-link ">
      Household
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProfileHouseHoldsCard',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
