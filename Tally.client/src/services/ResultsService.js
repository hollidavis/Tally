import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class ResultsService {
  async createResult(result) {
    await tallyApi.post('api/results', result)
  }

  async getResultsByProfileId(id) {
    const res = await tallyApi.get('profile/' + id + '/results')
    const results = res.data
    const scores = {}
    results.forEach(r => {
      if (!scores[r.gameApiId]) {
        scores[r.gameApiId] = {}
        scores[r.gameApiId].score = 0
        scores[r.gameApiId].name = r.game.name
      }
      if (r.win) {
        scores[r.gameApiId].score++
      }
    })
    const sortScores = []
    for (const result in scores) {
      sortScores.push([scores[result].name, scores[result].score])
    }
    const gameRes = sortScores.sort((a, b) => {
      return b[1] - a[1]
    })
    AppState.gameResults = gameRes
  }

  async getResultsByHouseholdId(householdId, gameId) {
    const res = await tallyApi.get('api/households/' + householdId + '/results')
    const results = res.data.filter(r => r.gameApiId === gameId)
    const scores = {}
    results.forEach(r => {
      if (!scores[r.profileId]) {
        scores[r.profileId] = {}
        scores[r.profileId].score = 0
        scores[r.profileId].name = r.profile.name
      }
      if (r.win) {
        scores[r.profileId].score++
      }
    })
    const sortScores = []
    for (const result in scores) {
      sortScores.push([scores[result].name, scores[result].score])
    }
    const gameRes = sortScores.sort((a, b) => {
      return b[1] - a[1]
    })
    AppState.gameResults = gameRes
  }
}

export const resultsService = new ResultsService()
