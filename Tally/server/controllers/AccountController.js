import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import { householdsService } from '../services/HouseholdsService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:id', this.getProfileById)
      .get('/:id/results', this.getResultsByProfileId)
      .get('/:id/households', this.getHouseholdsByProfileId)
      .get('/:id/myhousehold', this.getMyHousehold)
      .put('/:id', this.editProfile)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  /** Gets the profile of the user who is logged in */
  async getProfileById(req, res, next) {
    try {
      const profile = await accountService.getProfileById(req.userInfo.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  /** Gets the results of the user who is logged in */
  async getResultsByProfileId(req, res, next) {
    try {
      const results = await accountService.getResultsByProfileId(req.userInfo.id)
      res.send(results)
    } catch (error) {
      next(error)
    }
  }

  /** Gets all households the logged in user belongs to */
  async getHouseholdsByProfileId(req, res, next) {
    try {
      const profileHouseholds = await householdProfilesService.getHouseholdsByProfileId(req.userInfo.id)
      res.send(profileHouseholds)
    } catch (error) {
      next(error)
    }
  }

  /** Gets the household the logged in user owns. If they don't have a household it will create a new one. */
  async getMyHousehold(req, res, next) {
    try {
      const myHousehold = await householdsService.getMyHousehold(req.userInfo.id)
      res.send(myHousehold)
    } catch (error) {
      next(error)
    }
  }

  /** Edits the profile of the user who is logged in */
  async editProfile(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const account = await accountService.editProfile(req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
