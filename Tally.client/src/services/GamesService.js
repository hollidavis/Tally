import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class GamesService {
  async searchGame(search) {
    const res = await tallyApi.get('/api/games/search/' + search)
    AppState.activeSearchGames = res.data
  }

  async addGame(newGame) {
    const res = await tallyApi.post('/api/games', newGame)
    AppState.games.push(res.data)
  }

  async getGamesByHouseholdId(id) {
    const res = await tallyApi.get('/api/households/' + id + '/games')
    AppState.games = res.data
  }
}

export const gamesService = new GamesService()
