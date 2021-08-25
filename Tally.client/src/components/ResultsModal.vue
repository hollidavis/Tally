<template>
  <div class="row m-0 w-100">
    <div class="col-md-12 p-0">
      <div class="row m-0 w-100">
        <div class="col-md-12 p-0">
          <h1>What Game Did You Play?</h1>
        </div>
        <div class="col-md-12 p-0 dropdown">
          <button class="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
          >
            Choose Your Game
          </button>
          <!-- NOTE This will need to populate the games from the household -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="col-md-12 p-0">
          <h1>Who Played?</h1>
        </div>
        <div class="col-md-12 p-0 dropdown">
          <button class="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
          >
            Who Played?
          </button>
          <!-- NOTE This will need to populate the Profiles from the household -->
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="col-md-12 p-0">
          <h1>Who Won?</h1>
        </div>
        <div class="col-md-12 p-0">
          <div class="row m-0">
            <!-- NOTE This is going to be where we do a v-for over the players in the Household. We just need the data before we can do it.  -->
            <!-- <PlayerCard v-for="p in players" :key="p.id" :player="p" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from './PlayerCard.vue'
export default {
  name: 'Component',
  setup() {
    return {}
  },
  components: {}
}
</script>

    PlayerCard<style lang="scss" scoped>
h1 {
  font-size: 30px;
}
h2 {
  font-size: 15px;
  font-style: italic;
}
</style>
