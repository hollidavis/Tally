import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class GameNightsService {
  async getGameNightsById(id) {
    const res = await tallyApi.get('api/gamenights/' + id)
    console.log(res.data)
    AppState.activeGameNight = res.data
  }
}

export const gameNightsService = new GameNightsService()
