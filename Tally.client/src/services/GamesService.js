import { AppState } from '../AppState'
import { gameApi, tallyApi } from './AxiosService'

class GamesService {
  // async getResultsByProfileId(id) {
  // NOTE this will need to be changed to call out to the Tally Api to get results by profile Id
  // This is fake data!!! Will need to do a get games by profile id
  // We will take the res and run the forEach on it to create the scores object
  //   const games = [{ gameApiId: 123, name: 'Game 123', win: false }, { gameApiId: 123, name: 'Game 123', win: true }, { gameApiId: 354, name: 'Game 354', win: true }, { gameApiId: 523, name: 'Game 523', win: false }, { gameApiId: 123, name: 'Game 123', win: true }]
  //   const scores = {}
  //   games.forEach(g => {
  //     if (!scores[g.gameApiId]) {
  //       scores[g.gameApiId] = 0
  //     }
  //     if (g.win) {
  //       scores[g.gameApiId]++
  //     }
  //   })
  //   AppState.gameScores = scores
  // }

  // NOTE Not sure if the get request route is correct. Maybe test tomorrow
  async searchGame(search) {
    const res = await tallyApi.get('/api/games/search/' + search)
    console.log(res.data)
  }
}

export const gamesService = new GamesService()
