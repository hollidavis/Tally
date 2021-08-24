import { Auth0Provider } from '@bcwdev/auth0provider'
import { gamesService } from '../services/GamesService'
import BaseController from '../utils/BaseController'
import axios from 'axios'
import GameModel from '../models/GameModel'

export const gameApi = axios.create({
  baseURL: 'https://api.boardgameatlas.com/api',
  timeout: 8000
})
export class GamesController extends BaseController {
  constructor() {
    super('api/games')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getGameById)
      .get('/search/:term', this.searchApi)
      .post('', this.createGame)
      .delete('/:id', this.removeGame)
  }

  async getGameById(req, res, next) {
    try {
      const game = await gamesService.getGameById(req.params.id)
      res.send(game)
    } catch (error) {
      next(error)
    }
  }

  async searchApi(req, res, next) {
    try {
      // This drills down to the game api res.data
      const data = await gameApi.get('/search?name=' + req.params.term + '&client_id=' + process.env.API_KEY)
      // Line 36 runs the game api results through the Game Model to clean up the model
      // TO DO fix map function
      const results = data.map(rawGame => this.createGameModel(rawGame))
      res.send(results)
    } catch (error) {
      next(error)
    }
  }

  async createGameModel(rawGame) {
    const game = new GameModel(rawGame)
    return game
  }

  async createGame(req, res, next) {
    // TODO This needs to add the game to the household game cabinet. Maybe rename to addGame?
  }

  async removeGame(req, res, next) {
    try {
      await gamesService.removeGame(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
