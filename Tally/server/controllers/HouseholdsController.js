import { Auth0Provider } from '@bcwdev/auth0provider'
import { householdsService } from '../services/HouseholdsService'
import BaseController from '../utils/BaseController'
import { householdProfilesService } from '../services/HouseholdProfilesService'

export class HouseholdsController extends BaseController {
  constructor() {
    super('api/households')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getHouseholdById)
      .get('/:id/games', this.getGamesByHouseholdId)
      .get('/:id/gamenights', this.getGameNightByHouseholdId)
      .get('/:id/results', this.getResultsByHouseholdId)
      .get('/:id/profiles', this.getProfilesByHouseholdId)
      .put('/:id', this.editHousehold)
      .put('/:id/accessKey', this.respinAccessKey)
      // .post('', this.createHousehold)
  }

  /** Gets household object using provided id */
  async getHouseholdById(req, res, next) {
    try {
      const household = await householdsService.getHouseholdById(req.params.id)
      res.send(household)
    } catch (error) {
      next(error)
    }
  }

  /** Gets array of game objects that belong to a specific household */
  async getGamesByHouseholdId(req, res, next) {
    try {
      const games = await householdsService.getGamesByHouseholdId(req.params.id)
      res.send(games)
    } catch (error) {
      next(error)
    }
  }

  /** Gets array of game night objects that belong to a specific household */
  async getGameNightByHouseholdId(req, res, next) {
    try {
      const gameNights = await householdsService.getGameNightsByHouseholdId(req.params.id)
      res.send(gameNights)
    } catch (error) {
      next(error)
    }
  }

  /** Gets array of result objects that belong to a specific household */
  async getResultsByHouseholdId(req, res, next) {
    try {
      const results = await householdsService.getResultsByHouseholdId(req.params.id)
      res.send(results)
    } catch (error) {
      next(error)
    }
  }

  /** Gets all the profiles in a household using provided household id */
  async getProfilesByHouseholdId(req, res, next) {
    try {
      const householdProfiles = await householdProfilesService.getProfilesByHouseholdId(req.params.id)
      res.send(householdProfiles)
    } catch (error) {
      next(error)
    }
  }

  /** Edits the specified household object. Users can only edit the household they own */
  async editHousehold(req, res, next) {
    try {
      req.body.ownerAccountId = req.userInfo.id
      const household = await householdsService.editHousehold(req.params.id, req.body)
      res.send(household)
    } catch (error) {
      next(error)
    }
  }

  async respinAccessKey(req, res, next) {
    try {
      const accessKey = await householdsService.createAccessKey()
      res.send(accessKey)
    } catch (error) {
      next(error)
    }
  }

  // NOTE commenting out because potential duplicate function
  // async createHousehold(req, res, next) {
  //   try {
  //     const household = await householdsService.createHouseholdIfNeeded(req.userInfo)
  //     res.send(household)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
