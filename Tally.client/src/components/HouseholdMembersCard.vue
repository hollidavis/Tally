<template>
  <div class="row m-0 w-100 bg-dark-pink d-flex justify-content-center py-3">
    <div class="col-md-10 p-0 text-center ">
      <h2>
        Members
      </h2>
    </div>
  </div>
  <div class="row m-0 w-100 bg-white rowHeight mb-3">
    <div v-for="game in games" :key="game.gameApiId">
      <HouseholdMemberItem />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseholdMembersCard',
  setup() {
    return {}
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

</style>
