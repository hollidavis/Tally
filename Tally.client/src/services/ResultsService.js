import { AppState } from '../AppState'
import { tallyApi } from './AxiosService'

class ResultsService {
  async createResult(result) {
    const res = await tallyApi.post('api/results', result)
    console.log(res.data)
  }

  async getResultsByProfileId(id) {
  // NOTE this will need to be changed to call out to the Tally Api to get results by profile Id
  // This is fake data!!! Will need to do a get games by profile id
  // We will take the res and run the forEach on it to create the scores object
    const results = await tallyApi.get('profile/' + id + '/results')
    console.log(results, 'get results')
    const scores = []
    results.forEach(r => {
      if (!scores[r.gameApiId]) {
        scores[r.gameApiId] = 0
      }
      if (r.win) {
        scores[r.gameApiId]++
      }
    })
    console.log(scores, 'scores')
    // AppState.gameScores = scores
    // console.log(AppState.gameScores)
  }
}

export const resultsService = new ResultsService()
