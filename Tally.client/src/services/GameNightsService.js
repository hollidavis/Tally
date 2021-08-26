import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class GameNightsService {
  async createGameNight(newGameNight) {
    const gameNight = await tallyApi.post('api/gamenights', newGameNight)
    AppState.gameNights.push(gameNight.data)
  }

  async getGameNightById(id) {
    const res = await tallyApi.get('api/gamenights/' + id)
    AppState.activeGameNight = res.data
    AppState.gameNightHouseholdId = res.data.householdId
    res.data.activeProfiles.forEach(id => {
      this.getGameNightProfileById(id)
    })
  }

  async getGameNightProfileById(id) {
    const res = await tallyApi.get('profile/' + id)
    AppState.activeGameNightProfiles.push(res.data)
  }
}

export const gameNightsService = new GameNightsService()
