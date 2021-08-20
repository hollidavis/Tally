import { Auth0Provider } from '@bcwdev/auth0provider'
import { householdsService } from '../services/HouseholdsService'
import BaseController from '../utils/BaseController'

export class HouseholdsController extends BaseController {
  constructor() {
    super('api/households')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getHouseholdById)
      .get('/:id/games', this.getGamesByHouseholdId)
      .get('/:id/gamenights', this.getGameNightByHouseholdId)
      .get('/:id/results', this.getResultsByHouseholdId)
      .put('/:id', this.editHousehold)
      .post('', this.createHousehold)
  }

  async getHouseholdById(req, res, next) {
    try {
      const household = await householdsService.getHouseholdById(req.params.id)
      res.send(household)
    } catch (error) {
      next(error)
    }
  }

  async getGamesByHouseholdId(req, res, next) {
    try {
      const games = await householdsService.getGamesByHouseholdId(req.params.id)
      res.send(games)
    } catch (error) {
      next(error)
    }
  }

  async getGameNightByHouseholdId(req, res, next) {
    try {
      const gameNights = await householdsService.getGameNightsByHouseholdId(req.params.id)
      res.send(gameNights)
    } catch (error) {
      next(error)
    }
  }

  async getResultsByHouseholdId(req, res, next) {
    try {
      const results = await householdsService.getResultsByHouseholdId(req.params.id)
      res.send(results)
    } catch (error) {
      next(error)
    }
  }

  async editHousehold(req, res, next) {
    try {
      req.body.ownerAccountId = req.userInfo.id
      const household = await householdsService.editHousehold(req.params.id, req.body)
      res.send(household)
    } catch (error) {
      next(error)
    }
  }

  async createHousehold(req, res, next) {
    try {
      const household = await householdsService.createHousehold(req.body)
      res.send(household)
    } catch (error) {
      next(error)
    }
  }
}
