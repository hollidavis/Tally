import { Auth0Provider } from '@bcwdev/auth0provider'
import { gamesService } from '../services/GamesService'
import BaseController from '../utils/BaseController'

export class GamesController extends BaseController {
  constructor() {
    super('api/games')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getById)
      .post('', this.createGame)
      .delete('/:id', this.removeGame)
  }

  async getById(req, res, next) {
    try {
      const game = await gamesService.getById(req.params.id)
      res.send(game)
    } catch (error) {
      next(error)
    }
  }

  async createGame(req, res, next) {
    try {
      const game = await gamesService.createGame(req.body)
      res.send(game)
    } catch (error) {
      next(error)
    }
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
