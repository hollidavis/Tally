import { Auth0Provider } from '@bcwdev/auth0provider'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import BaseController from '../utils/BaseController'

export class HouseholdProfilesController extends BaseController {
  constructor() {
    super('api/householdprofiles')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createHouseholdProfile)
      .delete('/:id', this.destroyHouseholdProfile)
  }

  async createHouseholdProfile(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const householdProfile = await householdProfilesService.createHouseholdProfile(req.body)
      res.send(householdProfile)
    } catch (error) {
      next(error)
    }
  }

  async destroyHouseholdProfile(req, res, next) {
    try {
      const deleted = await householdProfilesService.destroyHouseholdProfile(req.params.id, req.userInfo.id)
      res.send(deleted, 'successfully deleted')
    } catch (error) {
      next(error)
    }
  }
}
