import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GamesService {
  async getGamesById(id) {
    const res = await api.get('games/' + id)
    AppState.games = res.data
    logger.log('from service', AppState.games)
  }
}

export const gamesService = new GamesService()
