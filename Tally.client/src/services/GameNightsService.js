import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class GameNightsService {
  async getGameNightById(id) {
    const res = await tallyApi.get('api/gamenights/' + id)
    AppState.activeGameNight = res.data
    res.data.activeProfiles.forEach(id => {
      this.getGameNightProfileById(id)
    })
  }

  async getGameNightProfileById(id) {
    const res = await tallyApi.get('profile/' + id)
    AppState.activeGameNightProfiles.push(res.data)
    console.log(res.data)
  }
}

export const gameNightsService = new GameNightsService()
