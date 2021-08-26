<template>
  <div class="p-3 bg-light rounded shadow my-3 d-flex align-items-center">
    <img class="thumb-url"
         :src="searchGame.smallImg"
         :alt="searchGame.name"
    >
    <h3 class="ml-3 mr-auto m-0">
      {{ searchGame.name }}
    </h3>
    <button type="button" class="btn btn-primary" @click="addGame()">
      Add
    </button>
  </div>
</template>

<script>
import Pop from '../utils/Notifier'
import { gamesService } from '../services/GamesService'
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'

export default {
  props: {
    searchGame: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const state = reactive({
      newGame: {
        name: props.searchGame.name,
        description: props.searchGame.description,
        minPlayers: props.searchGame.minPlayers,
        maxPlayers: props.searchGame.maxPlayers,
        smallImg: props.searchGame.smallImg,
        largeImg: props.searchGame.largeImg,
        minPlayTime: props.searchGame.minPlayTime,
        maxPlayTime: props.searchGame.maxPlayTime,
        playerAge: props.searchGame.playerAge,
        websiteLink: props.searchGame.websiteLink,
        gameApiId: props.searchGame.gameApiId,
        householdId: route.params.householdId

      }
    })
    return {
      state,
      async addGame() {
        try {
          await gamesService.addGame(state.newGame)
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
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
