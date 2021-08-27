import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class ResultsService {
  async createResult(result) {
    const res = await tallyApi.post('api/results', result)
    console.log(res.data)
  }

  async getResultsByProfileId(id) {
    const res = await tallyApi.get('profile/' + id + '/results')
    const results = res.data
    console.log(results)
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
    console.log(scores)
    AppState.scores = scores
    // console.log(AppState.gameScores)
  }

  async getResultsByHouseholdId(id) {
    const res = await tallyApi.get('api/households/' + id + '/results')
    const results = res.data
    console.log(results)
    const scores = {}
    // results.forEach(r => {
    //   if (!scores[r.gameApiId]) {
    //     scores[r.gameApiId] = {}
    //     scores[r.gameApiId].score = 0
    //     scores[r.gameApiId].name = r.game.name
    //   }
    //   if (r.win) {
    //     scores[r.gameApiId].score++
    //   }
    // })
    console.log(scores)
    AppState.scores = scores
    // console.log(AppState.gameScores)
  }
}

export const resultsService = new ResultsService()
