import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class GameNightsService {
  async createGameNight(newGameNight) {
    const res = await tallyApi.post('api/gamenights', newGameNight)
    AppState.gameNights.push(res.data)
  }

  async endGameNight(gamenight) {
    await tallyApi.delete('api/gamenights/' + gamenight.id)
    this.getGameNightByHouseholdId(gamenight.householdId)
  }

  async getGameNightByHouseholdId(id) {
    const res = await tallyApi.get('api/households/' + id + '/gamenights')
    AppState.gameNights = res.data
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

  async joinGameNight(householdId, gameNightId, player) {
    await tallyApi.put('api/gamenights/' + gameNightId, player)
    await this.getGameNightByHouseholdId(householdId)
  }
}

export const gameNightsService = new GameNightsService()
