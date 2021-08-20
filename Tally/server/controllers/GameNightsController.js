import { Auth0Provider } from '@bcwdev/auth0provider'
import { gameNightsService } from '../services/GameNightsService'
import BaseController from '../utils/BaseController'

export class GameNightsController extends BaseController {
  constructor() {
    super('api/gamenights')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getGameNightById)
      .post('', this.createGameNight)
      .delete('/:id', this.removeGameNight)
  }

  async getGameNightById(req, res, next) {
    try {
      const gameNight = await gameNightsService.getGameNightById(req.params.id)
      res.send(gameNight)
    } catch (error) {
      next(error)
    }
  }

  async createGameNight(req, res, next) {
    try {
      const gameNight = await gameNightsService.createGameNight(req.body)
      res.send(gameNight)
    } catch (error) {
      next(error)
    }
  }

  async removeGameNight(req, res, next) {
    try {
      await gameNightsService.removeGameNight(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
