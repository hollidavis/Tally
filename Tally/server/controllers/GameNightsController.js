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
      .put('/:id', this.joinGameNight)
      .delete('/:id', this.removeGameNight)
  }

  /** Gets game night object by provided id */
  async getGameNightById(req, res, next) {
    try {
      const gameNight = await gameNightsService.getGameNightById(req.params.id)
      res.send(gameNight)
    } catch (error) {
      next(error)
    }
  }

  /** Creates game night with provided body */
  async createGameNight(req, res, next) {
    try {
      const gameNight = await gameNightsService.createGameNight(req.body)
      res.send(gameNight)
    } catch (error) {
      next(error)
    }
  }

  /** Adds a profile id to the game nights activeProfiles array */
  async joinGameNight(req, res, next) {
    try {
      await gameNightsService.joinGameNight(req.params.id, req.body)
    } catch (error) {
      next(error)
    }
  }

  /** Deletes game night by provided id */
  async removeGameNight(req, res, next) {
    try {
      await gameNightsService.removeGameNight(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
