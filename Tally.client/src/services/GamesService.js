import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'
import { useRoute } from 'vue-router'

class GamesService {
  async searchGame(search) {
    const res = await tallyApi.get('/api/games/search/' + search)
    AppState.activeSearchGames = res.data
  }

  async addGame(newGame, id) {
    // const route = useRoute()
    const res = await tallyApi.post('/api/games', newGame)
    AppState.games.push(res.data)
    this.getGamesById(id)
  }

  async getGamesById(id) {
    const res = await tallyApi.get('/api/households/' + id + '/games')
    return res.data
  }
}

export const gamesService = new GamesService()
